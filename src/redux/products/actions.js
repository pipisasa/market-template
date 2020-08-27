import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from "./constants"
import Axios from "axios";

export const fetchData = ()=> (dispatch)=>{
  dispatch({
    type: FETCH_DATA
  });

  Axios.get(process.env.REACT_APP_API_URL + "/api/products")
    .then((resp)=>{
      const {data} = resp;
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data
      })
    })
    .catch((e)=>{
      dispatch({
        type: FETCH_DATA_FAILED,
        payload: e
      })
    })
}