import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {HashLink as Link} from 'react-router-hash-link';

import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import BurgerIcon from "../../img/BurgerIcon";
import {ReactComponent as Logo} from '../../img/logo.svg'
export default function TopNavbarRedirected() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg bottomDarkBorder">
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <Logo />
            <NamePhoneWrapper>
              <h1 style={{ marginLeft: "15px", fontSize: 30 }} className="font20 extraBold">
                AnTimber
              </h1>
            </NamePhoneWrapper>
          </Link>
          <NamePhoneWrapper>
            <div className="col semiBold font15">
              <div className="rightDarkBorder">+38-099-601-47-46
              </div>
              <div className="rightDarkBorder">+38-093-277-29-37
              </div>
              <div className="rightDarkBorder">+38-068-095-39-49
              </div>
            </div>
          </NamePhoneWrapper>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
                Головна
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/#products" spy={true} smooth={true} offset={-80}>
                Продукція
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/#about-us" spy={true} smooth={true} offset={-80}>
                Про&nbsp;компанію
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/#certificates" spy={true} smooth={true} offset={-80}>
                Сертифікати
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/#delivery" spy={true} smooth={true} offset={-80}>
                Доставка
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/#contact" spy={true} smooth={true} offset={-80}>
                Контакти
              </Link>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const NamePhoneWrapper = styled.div`
  @media (max-width: 1150px) {
    display: none;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;


