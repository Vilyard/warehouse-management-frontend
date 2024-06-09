import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    LOGOUT
  } from '../actions/actionTypes';
  
  interface AuthState {
    token: string | null;
    user: any;
    users: any[];
    isLoading: boolean;
    error: string | null;
  }
  
  const initialState: AuthState = {
    token: null,
    user: null,
    users: [],
    isLoading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          token: action.payload.token,
          user: action.payload.user,
        };
      case LOGIN_FAILURE:
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          users: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          token: null,
          user: null,
          isLoading: false,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  