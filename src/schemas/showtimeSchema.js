import * as yup from 'yup';


export const showtimeSchema = yup.object().shape({
    ngayChieuGioChieu: yup
        .string()
        .required('Vui lòng chọn ngày giờ chiếu'),
    maRap: yup
        .string()
        .required('Vui lòng chọn cụm rạp'),
    maHeThongRap: yup
        .string()
        .required('Vui lòng chọn hệ thống rạp'),
})
