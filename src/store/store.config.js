import {configureStore} from "@reduxjs/toolkit";

import photoReducer from "./photo.slice";

const store  = configureStore({
    reducer: {
        photoReducer
    }
});

export default store;
