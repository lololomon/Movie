import { movieService } from "./services/movieService";
import * as actionTypes from "./constants";
import * as signalR from "@aspnet/signalr";
import { connection } from "../../index.js";
import { fetchProfile } from "../Auth/thunk";
import { AuthService } from "../Auth/services/authService";

export const fetchBanners = async (dispatch) => {
  try {
    const res = await movieService.getBanners();
    dispatch({
      type: actionTypes.FETCH_BANNERS,
      payload: res.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovies = (soTrang) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.DISPLAY_LOADING,
    });
    const res = await movieService.getMoviesPagination(soTrang);
    dispatch({
      type: actionTypes.FETCH_MOVIES,
      payload: res.data.content,
    });
    dispatch({
      type: actionTypes.HIDDEN_LOADDING,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchInfoTheater = async (dispatch) => {
  try {
    const res = await movieService.getTabs();
    dispatch({
      type: actionTypes.FETCH_INFOR_THEATER,
      payload: res.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchScheduleDetail = (id) => async (dispatch) => {
  try {
    const res = await movieService.getScheduleDetail(id);
    dispatch({
      type: actionTypes.FETCH_LIST_SEAT,
      payload: res.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchDetailMovie = (id) => async (dispatch) => {
  try {
    const res = await movieService.getDetailMovie(id);
    dispatch({
      type: actionTypes.FETCH_DETAIL_MOVIE,
      payload: res.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchListSeat = (id) => async (dispatch) => {
  try {
 
    await dispatch({
      type: actionTypes.DISPLAY_LOADING,
    });
    const res = await movieService.getListSeats(id);
    await dispatch({
      type: actionTypes.FETCH_LIST_SEAT,
      payload: res.data.content,
    });
 

    await dispatch({
      type: actionTypes.HIDDEN_LOADDING,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.HIDDEN_LOADDING,
    });
    console.log(err);
  }
};

export const postBookTicket = (info) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.DISPLAY_LOADING,
    });
    const res = await movieService.postBookTicket(info);

    if (res.data.statusCode === 200) {
      dispatch({
        type: actionTypes.HIDDEN_LOADDING,
      });
      // chuyển sang trang activeTabs khác
      dispatch({
        type: actionTypes.COMPLETE_CHECKOUT,
      });
    }
  } catch (err) {
    dispatch({
      type: actionTypes.HIDDEN_LOADDING,
    });
    console.log(err);
  }
};

export const orderSeatACTION =
  (seat, maLichChieu) => async (dispatch, getState) => {
    try {
      // đặt ghế
      await dispatch({
        type: actionTypes.ORDER_SEAT,
        payload: seat,
      });

      //call api về backend
      let danhSachGheDangDat = getState().bookingReducer.orderSeats;
      let taiKhoan = getState().authReducer.infoUser.taiKhoan;

      // convert sang json
      danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);

      console.log("danhSachGheDangDat", danhSachGheDangDat);
      console.log("taiKhoan", taiKhoan);
      console.log("maLichChieu", maLichChieu);

      //call api signl r
      await connection.invoke(
        "datGhe",
        taiKhoan,
        danhSachGheDangDat,
        maLichChieu
      );
    } catch (err) {
      dispatch({
        type: actionTypes.HIDDEN_LOADDING,
      });
      console.log(err);
    }
  };
