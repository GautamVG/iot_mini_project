from threading import Thread;
from math import ceil;
from datetime import datetime;
from flask import Flask, abort, request, send_from_directory;
from lib import db;
from lib import parking_detector;
# Use this package instead of the above for developing without a Raspberry Pi
# from lib import parking_detector_sim as parking_detector;

# The flask application
app = Flask(__name__);

# ----------------------------------------------- Setup -----------------------------------------------------------

# DB Setup
db.run_script("schema.sql");

# ------------------------------------------------ Routes ---------------------------------------------------------

@app.route('/')
def index():
    return send_from_directory('client/build', 'index.html');

@app.route('/checkout')
def checkout():
    return send_from_directory('client/build', 'checkout.html');

@app.route('/admin')
def admin():
    return send_from_directory('client/build', 'admin.html');

@app.route('/api/config')
def get_config():
    res = db.query("select * from `config`");
    return res[0];

@app.route('/api/spots/list')
def spots_list():
    return db.query("select * from `spots`;");

@app.route('/api/tickets/list')
def tickets_list():
    return db.query("select * from `tickets`;");

@app.route('/api/receipts/list')
def receipts_list():
    return db.query("select * from `receipts`;");

@app.route('/api/receipts/list_payable')
def receipts_list_payable():
    return db.query("select * from `receipts` where `payed` = false");

@app.route('/api/receipts/pay')
def receipt_pay():
    if (request.args["id"] is None):
        abort(400, description = "Receipt ID is absent");

    res = db.query("select count() as `count` from `receipts` where `id` = ?", [request.args["id"]]);
    if (res[0]["count"] == 0):
        abort(400, description = "Receipt ID is not valid");

    db.query("update `receipts` set `payed` = true where `id` = ?", [request.args["id"]]);
    return {};

# Path for all the static files (compiled JS/CSS, etc.)
@app.route("/<path:path>")
def home(path):
    return send_from_directory('client/build', path);

# ------------------------------------------------ Event loop for hardware interfacing ---------------------------------------------------------

def event_loop():
    while True:
        checked_in_spots, checked_out_spots = parking_detector.detect_parking();

        # For each checked in spot, insert a ticket into the database
        for spot in checked_in_spots:
            parking_spot_name = spot["name"];
            start_time = datetime.now();
            db.query("insert into `tickets` (`parking_spot_name`, `start_time`, `parking_fee`) select ?, ?, `parking_fee` from `config`;", [parking_spot_name, start_time]);
            db.query("update `spots` set `occupied` = true where `name` = ?;", [parking_spot_name]);

        # For each checked out spot, remove a ticket and insert a receipt
        for spot in checked_out_spots:
            parking_spot_name = spot["name"];

            tickets = db.query("select * from `tickets` where `parking_spot_name` = ? limit 1;", [parking_spot_name]);
            if (len(tickets) == 0):
                print("Vehicle checked out without a ticket at " + parking_spot_name);

            else: 

                ticket = tickets[0];
                start_time = ticket["start_time"];
                parking_fee = ticket["parking_fee"];
                end_time = datetime.now();
                time_parked = ceil((end_time - start_time).total_seconds() / 60);
                amount = time_parked * parking_fee;

                db.query("update `spots` set `occupied` = false where `name` = ?;", [parking_spot_name]);
                db.query("delete from `tickets` where `parking_spot_name` = ?", [parking_spot_name]);
                db.query(
                    "insert into `receipts` (`parking_spot_name`, `start_time`, `end_time`, `time_parked`, `parking_fee`, `amount`) values (?, ?, ?, ?, ?, ?)",
                    [
                        parking_spot_name,
                        start_time,
                        end_time,
                        time_parked,
                        parking_fee,
                        amount
                    ]
                )

# ------------------------------------------------ Starting the server -------------------------------------------------------------------------

Thread(target = event_loop, daemon = True).start();

if __name__ == "__main__":
    app.run(debug=True)
