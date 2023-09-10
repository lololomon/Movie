import axios from "axios";

const BASE_URL = 'https://movienew.cybersoft.edu.vn/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM';

export const https = axios.create({
    baseURL: BASE_URL,
    headers: {
        TokenCybersoft: TOKEN,
        // lấy token dưới local storage lên gắn thêm Bearer của jwt
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
    }
});