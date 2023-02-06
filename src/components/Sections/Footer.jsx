import React from "react";
import styled from "styled-components";
import {ReactComponent as Logo} from '../../img/logo.svg'
import { Link } from "react-scroll";
import Container from "@mui/material/Container";

export default function Footer({toTop}) {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="orangeBg">
        <Container>
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <Logo />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                AnTimber
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="greenColor font13">AnTimber</span> All Right Reserved
            </StyleP>
            <div hidden={toTop===undefined}>
              <Link className="whiteColor animate pointer font13" to={toTop} smooth={true} offset={-80}>
                Вгору
              </Link>
            </div>
          </InnerWrapper>
        </Container>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;