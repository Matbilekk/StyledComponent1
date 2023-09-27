import { css, styled } from "styled-components";
import { MyAnimation } from "../styles/animations/Animation";

export const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  border-radius: 5px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
  margin: 5px;

  &:hover {
    background: #a36b6b;
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
  &:last-child {
    background-color: #6b73a3;
  }
`;

type PropsButtonPropsType = {
  color?: string;
  fontSize?: string;
  primary?: boolean;
  outlined?: boolean;
  active?: boolean;
};

export const PropsButton = styled.button<PropsButtonPropsType>`
  border: none;
  /* background-color: ${(props) => props.color || "#8b8d99"}; */
  padding: 10px 20px;
  border-radius: 5px;
  color: snow;
  font-size: ${(props) => props.fontSize || "2rem"};
  /* font-size: 2rem; */
  font-weight: bold;
  margin: 5px;

  &:hover {
    background: #69c989;
  }

  ${(props) =>
    props.outlined &&
    css<PropsButtonPropsType>`
      border: 2px solid ${(props) => props.color || "#2037b8"};
      color: ${(props) => props.color || "#2037b8"};
      background-color: transparent;
      &:hover {
        border-color: #2037b8;
        color: snow;
        background-color: #2037b8;
      }
    `}

  ${(props) =>
    props.primary &&
    css<PropsButtonPropsType>`
      color: snow;
      background-color: ${(props) => props.color || "#2037b8"};

      ${(props) =>
        props.active &&
        css<PropsButtonPropsType>`
          box-shadow: 5px 5px 5px 5px #656569;
        `}
    `}
`;
