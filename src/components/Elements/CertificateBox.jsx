import React from "react";
import styled from "styled-components";

export default function CertificateBox({ img, title }) {
  return (
      <Wrapper>
          <img style={{height: 320}} src={img} alt={title}/>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;