import { useSelector } from "react-redux";
import Seat from "../../components/Seat";

export default function SeatSelector() {
    const seatLayout = useSelector((s) => s.seats.seatLayout);

    return (
        <div>
            {seatLayout.map((row, index) => (
                <div key={index} className="flex items-center mb-2">
                    <span className="w-6 font-bold">{row.hang}</span>

                    {row.danhSachGhe.map((ghe) => (
                        <Seat key={ghe.soGhe} ghe={ghe} />
                    ))}
                </div>
            ))}
        </div>
    );
}
