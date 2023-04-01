# Smart Parking System using IoT

Mini-project source code developed by a team of 3 for our IoT course in college
Team members:

-   Amaan.js
-   Shreeraj
-   Gautam

## Front-end

The following end-points are defined

-   `/`: The home page showing available parking slots, parking fee, a button to open the `/checkin` page and a button to open the `/checkout` page.
-   `/checkin`: Claim any free parking spot and assign a 4-digit code to that spot. Display the parking spot and the code to user.
-   `/checkout`: Prompt the user for a 4-digit code. Get the parking spot assigned to the code, calculate its fee, display the fee and ask for payment. After payment, free up the spot.
-   `/admin`: Serve the admin dashboard

## Back-end

-   `/api`:
    -   `/spots`:
        -   `/list`: Returns a list of `Spot` objects
    -   `/checkin`: If spot free, returns a `ParkingTicket` object, otherwise throws an http error
    -   `/checkout?code=PARKING_CODE`: If code valid, returns a `ParkingReceipt` object, otherwise throws an http error

```
interface Spot {
    name: string,
    occupied: boolean
}

interface ParkingTicket {
    code: int,
    parking_spot_name: string,
}

interface ParkingReceipt extends ParkingTicket {
    start_time:     string      // ISO format
    end_time:       string      // ISO format
    time_parked:    float,      // minutes
    parking_fee:    float,      // rupees per minute
    amount:         float,      // rupees
}
```
