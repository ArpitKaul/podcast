import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name : "player",
    initialState : {isPlayedDiv:false, songPath:"", img:""},
    reducers : {
        setDiv(state){
            state.isPlayedDiv = true
        },
        closeDiv(state){
            state.isPlayedDiv = false
        },
        changeSong(state,action){
            const pathOfSong = action.payload;
            state.songPath = pathOfSong;
        },
        changeImage(state,action){
            const imgOfSong = action.payload;
            state.img = imgOfSong;
        }
    }
})

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;