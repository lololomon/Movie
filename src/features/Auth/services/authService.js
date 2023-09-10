import { https } from "../../../serivce/config";

export const AuthService = {
    signIn: (data) => {
        const url = 'QuanLyNguoiDung/DangNhap';
        return https.post(url, data)
    },
    // fetchProfile để lấy thoogn tin người dùng nếu họ đã đăng nhập trước đó rồi. ( lưu dưới localStorage giờ lấy lên dùng)
    fetchProfile: () => {
        const url = 'QuanLyNguoiDung/ThongTinTaiKhoan';
        // do thằng này là trường hợp đặc biệt nên ghi đầy đủ, lấy localStorage mới nhất 
        return https.post(url, undefined,
            {
                headers: {
                    TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM',
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                }
            })
    },

    signUp: (data) => {
        const url = "QuanLyNguoiDung/DangKy";
        return https.post(url, data);
    },
    updateUser: (data) => {
        const url = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
        return https.put(url, data, {
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM',
                Authorization: "Bearer " + localStorage.getItem('userToken')
            }
        });
    }
}