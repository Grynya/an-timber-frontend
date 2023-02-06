import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
  padding-top:30px;
    flex-direction: column;
  }
`;
export const AllWrap = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0 0;
  }
`;

export const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 100%;
    order: 2;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
export const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 100%;
    order: 2;
  }
`;
export const ImgWrapper = styled.div`
  width: 100%;
  padding: 1%;
  img {
    width: 100%;
    height: auto;
  }
`;
