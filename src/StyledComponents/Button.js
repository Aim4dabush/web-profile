import styled from "styled-components";
import { lightBlue } from "../CSSVariables/JSVariables";

const Button = styled.button`
  cursor: pointer;
`;

export const BackButton = styled(Button)`
  background-color: transparent;
  border: 3px solid ${lightBlue};
  color: ${lightBlue};
  padding: 16px 55px;
`;
