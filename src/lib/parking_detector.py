import RPi.GPIO as GPIO
import time
from lib import db;

_sensors = [3, 5, 7] # GPIO.BOARD 

GPIO.setmode(GPIO.BOARD);
for sensor in _sensors:
    GPIO.setup(sensor,GPIO.IN);

def detect_parking():
    # Outputs 2 lists of Spot data
    # one list contains spots which just had a vehicle enter
    # other list contains spots which just had a vehicle leave

    spots = db.query("select * from `spots`;");
    # empty_spots = [spot for spot in spots if spot["occupied"] == 0];
    # occupied_spots = [spot for spot in spots if spot["occupied"] == 1];
    checked_in_spots = [];
    checked_out_spots = [];

    return checked_in_spots, checked_out_spots;