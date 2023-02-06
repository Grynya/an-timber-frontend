import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#FF7F00" : "#F2B300")};
  background-color: ${(props) => (props.border ? "transparent" : "#F2B300")};
  width: 100%;
  padding: 15px;  
  outline: none;
  color: ${(props) => (props.border ? "#FF7F00" : "#fff")};
  font-size: 17px;
  font-weight: 500;
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#e0a600")};
    border: 1px solid #F2B300;
    color: ${(props) => (props.border ? "#F2B300" : "#fff")};
  }
`;

