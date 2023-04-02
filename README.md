# Smart Parking System using IoT

Mini-project source code developed by a team of 3 for our IoT course in college
Team members:

-   Amaan.js
-   Shreeraj
-   Gautam

> For deployment, clone the `prod` branch. The flask server is still required but svelte kit is not. The front-end is directly served from the flask app

## Development

Required: Python, pip, NodeJS

```
venv\Scripts\activate
pip install flask
cd src\client
npm i
```

Unlike in the `prod` version, during development, the flask server is used only as a backend to host API endpoints. \
The vite server provided by SvelteKit proxies all requests to the flask backend. \
Start the flask server (from src folder): `python app.py` \
Start the vite server (from client folder): `npm run dev -- --open` \

## Front-end

-   `/`: The home page showing available parking slots and parking fee. This is for use of the customers
-   `/admin`: The admin dashboard. Shows all parking slots, with parking tickets. Shows a list of parking receipts, graphs, visualizations, etc.

## Back-end

-   `/api`:
    -   `/spots`:
        -   `/list`: Returns a list of `Spot` objects
    -   `/tickets`:
        -   `/list`: Returns a list of `ParkingTicket` objects
    -   `/receipts`:
        -   `/list`: Returns a list of `ParkingReceipt` objects

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
