import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from './constants';
import Axios from 'axios';

// export const loginUser = ({email, password})=>({
//   type: LOGIN_USER,
//   payload: {email, password}
// })

export const loginUser = ({email, password}, history)=> (dispatch)=>{
  dispatch({
    type: LOGIN_USER
  });
  Axios.post(process.env.REACT_APP_API_URL +"/api/auth/login", {
    email,
    password
  })
    .then(({data: {token}})=>{
      localStorage.setItem("token", token);
      history.replace("/");
      dispatch({
        type: LOGIN_USER_SUCCESS,
      })
    })
    .catch((err)=>{
      console.log({err})
      dispatch({
        type: LOGIN_USER_FAILED,
        payload: err
      })
    })
}


export const regUser = ({email, password}, history)=> (dispatch)=>{
  dispatch({
    type: REGISTER_USER
  });
  Axios.post(process.env.REACT_APP_API_URL +"/api/auth/register", {
    email,
    password
  })
    .then(()=>{
      history.replace("/auth/login");
      dispatch({
        type: REGISTER_USER_SUCCESS,
      })
    })
    .catch((err)=>{
      console.log({err})
      dispatch({
        type: REGISTER_USER_FAILED,
        payload: err
      })
    })
}
