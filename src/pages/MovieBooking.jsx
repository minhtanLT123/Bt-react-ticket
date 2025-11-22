import { useSelector } from "react-redux";
import SeatSelector from "../features/seats/seatsSelector";

export default function MovieBooking() {
    const selectedSeats = useSelector((s) => s.seats.selectedSeats);

    return (
        <div className="container text-center" >
            <div className="h-screen w-screen bg-cover bg-center bg-no-repea overflow-hidden"
                style={{ backgroundImage: "url('/images/bgmovie.jpg')" }}

            >
                {/* Overlay làm tối 80% */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10" >
                    <h1 className="text-2xl font-bold mb-4 pt-4 text-white ">Đặt ghế xem phim</h1>
                    <div className="p-10 grid grid-cols-3 gap-3">
                        <div className="col-span-2 justify-center flex flex-col items-center">
                            <h1 className="bg-amber-500 w-180 p-5">Màn Hình</h1>
                            <SeatSelector />
                        </div>
                        <div className="mt-6 p-4 rounded bg-transparent">
                            <div>
                                <h1>Ghế đã đặt</h1>
                                <h1>Ghế đang đặt</h1>
                                <h1>Ghế chưa đặt</h1>
                            </div>
                            <div>
                                <table>

                                    <head>
                                        <tr>
                                            <p>Số Ghế</p>
                                        </tr>
                                    </head>
                                    <data value=""></data>
                                </table>
                                <h2 className="font-semibold">Ghế đã chọn:</h2>
                                <p>{selectedSeats.length ? selectedSeats.join(", ") : "Chưa chọn"}</p>
                                <p className="mt-2 font-bold">
                                    Tổng tiền: {selectedSeats.length * 80000} VND
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
