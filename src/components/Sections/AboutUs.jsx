import React from "react";
import FullButton from "../Buttons/FullButton";
import {text} from "../../text/text"
import Markdown from "../Elements/Markdown";
import {Card, CardContent, CardMedia} from "@mui/material";
import Background from "../../img/background.jpg";
import {Link} from "react-scroll";
import Container from "@mui/material/Container";
import {AddLeft, AddRight, Advertising, ImgWrapper, Wrapper} from "../../style/homePageDescStyles";

export default function AboutUs() {
    return (
        <Wrapper id="about-us">
            <div style={{backgroundImage: `url(${Background})`}}>
                <Container maxWidth={"xl"}>
                    <Advertising className="flexSpaceCenter">
                        <AddLeft>
                            <ImgWrapper className="flexCenter">
                                <CardMedia
                                    component="img"
                                    src={text.aboutUs.src}
                                    alt={text.delivery.title}
                                />
                            </ImgWrapper>
                        </AddLeft>
                        <AddRight>
                            <Card><CardContent>
                                <h2 className="font40 extraBold">{text.delivery.title}</h2>
                                <div className="font18 plainText">
                                    <Markdown>{text.aboutUs.text}</Markdown>
                                    <div className="flexNullCenter" style={{width: "190px", margin: '10px 0'}}>
                                        <Link to="contact"
                                              activeClass="active"
                                              spy={true} smooth={true}
                                        ><FullButton title="Зв'язатись з нами"/></Link>
                                    </div>
                                </div>
                            </CardContent></Card>
                        </AddRight>
                    </Advertising>
                </Container>
            </div>
        </Wrapper>
    );
}