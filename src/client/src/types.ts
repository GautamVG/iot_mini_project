interface Spot {
	name: string;
	occupied: boolean;
}

interface ParkingTicket {
	code: number;
	parking_spot_name: string;
}

interface ParkingReceipt extends ParkingTicket {
	start_time: string; // ISO format
	end_time: string; // ISO format
	time_parked: number; // minutes
	parking_fee: number; // rupees per minute
	amount: number; // rupees
}
