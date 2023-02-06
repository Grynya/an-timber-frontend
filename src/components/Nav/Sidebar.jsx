import React from "react";
import styled from "styled-components";
import CloseIcon from "../../img/CloseIcon";
import {ReactComponent as Logo} from "../../img/logo.svg";
import {HashLink as Link} from 'react-router-hash-link';

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate orangeBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <Logo />
          <h1 style={{ marginLeft: "15px", fontSize: 30 }} className="font20 extraBold">
            AnTimber
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font17 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor textUnderline"
            style={{ padding: "10px 15px" }}
            to="/#home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Головна
          </Link>
        </li>
        <li className="semiBold font17 pointer">
          <Link
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active"
              className="whiteColor textUnderline"
              style={{ padding: "10px 15px" }}
              to="/#products"
              spy={true}
              smooth={true}
              offset={-60}
          >
            Продукція
          </Link>
        </li>
        <li className="semiBold font17 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor textUnderline"
            style={{ padding: "10px 15px" }}
            to="/#about-us"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Про&nbsp;компанію
          </Link>
        </li>
        <li className="semiBold font17 pointer">
          <Link
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active"
              className="whiteColor textUnderline"
              style={{ padding: "10px 15px"}}
              to="/#certificates"
              spy={true}
              smooth={true}
              offset={-60}
          >
            Сертифікати
          </Link>
        </li>
        <li className="semiBold font17 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor textUnderline"
            style={{ padding: "10px 15px" }}
            to="/#delivery"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Доставка
          </Link>
        </li>
        <li className="semiBold font17 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor textUnderline"
            style={{ padding: "10px 15px" }}
            to="/#contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Контакти
          </Link>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
