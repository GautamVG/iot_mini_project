import RPi.GPIO as GPIO
from lib import db;

_sensors = [3, 5, 7] # GPIO.BOARD 

GPIO.setmode(GPIO.BOARD);
for sensor in _sensors:
    GPIO.setup(sensor, GPIO.IN);

def car_present_at_sensor(i):
    return GPIO.input(_sensors[i]) == 0;

def detect_parking():
    # Outputs 2 lists of Spot data
    # one list contains spots which just had a vehicle enter
    # other list contains spots which just had a vehicle leave

    spots = db.query("select * from `spots`;");
    checked_in_spots = [];
    checked_out_spots = [];

    for i in range(0, len(spots)):
        car_presesnt = car_present_at_sensor(i)
        if not spots[i]["occupied"] and car_presesnt:
            checked_in_spots.append(spots[i]);
        if spots[i]["occupied"] and not car_presesnt:
            checked_out_spots.append(spots[i]);

    return checked_in_spots, checked_out_spots;