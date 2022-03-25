import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {photoService} from "../services/photo.service";

export const getLatestPhoto = createAsyncThunk(
    'photoSlice/getLatestPhoto',
    async (page, {dispatch}) => {
        try {
            const {data} = await photoService.getAll(page);
            dispatch(getLatest({data}))
            return
        } catch (e) {
            console.log(e);
        }
    })

const photoSlice = createSlice({
    name: 'photoSlice',
    initialState: {
        photos: [],
        page: 1
    },
    reducers: {
        getLatest: (state, action) => {
            state.photos = action.payload.data
        },
        changePage: (state, action) => {
            state.page = action.payload
        }
    }
});

const photoReducer = photoSlice.reducer;

export const {getLatest, changePage} = photoSlice.actions;

export default photoReducer;
