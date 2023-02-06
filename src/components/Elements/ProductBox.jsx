import React from "react";
import styled from "styled-components";
import {Card, CardContent, CardMedia} from "@mui/material";
import {HashLink as Link} from 'react-router-hash-link';

export default function ProductBox({ img, title, idx}) {
  return (
    <Wrapper>
        <Card>
            <CardContent>
                <Link to = {'/product-details/'+idx+'/#product-details'}>
                <ImgBtn className="animate pointer">
                <CardMedia
                        component="img"
                        style={{height: 320}}
                        src={img}
                        alt={title}
                    />
                <h3 className="font20 extraBold pointer" style={{textDecoration: 'underline'}}>{title}</h3>
                </ImgBtn>
                </Link>
            </CardContent>
        </Card>
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
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;
  margin: 0;
  :hover > img {
    opacity: 0.5;
  }
`;