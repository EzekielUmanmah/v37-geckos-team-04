import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { BtnsContainer, SignUpBtn, LogInBtn } from './style';

export const SignUpLoginBtns = () => {
  return (
    <BtnsContainer>
      <Link to="/login">
        <LogInBtn>Log In</LogInBtn>
      </Link>
      <Link to="/signup">
        <SignUpBtn>Sign Up</SignUpBtn>
      </Link>
      {/* <Outlet /> */}
      {/* <LogInBtn>Log In</LogInBtn>
      <SignUpBtn>Sign Up</SignUpBtn> */}
    </BtnsContainer>
  );
};
