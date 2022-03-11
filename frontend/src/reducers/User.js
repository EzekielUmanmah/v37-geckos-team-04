// import React from 'react';
import * as api from '../api/Api';
import { isAuthenticated } from './userSlice';

// export const logInAsync = (formData, history) => async (dispatch) => {
// console.log(formData, history);

export const logInAsync = (formData) => async (dispatch) => {
  // let navigate = useNavigate();
  console.log(formData);
  debugger;
  try {
    const { data } = await api.login(formData);
    debugger;
    dispatch(isAuthenticated({ data }));
    // change path name to dashboard, once the private route for the dashboard is set up
    // history.push('/dashboard');
    window.history.push('/dashboard');
  } catch (error) {
    alert(`Email or password is incorrect. Please try again.`);
  }
};

// export const signUpAsync = (formData, history) => async (dispatch) => {
// console.log(formData, history);
export const signUpAsync = (formData) => async (dispatch) => {
  // let navigate = useNavigate();
  // debugger;
  try {
    const { data } = await api.signup(formData);
    dispatch(isAuthenticated({ data }));
    // history.push('/dashboard');
    // window.history.push('/dashboard');
    // navigate(`/dashboard`);
  } catch (error) {
    // More specific error handling for signing up.
    // alert(`Email or password is incorrect. Please try again.`);
  }
};

// dispatch user log out action directly from the log out button
