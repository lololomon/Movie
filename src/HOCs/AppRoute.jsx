import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RouteComponent = ({ isAuth, isPrivate, Component, redirectPath, isAdmin }) => {
    const { t, i18n } = useTranslation();
    const { infoUser } = useSelector(state => state.authReducer);
    const token = localStorage.getItem('userToken');

    if (isPrivate) return token ? <Component /> : <Navigate to={redirectPath} />
 
    if (isAuth) return !infoUser ? <Component /> : <Navigate to={redirectPath} />

    if (isAdmin && token) {
        if (!infoUser) return <div className='h-screen w-screen flex justify-center items-center bg-white dark:bg-[#222831]'>
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        if (infoUser.maLoaiNguoiDung === 'KhachHang') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1600,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: `${t('Không đủ quyền truy cập !')}`
            })
        }
        return infoUser.maLoaiNguoiDung === 'QuanTri' ? <Component /> : <Navigate to={redirectPath} />
    }
    return (
        <Component />
    );
};

export default RouteComponent;