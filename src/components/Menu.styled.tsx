import { styled } from "styled-components";

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  li > a {
    text-decoration: none;
    color: #3012a8;
  }

  li + li {
    padding-left: 30px;
  }
`;
