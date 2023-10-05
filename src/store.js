import {create} from "zustand";

const useStore = create((set) => ({
    reservation: [],
    addReservation: (hotel, dates)=>
        set(dates => ({
            reservation: [...state.reservation, {hotel, dates}]
        }))
}));

export default useStore;