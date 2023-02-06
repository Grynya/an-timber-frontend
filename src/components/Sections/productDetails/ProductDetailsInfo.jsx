import React from "react";
import FullButton from "../../Buttons/FullButton";
import {text} from "../../../text/text"
import Markdown from "../../Elements/Markdown";
import {Card, CardContent, CardMedia} from "@mui/material";
import {useState} from "react";
import {useParams} from "react-router-dom";
import Background from "../../../img/background.jpg";
import Container from "@mui/material/Container";
import {Link} from "react-scroll";
import CustomForm from "../form/CustomForm";
import {AddLeft, AddRight, AllWrap, ImgWrapper, Wrapper} from "./productDetailsStyles";

export default function ProductDetailsInfo() {
    let {productId} = useParams();
    const [product] = useState(text.products[productId])

    return (
        <div id="product-details">
            <Wrapper style={{backgroundImage: `url(${Background})`}}>
                <div id="home">
                    <Container maxWidth="xl">
                        <AllWrap className="flexSpaceCenter">
                            <AddLeft>
                                <Card>
                                    <CardContent className="flex flexColumn flexCenter">
                                        <h2 className="font40 extraBold">{product.title}</h2>
                                        <div className="font18"><Markdown>{product.desc}</Markdown></div>
                                        <div className="flexNullCenter" style={{margin: "30px 0", width: "190px"}}>
                                                <Link to="contact" smooth={true}>
                                                    <FullButton
                                                    title="Замовити"/></Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </AddLeft>
                            <AddRight>
                                <ImgWrapper className="flexCenter">
                                    <CardMedia
                                        component="img"
                                        src={product["details-src"]}
                                        alt={product.title}
                                    />
                                </ImgWrapper>
                            </AddRight>
                        </AllWrap>
                    </Container>
                </div>

            </Wrapper>
            <Wrapper id="contact">
                <div style={{color: 'black'}}>
                    <div className="container" style={{color: 'black'}}>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <CustomForm
                                    title={"Оформлення замовлення"}
                                    productTitle={product.title}
                                    subtitle={""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}