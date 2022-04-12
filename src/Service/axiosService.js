import axios from "axios";
import {baseUrl} from "../Config/Urls";

export const axiosService = axios.create({baseUrl})