import React from "react";
import ProductBox from "../Elements/ProductBox";
import {text} from "../../text/text";
import Container from "@mui/material/Container";
import {HeaderInfo, Wrapper} from "../../style/homePageListStyles";

export default function Products() {
    return (
        <Wrapper id="products">
                <Container maxWidth={"xl"}>
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Продукція</h1>
                    </HeaderInfo>
                    <div className="row textCenter">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <ProductBox
                                img={text.products[0].src}
                                title={text.products[0].title}
                                idx={0}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <ProductBox
                                img={text.products[1].src}
                                title={text.products[1].title}
                                idx={1}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <ProductBox
                                img={text.products[2].src}
                                title={text.products[2].title}
                                idx={2}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <ProductBox
                                img={text.products[3].src}
                                title={text.products[3].title}
                                idx={3}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <ProductBox
                                img={text.products[4].src}
                                title={text.products[4].title}
                                idx={4}
                            />
                        </div>
                    </div>
                </Container>
        </Wrapper>
    );
}
