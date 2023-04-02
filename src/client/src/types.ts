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
