import { apiRequest } from '../apiRequests';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGOUT,
} from './actionTypes';

export const loginRequest = (email: string, password: string) => {
  return apiRequest({
    method: 'post',
    url: '/api/login',
    data: { email, password },
    requestType: LOGIN_REQUEST,
    successType: LOGIN_SUCCESS,
    failureType: LOGIN_FAILURE,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
  });
};

export const fetchUsers = () => {
  return apiRequest({
    method: 'get',
    url: '/api/customer',
    requestType: FETCH_USERS_REQUEST,
    successType: FETCH_USERS_SUCCESS,
    failureType: FETCH_USERS_FAILURE,
  });
};

export const logout = () => ({
  type: LOGOUT,
});
