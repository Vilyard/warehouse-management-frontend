import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/actionTypes";

interface AuthState {
  token: string | null;
  user: any;
  customer: any;
  customers: any[];
  inventory: any;
  inventories: any[];
  order: any;
  orders: any[];
  product: any;
  products: any[];
  shipment: any;
  shipments: any[];
  supplier: any;
  suppliers: any[];
  users: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  customer: null,
  customers: [],
  inventory: null,
  inventories: [],
  order: null,
  orders: [],
  product: null,
  products: [],
  shipment: null,
  shipments: [],
  supplier: null,
  suppliers: [],
  users: [],
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  const { type, payload } = action;

  if (type.endsWith("_REQUEST")) {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  }

  if (type.endsWith("_SUCCESS")) {
    const key = type.split("_")[1].toLowerCase() + "s";
    return {
      ...state,
      isLoading: false,
      [key]: payload,
    };
  }

  if (type.endsWith("_FAILURE")) {
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  }

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        user: payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
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
