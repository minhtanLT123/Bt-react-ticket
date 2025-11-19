import { useSelector } from "react-redux";
import SeatSelector from "../features/seats/seatsSelector";

export default function MovieBooking() {
    const selectedSeats = useSelector((s) => s.seats.selectedSeats);

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Đặt ghế xem phim</h1>

            <SeatSelector />

            <div className="mt-6 p-4 bg-gray-100 rounded">
                <h2 className="font-semibold">Ghế đã chọn:</h2>
                <p>{selectedSeats.length ? selectedSeats.join(", ") : "Chưa chọn"}</p>
                <p className="mt-2 font-bold">
                    Tổng tiền: {selectedSeats.length * 80000} VND
                </p>
            </div>
        </div>
    );
}
