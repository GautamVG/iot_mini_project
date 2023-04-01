from flask import Flask

app = Flask(__name__);

@app.route('/')
def index():
    return "Hello Wordl!";

@app.route('/api/spots/list')
def spots_list():
    return [];

@app.route('/api/checkin')
def checkin():
    return {
        'code': 3711,
        'parking_spot_name': 'A2'
    };

@app.route('/api/checkout')
def checkout():
    return {
        'code': 3711,
        'parking_spot_name': 'A2',
        'start_time': "habibi",
        'end_time': "habibi",
        'time_parked': 37,
        'parking_fee': 7,
        'amount': 37*7
    };

