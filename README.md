# Smart Parking System using IoT

Mini-project source code developed by a team of 3 for our IoT course in college
Team members:

-   Amaan.js
-   Shreeraj
-   Gautam

## Running locally

Required: Python (with the venv module), pip, NodeJS

```
python -m venv venv
venv\Scripts\activate
pip install flask
cd dist
python app.py
```

## Development

Required: Python (with the venv module), pip, NodeJS

### Initializing

```
python -m venv venv
venv\Scripts\activate
pip install flask
cd src\client
npm i
```

### Running

Unlike in the `dist` version, during development, the flask server is used only as a backend to host API endpoints. \
The vite server provided by SvelteKit proxies all requests to the flask backend. \
Start the flask server (from src folder): `python app.py` \
Start the vite server (from client folder): `npm run dev -- --open` \

## Front-end

-   `/`: The home page showing available parking slots and parking fee. This is for use of the customers
-   `/checkout`: Page showing a list of all checked-out vehicles and their receipts. Each receipt can be payed
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
interface Config {
	parking_fee: number;
}

interface Spot {
	name: string;
	occupied: boolean;
}

interface ParkingTicket {
	parking_spot_name: string;
	parking_fee: number;
	start_time: string;
}

interface ParkingReceipt extends ParkingTicket {
	id: number;
	end_time: string; // ISO format
	time_parked: number; // minutes
	amount: number; // rupees
	payed: boolean;
}
```
