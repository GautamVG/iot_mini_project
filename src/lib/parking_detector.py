from random import randint
from lib import db;

# TODO: Interface with Sensors here
# Currently this function generates data randomly

def detect_parking():
    # Outputs 2 lists of Spot data
    # one list contains spots which just had a vehicle enter
    # other list contains spots which just had a vehicle leave

    delay = 1000;
    spots = db.query("select * from `spots`;");
    empty_spots = [spot for spot in spots if spot["occupied"] == 0];
    occupied_spots = [spot for spot in spots if spot["occupied"] == 1];
    checked_in_spots = [];
    checked_out_spots = [];

    if (len(empty_spots) > 0 and randint(0, delay) == 0):
        checked_in_spots.append(empty_spots[randint(0, len(empty_spots) - 1)]);

    if (len(occupied_spots) > 0 and randint(0, delay) == 0):
        checked_out_spots.append(occupied_spots[randint(0, len(occupied_spots) - 1)]);

    return checked_in_spots, checked_out_spots;