import { createSlice } from "@reduxjs/toolkit";
import seatData from "../../data/seatData.json";

const initialState = {
    seatLayout: seatData,
    selectedSeats: [],
};

const seatSlice = createSlice({
    name: "seats",
    initialState,
    reducers: {
        toggleSeat: (state, action) => {
            const seatId = action.payload;

            // tìm ghế trong seatLayout
            for (const row of state.seatLayout) {
                const seat = row.danhSachGhe.find((g) => g.soGhe === seatId);

                if (seat) {
                    if (seat.daDat) return; // ghế đã đặt => không cho chọn

                    const isSelected = state.selectedSeats.includes(seatId);

                    if (isSelected) {
                        state.selectedSeats = state.selectedSeats.filter(
                            (id) => id !== seatId
                        );
                    } else {
                        state.selectedSeats.push(seatId);
                    }
                    return;
                }
            }
        },
    },
});

export const { toggleSeat } = seatSlice.actions;
export default seatSlice.reducer;
