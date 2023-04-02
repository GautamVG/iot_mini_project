from threading import Thread;
from random import randint;
from datetime import datetime;
from flask import Flask, abort, request, send_from_directory;
from lib import db;
from lib import parking_detector;

# The flask application
app = Flask(__name__);

# ----------------------------------------------- Setup -----------------------------------------------------------

# DB Setup
db.run_script("schema.sql");
# res = db.query("select * from `slots`;");
# print("Hello")
# print(res)

# ------------------------------------------------ Routes ---------------------------------------------------------

@app.route('/')
def index():
    return send_from_directory('client/public', 'index.html');

@app.route('/admin')
def admin():
    return "Hello ADmin!";

@app.route('/api/spots/list')
def spots_list():
    return db.query("select * from `spots`;");

@app.route('/api/tickets/list')
def tickets_list():
    return db.query("select * from `tickets`;");

@app.route('/api/receipts/list')
def receipts_list():
    return db.query("select * from `receipts`;");

# Path for all the static files (compiled JS/CSS, etc.)
@app.route("/<path:path>")
def home(path):
    return send_from_directory('client/public', path);

# ------------------------------------------------ Event loop for hardware interfacing ---------------------------------------------------------

def event_loop():
    while True:
        checked_in_spots, checked_out_spots = parking_detector.detect_parking();
        if (len(checked_in_spots)):
            print("IN")
            print(checked_in_spots);
            print("\n");
        if (len(checked_out_spots)):
            print("OUT")
            print(checked_out_spots);
            print("\n");

        # For each checked in spot, insert a ticket into the database
        for spot in checked_in_spots:
            parking_spot_name = spot["name"];
            start_time = datetime.now();
            db.query("insert into `tickets` (`parking_spot_name`, `start_time`) values (?, ?);", [parking_spot_name, start_time]);
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
                end_time = datetime.now();
                time_parked = (end_time - start_time).total_seconds();
                parking_fee = 10;
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

# event_loop_thread = Thread(target = event_loop, daemon = True);
# event_loop_thread.start();
Thread(target = event_loop, daemon = True).start();

if __name__ == "__main__":
    app.run(debug=True)
