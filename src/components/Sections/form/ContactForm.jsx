import React from "react";
import styled from "styled-components";
import {ReactComponent as Kyivstar} from '../../../img/kyivstar.svg';
import {ReactComponent as Vodafone} from '../../../img/vodafone.svg';
import {ReactComponent as Lifecell} from '../../../img/lifecell.svg';
import {Avatar, Card, CardContent, Icon, Typography} from "@mui/material";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailIcon from '@mui/icons-material/Email';
import Container from "@mui/material/Container";
import CustomForm from "./CustomForm";

export default function ContactForm() {
    return (
        <Wrapper id="contact">
            <div>
                <Container maxWidth={"xl"}>
                    <div className="row" style={{paddingBottom: "30px"}}>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <PhoneInfo>
                                <Card>
                                    <CardContent sx={{m: 5}}>
                                        <h1 className="font40 extraBold">Контакти</h1>
                                        <div className="row">
                                            <div className="col">
                                                <Avatar sx={{m: 4, bgcolor: "#F2B300", textAlign: 'center'}}>
                                                    <LocalPhoneRoundedIcon/>
                                                </Avatar>
                                            </div>
                                            <div className="col semiBold">
                                                <p><Icon sx={{width: 23, height: 26}}><Vodafone/></Icon>+38-099-601-47-46
                                                </p>
                                                <p><Icon sx={{width: 23, height: 26}}><Lifecell/></Icon>+38-093-277-29-37
                                                </p>
                                                <p><Icon sx={{width: 23, height: 26}}><Kyivstar/></Icon>+38-068-095-39-49
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Avatar sx={{m: 4, bgcolor: "#235A11", textAlign: 'center'}}>
                                                    <EmailIcon/>
                                                </Avatar>
                                            </div>
                                            <div className="col">
                                                <Typography sx={{
                                                    mt: 5,
                                                    textAlign: 'center', fontWeight: 600
                                                }}>an777hd@gmail.com</Typography>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </PhoneInfo>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <CustomForm title={"Зв'язатись з нами"}
                                        productTitle={""}
                                        subtitle={"З'явились запитання?<br/> Залиште свої контактні дані і ми зв'яжемося з вами!"}/>
                        </div>
                    </div>
                </Container>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
`;
const PhoneInfo = styled.div`
  padding: 70px 0 30px 0;
    @media (max-width: 860px) {
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;