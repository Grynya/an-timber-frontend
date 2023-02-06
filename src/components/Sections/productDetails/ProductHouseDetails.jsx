import React from "react";
import styled from "styled-components";
import FullButton from "../../Buttons/FullButton";
import {text} from "../../../text/text"
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import Background from "../../../img/background.jpg"
import {useState} from "react";
import Container from "@mui/material/Container";
import {Link} from "react-scroll";
import Markdown from "../../Elements/Markdown";
import CustomForm from "../form/CustomForm";
import {AddLeft, AddRight, AllWrap, ImgWrapper, Wrapper} from "./productDetailsStyles";

export default function ProductHouseDetails() {
    const [productId] = useState(4)
    const [product] = useState(text.products[productId])
    const TwoPhotosContent = ({photo1, photo2}) => {
        return (<Advertising>
            <AddLeft>
                <ImgWrapper>
                    <CardMedia
                        component="img"
                        style={{height: 607}}
                        src={product[photo1]}
                        alt={product.title}
                    />
                </ImgWrapper>
            </AddLeft>
            <AddRight>
                <ImgWrapper>
                    <CardMedia
                        component="img"
                        style={{height: 607}}
                        src={product[photo2]}
                        alt={product.title}
                    />
                </ImgWrapper>
            </AddRight>
        </Advertising>)
    }
    return (
        <div id="product-details">
            <Wrapper style={{backgroundImage: `url(${Background})`}}>
                <div id="home">
                    <Container maxWidth="xl">
                        <AllWrap>
                            <Advertising>
                                <AddLeft>
                                    <Card style={{width: '100%'}}>
                                        <CardContent className="flex flexColumn flexCenter">
                                            <h2 className="font40 extraBold textLeft">{product.title}</h2>
                                            <div className="font18"><Markdown>{product.desc}</Markdown></div>
                                            <div className="flexNullCenter" style={{margin: "30px 0", width: "190px"}}>
                                                    <Link to="contact" smooth={true}><FullButton
                                                        title="Безкоштовна консультація"/></Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </AddLeft>
                                <AddRight>
                                    <article
                                        className={"bgPhoto whiteColor"}
                                        style={{
                                            backgroundImage: product.backgroundImage,
                                            margin: '1%',
                                            height: 607
                                        }}
                                    >
                                        <div style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            height: '100%',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '5%'
                                        }}>
                                            <Typography sx={{fontSize: 30, p: 5}} className={"semiBold"}>
                                                <Markdown>{product.subtitle}</Markdown>
                                            </Typography>
                                        </div>
                                    </article>
                                </AddRight>
                            </Advertising>
                            <TwoPhotosContent photo1={"details-src2"} photo2={"details-src3"}/>
                            <TwoPhotosContent photo1={"details-src4"} photo2={"details-src5"}/>
                            <TwoPhotosContent photo1={"details-src6"} photo2={"details-src7"}/>
                            <TwoPhotosContent photo1={"details-src8"} photo2={"details-src9"}/>
                            <TwoPhotosContent photo1={"details-src10"} photo2={"details-src11"}/>
                            <TwoPhotosContent photo1={"details-src12"} photo2={"details-src13"}/>
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
                                    title={"Отримайте безкоштовну консультацію"}
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
const Advertising = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 860px) {
    flex-direction: column;
  }`;