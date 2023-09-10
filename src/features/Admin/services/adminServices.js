import { https } from "../../../serivce/config";
export const adminService = {
    fetchMoviesAdmin: (groupID, name) => {
        if (name.trim() === '') {
            return https.get('QuanLyPhim/LayDanhSachPhim', {
                params: {
                    maNhom: groupID,
                }
            })
        }
        return https.get('QuanLyPhim/LayDanhSachPhim', {
            params: {
                maNhom: groupID,
                tenPhim: name
            }
        })
    },
    uploadImageAdmin: (formData) => https.post('QuanLyPhim/ThemPhimUploadHinh', formData),

    getMovieDetailAdmin: (maPhim) => https.get('QuanLyPhim/LayThongTinPhim', {
        params: {
            maPhim
        }
    }),
    updateFilms: (formData) => https.post('QuanLyPhim/CapNhatPhimUpload', formData),
    deleteFilm: (id) => https.delete('QuanLyPhim/XoaPhim', {
        params: {
            maPhim: id
        }
    }),
    getInfoTheaterAdmin: () => https.get('QuanLyRap/LayThongTinHeThongRap'),
    getInfoCinemaCluster: (maHeThongRap) => https.get('QuanLyRap/LayThongTinCumRapTheoHeThong', {
        params: {
            maHeThongRap
        }
    }),
    postShowTimes: (lich) => {
        const url = 'QuanLyDatVe/TaoLichChieu';
        console.log('lich',lich)
        return https.post(url, lich,
            {
                headers: {
                    TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzAiLCJIZXRIYW5TdHJpbmciOiIxMi8xMC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTcwNjg4MDAwMDAiLCJuYmYiOjE2NzkyNDUyMDAsImV4cCI6MTY5NzIxNjQwMH0.zHBe1xuPzYEovj4ort--O3_1lX_L3XKX4XgpI4soOUM',
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                },
                
            })
    },
    postUser: (data)=>https.post("/QuanLyNguoiDung/ThemNguoiDung",data),
    getListUer: (GP)=>https.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GP}`),
    deleteUer:(id)=>https.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`),
    searchUser:(id,GP)=> https.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GP}&tuKhoa=${id}`),
    postUpLoadUser:(data)=>https.post('/QuanLyNguoiDung/CapNhatThongTinNguoiDung',data)

}