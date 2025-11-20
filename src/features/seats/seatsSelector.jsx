import { useSelector } from "react-redux";
import Seat from "../../components/Seat";

export default function SeatSelector() {
    const seatLayout = useSelector((s) => s.seats.seatLayout);

    return (
        <div>
            {seatLayout.map((row, index) => (
                <div key={index} className="flex items-center mb-2 ">

                    {/* Hàng label */}
                    {index === 0 ? (
                        <>
                            <span className="w-6 font-bold"></span>
                            {row.danhSachGhe.map((ghe) => (
                                <span
                                    key={ghe.soGhe}
                                    className="w-10 h-10 flex items-center justify-center mx-1 font-bold bg-transparent"
                                >
                                    {ghe.soGhe}

                                </span>
                            ))}
                        </>
                    ) : (
                        <>
                            {/* Các hàng ghế thật */}
                            <span className="w-6 font-bold">{row.hang}</span>
                            {row.danhSachGhe.map((ghe) => (
                                <Seat key={ghe.soGhe} ghe={ghe} />
                            ))}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
