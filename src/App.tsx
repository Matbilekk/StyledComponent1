import React from "react";
import "./App.css";
import styled from "styled-components";
import { PropsButton, StyledBtn } from "./components/Button.styled";
import { Link } from "./components/Link.styled";
import { Menu } from "./components/Menu.styled";
import Mohave from "./components/images/mohave.jpg";
import { myTheme } from "./styles/Theme.styled";
function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li>
            <a href="#">Menu Item 1</a>
          </li>
          <li>
            <a href="#">Menu Item 2</a>
          </li>
          <li>
            <a href="#">Menu Item 3</a>
          </li>
        </ul>
      </Menu>

      <Box>
        <Card>
          <MohaveImg src={Mohave} alt="Mohave" />
          <TextCard>HeadLine</TextCard>
          <TextCardP>
            Faucibus. Faucibus. Sit sit sapien sit <br></br>tempusrisu ut. Sit
            molestie ornare in venen.
          </TextCardP>
          <ButtonCard>See More</ButtonCard>
          <ButtonCardUp>Save</ButtonCardUp>
        </Card>

        {/* <PropsButton color="green" fontSize={"20px"}>
          PropsBtn1
        </PropsButton>
        <PropsButton color="red">PropsBtn2</PropsButton>
        <PropsButton>PropsBtn3</PropsButton> */}

        <PropsButton color={myTheme.colors.primary} primary active>
          PropsBtn3
        </PropsButton>
        <PropsButton outlined>PropsBtn3</PropsButton>

        <StyledBtn as={Link} href={"#"}>
          SuperLink
        </StyledBtn>
        <StyledBtn as="a" href={"#"}>
          Link
        </StyledBtn>
        <StyledBtn>Hello</StyledBtn>
      </Box>
    </div>
  );
}

const MohaveImg = styled.img`
  width: 280px;
  height: 170px;
  border-radius: 10px;
  margin: 10px;
`;
export default App;
const Card = styled.div`
  margin: 20px;
  background-color: #fff;
  border-width: 2px;
  border-color: transparent;
  border-style: solid;
  border-radius: 15px;
  width: 305px;
  height: 350px;
  box-shadow: 5px 5px 20px rgba(230, 1, 1, 0.2);
`;

const TextCard = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
`;

const TextCardP = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-left: 20px;
  color: #abb3ba;
  margin-top: 15px;
  margin-right: 20px;
`;

const ButtonCard = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #4e71fe;
  height: 30px;
  width: 86px;
  color: snow;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 10px;
  font-weight: 700;
  font-family: inherit;
`;
const ButtonCardUp = styled(ButtonCard)`
  background-color: transparent;
  color: #4e71fe;
  border-color: #4e71fe;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
`;

const SuperButton = styled(StyledBtn)`
  background-color: #9e9e75;
  color: #3d3d3d;
`;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: progress;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column-reverse;
  }
`;
