import { apiRequest } from "../apiRequests";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";

export const loginRequest = (email: string, password: string) => {
  return apiRequest({
    method: "post",
    url: "/api/login",
    data: { email, password },
    requestType: LOGIN_REQUEST,
    successType: LOGIN_SUCCESS,
    failureType: LOGIN_FAILURE,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};

export const fetchData = ({ endpoint }: any) => {
  return apiRequest({
    method: "get",
    url: `/api/${endpoint}`,
    requestType: `FETCH_${endpoint.toUpperCase()}_REQUEST`,
    successType: `FETCH_${endpoint.toUpperCase()}_SUCCESS`,
    failureType: `FETCH_${endpoint.toUpperCase()}_FAILURE`,
  });
};

export const fetchUsers = () => {
  return fetchData({ endpoint: "users" });
};

export const fetchCustomers = () => {
  return fetchData({ endpoint: "customer" });
};

export const fetchInventories = () => {
  return fetchData({ endpoint: "inventory" });
};

export const fetchOrders = () => {
  return fetchData({ endpoint: "orders" });
};

export const fetchProducts = () => {
  return fetchData({ endpoint: "product" });
};

export const fetchShipments = () => {
  return fetchData({ endpoint: "shipment" });
};

export const fetchSuppliers = () => {
  return fetchData({ endpoint: "supplier" });
};

export const logout = () => ({
  type: LOGOUT,
});
