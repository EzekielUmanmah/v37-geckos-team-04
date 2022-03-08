import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* background-color: black; */
  background-color: #31263e;

  /* img {
    display: block;
    height: 100vh;
  } */

  .image-cont {
    /* margin: 0 !important; */
    /* background-color: #31263e; */
  }

  .image {
    /* display: block; */
    height: 100vh;
    width: 60vh;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin: 0 !important;
  }

  h1 {
    font-size: 2rem;
    color: #f7f4f3;
  }

  .alternative {
    margin-top: 0.75rem;
    color: #f7f4f3;

    .link,
    .link:visited {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }
  }
`;

export const LogInPageCont = styled(Container)``;

export const SignUpPageCont = styled(Container)``;

const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: #31263e; */
  /* background-color: #f7f4f3; */

  justify-content: center;
  align-items: center;

  .app-name {
    position: absolute;
    top: 2.5%;
    text-decoration: none;
    font-size: 1.125rem;
    font-style: italic;
    color: #f7f4f3;
    font-weight: bold;
  }

  .app-name:visited {
    color: #f7f4f3;
  }
`;

export const LogInFormCont = styled(FormCont)`
  .app-name {
    right: 2.5%;
  }
`;

export const SignUpFormCont = styled(FormCont)`
  .app-name {
    left: 2.5%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  input {
    font-family: inherit;
    border: none;
    border-bottom: 1px solid black;
    width: 15rem;
    height: 2rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    padding-left: 1rem;
  }

  input:focus {
    outline: none;
  }

  button:first-of-type {
    font-weight: bold;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    display: flex;
    flex-direction: row;
    font-family: inherit;
    font-weight: 500;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;

    height: 2.5rem;
    width: 16rem;

    column-gap: 0.75rem;
  }

  .google-oauth {
    color: #db4437;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .facebook-oauth {
    svg {
      width: 1.75rem;
      height: 1.75rem;
    }

    color: #1877f2;
  }
`;

export const LogInForm = styled(Form)``;
export const SignUpForm = styled(Form)``;
