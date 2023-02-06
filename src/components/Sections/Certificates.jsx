import React from "react";
import CertificateBox from "../Elements/CertificateBox";
import Container from "@mui/material/Container";
import {HeaderInfo, Wrapper} from "../../style/homePageListStyles";
import {text} from "../../text/text";

export default function Certificates() {
    return (
        <Wrapper id="certificates">
                <Container maxWidth={"xl"}>
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Сертифікати</h1>
                    </HeaderInfo>
                    <div className="row textCenter">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <CertificateBox img={text.certificates[0].img} title={text.certificates[0].title}/>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <CertificateBox img={text.certificates[1].img} title={text.certificates[0].title}/>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <CertificateBox img={text.certificates[2].img} title={text.certificates[0].title}/>
                        </div>
                    </div>
                </Container>
        </Wrapper>
    );
}