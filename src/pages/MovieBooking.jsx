import { useSelector, useDispatch } from "react-redux";
import { toggleSeat } from "../features/seats/seatsSlice";
import SeatSelector from "../features/seats/seatsSelector";

export default function MovieBooking() {
    const selectedSeats = useSelector((s) => s.seats.selectedSeats);
    const dispatch = useDispatch();
    return (
        <div className="container text-center" >
            <div className=" h-screen w-screen bg-cover bg-center "
                style={{ backgroundImage: "url('/images/bgmovie.jpg')" }}

            >
                {/* Overlay làm tối 80% */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10" >
                    <h1 className="text-2xl font-bold mb-4 pt-4 text-yellow-400 ">Đặt ghế xem phim</h1>
                    <div className="p-10 grid grid-cols-3 gap-3">
                        <div className="col-span-2 justify-center flex flex-col items-center">
                            <h1 className="bg-amber-500 w-180 p-5">Màn Hình</h1>
                            <SeatSelector />
                        </div>
                        <div className="mt-6 p-4 rounded bg-transparent h-120 overflow-y-auto border border-gray-600 border-none">
                            <div className="">
                                <div className="flex p-2 ">
                                    <span className="w-10 h-10 border rounded mx-1 bg-red-500"></span>
                                    <h1 className="text-white" >Ghế đã đặt</h1>

                                </div>

                                <div className="flex p-2">
                                    <span className="w-10 h-10 border rounded mx-1 bg-green-400"></span>
                                    <h1 className="text-white">Ghế đang đặt</h1>

                                </div>
                                <div className="flex p-2">
                                    <span className="w-10 h-10 border rounded mx-1 bg-amber-50"></span>
                                    <h1 className="text-white">Ghế chưa đặt</h1>

                                </div>
                            </div>
                            <div className="mt-4">
                                <table className="w-full borde">
                                    <thead className="bg-transparent">
                                        <tr>
                                            <th className="border px-4 py-2  text-white">Số ghế</th>
                                            <th className="border px-4 py-2  text-white">Giá</th>
                                            <th className="border px-4 py-2  text-white">Hủy</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {selectedSeats.length ? (
                                            selectedSeats.map((seat, index) => (
                                                <tr key={index} className="text-center text-amber-300">
                                                    <td className="border px-4 py-2">{seat}</td>
                                                    <td className="border px-4 py-2">80,000 VND</td>
                                                    <td className="border px-4 py-2">
                                                        <button
                                                            className="bg-red-500 text-white px-2 py-1 rounded"
                                                            onClick={() => dispatch(toggleSeat(seat))}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center py-2 border text-white">
                                                    Chưa chọn ghế
                                                </td>
                                            </tr>
                                        )}
                                        <tr>
                                            <p className="mt-2 font-bold text-amber-500">
                                                Tổng tiền: {selectedSeats.length * 80000} VND
                                            </p>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
