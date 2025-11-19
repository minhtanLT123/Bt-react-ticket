import { useDispatch, useSelector } from "react-redux";
import { toggleSeat } from "../features/seats/seatsSlice";
import clsx from "clsx";

export default function Seat({ ghe }) {
    const dispatch = useDispatch();
    const { selectedSeats } = useSelector((s) => s.seats);

    const isSelected = selectedSeats.includes(ghe.soGhe);
    const isBooked = ghe.daDat;

    return (
        <button
            onClick={() => dispatch(toggleSeat(ghe.soGhe))}
            disabled={isBooked}
            className={clsx(
                "w-10 h-10 border rounded mx-1",
                isBooked && "bg-red-500 cursor-not-allowed",
                isSelected && "bg-green-500",
                !isBooked && !isSelected && "bg-gray-200"
            )}
        >
            {ghe.soGhe}
        </button>
    );
}
