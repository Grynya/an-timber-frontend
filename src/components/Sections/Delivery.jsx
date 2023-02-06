import React from "react";
import {text} from "../../text/text"
import Markdown from "../Elements/Markdown";
import {Card, CardContent, CardMedia} from "@mui/material";
import Background from "../../img/background.jpg";
import Container from "@mui/material/Container";
import {AddLeft, AddRight, Advertising, ImgWrapper, Wrapper} from "../../style/homePageDescStyles";

export default function Delivery() {
  return (
    <Wrapper id="delivery">
      <div style={{backgroundImage: `url(${Background})`}}>
        <Container maxWidth={"xl"}>
          <Advertising className="flexSpaceCenter">
            <AddLeft>
                <ImgWrapper className="flexCenter">
                  <CardMedia
                      component="img"
                      src={text.delivery.src}
                      alt={text.delivery.title}
                  />
                </ImgWrapper>
            </AddLeft>
            <AddRight>
              <Card><CardContent>
              <h2 className="font40 extraBold">{text.delivery.title}</h2>
              <p className="font18 plainText"><Markdown>{text.delivery.text}</Markdown></p>
              </CardContent></Card>
            </AddRight>
          </Advertising>
        </Container>
      </div>
    </Wrapper>
  );
}