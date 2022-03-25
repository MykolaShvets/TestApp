import {axiosService} from "./axio.service";
import {clientId, urls} from "../configs/urls";

export const photoService = {
    getAll: (page) => axiosService.get(`${urls.photos}/?${clientId}&page=${page}`)
};
