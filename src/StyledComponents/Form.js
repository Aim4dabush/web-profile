import styled from "styled-components";
import { darkBlue, lightBlue } from "../CSSVariables/JSVariables";

export const Form = styled.form`
  border: 5px solid ${lightBlue};
  border-radius: 5px;
  padding: 1em;
  width: 500px;

  button {
    background-color: ${darkBlue};
    border: 2px solid ${lightBlue};
    border-radius: 5px;
    color: ${lightBlue};
    margin-top: 0.5em;
    padding: 5px 10px;
    width: 75px;
  }

  .form-control {
    display: flex;
    flex-direction: column;

    .error {
      background-color: salmon;
      border-color: red;
    }

    input {
      border-radius: 5px;
      font-size: 15px;
      padding: 5px 10px;
    }

    p {
      color: red;
    }

    textarea {
      border-radius: 5px;
    }
  }

  .form-group {
    display: flex;
    justify-content: space-evenly;

    .form-control {
      display: flex;
      flex-direction: column;
      padding: 5px;
      width: 100%;

      .error {
        background-color: salmon;
        border-color: red;
      }

      input {
        border-radius: 5px;
        font-size: 15px;
        padding: 5px 10px;
      }

      p {
        color: red;
      }
    }
  }
`;
