import RPi.GPIO as GPIO
import time;
from lib import db;

dist_threshold = 5 # cm
_echo_sensors = [3, 5, 7] # GPIO.BOARD 
_trig_sensors = [11, 13, 15] # GPIO.BOARD 

GPIO.setmode(GPIO.BOARD);
for sensor in _echo_sensors:
    GPIO.setup(sensor, GPIO.IN);
for sensor in _echo_sensors:
    GPIO.setup(sensor ,GPIO.OUT);

def car_present_at_sensor(i):
    # set Trigger to HIGH
    GPIO.output(_trig_sensors[i], True)
 
    # set Trigger after 0.01ms to LOW
    time.sleep(0.00001);
    GPIO.output(_trig_sensors[i], False)
 
    StartTime = time.time()
    StopTime = time.time()
 
    # save StartTime
    while GPIO.input(_echo_sensors[i]) == 0:
        StartTime = time.time()
 
    # save time of arrival
    while GPIO.input(_echo_sensors[i]) == 1:
        StopTime = time.time()
 
    # time difference between start and arrival
    TimeElapsed = StopTime - StartTime
    # multiply with the sonic speed (34300 cm/s)
    # and divide by 2, because there and back
    distance = (TimeElapsed * 34300) / 2
 
    return distance < dist_threshold;

def detect_parking():
    # Outputs 2 lists of Spot data
    # one list contains spots which just had a vehicle enter
    # other list contains spots which just had a vehicle leave

    spots = db.query("select * from `spots`;");
    checked_in_spots = [];
    checked_out_spots = [];

    for i in range(0, len(spots)):
        if not spots[i]["occupied"] and car_present_at_sensor(i):
            checked_in_spots.append(spots[i]);
        if spots[i]["occupied"] and not car_present_at_sensor(i):
            checked_out_spots.append(spots[i]);

    return checked_in_spots, checked_out_spots;