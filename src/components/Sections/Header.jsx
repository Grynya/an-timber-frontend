import * as React from 'react';
import {SwipeableProductLayout} from './SwipeableProductLayout';
import {useTheme} from "@mui/material/styles";
import {text} from "../../text/text"
import {Typography} from "@mui/material";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import Carousel from "nuka-carousel";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  max-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
    const theme = useTheme();
    const navigate = useNavigate();

    return (<Wrapper id="home">
            <Carousel wrapAround autoplay defaultControlsConfig={{prevButtonText: 'назад', nextButtonText: 'вперед'}}>
                {text.products.map((product, idx) => (
                    <div key={idx}>
                        <SwipeableProductLayout
                            sxBackground={{
                                backgroundImage: product.backgroundImage,
                                backgroundColor: '#0B093B',
                                backgroundPosition: 'center',
                                color: theme.palette.primary.main
                            }}
                        >
                            <Typography color="inherit" variant="h2" sx={{
                                fontSize: {xs: 20, sm: 40, md: 50, lg: 70, xl: 70}
                            }}>
                                {product.title}
                            </Typography>
                            <div style={{width: "190px"}}>
                                <FullButton title="Детальніше" action={() => navigate(`/product-details/${idx}`)}/>
                            </div>
                        </SwipeableProductLayout>
                    </div>
                ))}
            </Carousel>
        </Wrapper>
    )
}