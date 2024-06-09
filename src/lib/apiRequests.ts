import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "./reducers";

const handleAxiosError = (error: any): string => {
  return error.response?.data?.msg || "An error occurred";
};

type RequestMethod = "get" | "post" | "put" | "delete";

interface ApiRequestParams {
  method: RequestMethod;
  url: string;
  data?: any;
  requestType: string;
  successType: string;
  failureType: string;
  onSuccess?: (dispatch: any, data: any) => void;
}

export const apiRequest =
  ({
    method,
    url,
    data,
    requestType,
    successType,
    failureType,
    onSuccess,
  }: ApiRequestParams): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch({ type: requestType });
    try {
      const response = await axios({
        method,
        url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
        data,
      });
      dispatch({ type: successType, payload: response.data });
      if (onSuccess) {
        onSuccess(dispatch, response.data)
      }
    } catch (error) {
      dispatch({ type: failureType, payload: handleAxiosError(error) });
    }
  };
