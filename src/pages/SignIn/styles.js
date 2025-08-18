import { styled } from "styled-components";


export const Container = styled.div`
  max-width: 76.7rem;

  margin: auto;
  margin-top: 10rem;

  .logo {
    padding: 0 4.7rem 0 6.5rem;
  }
`;


export const Form = styled.form`
  margin: 7.3rem 0 12rem;
  padding: 0 4.7rem 0 6.5rem;

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.8rem;
  }

  .input-container,
  #btn-access-account {
    margin-bottom: 3.2rem;
  }

  #btn-text-container {
    width: fit-content;
    margin: auto;
  }
`;
