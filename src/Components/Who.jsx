import React from "react";
import styled from "styled-components";
import Lottie from 'lottie-react';
import who from "../assets/who.json";


const Section = styled.div`
  height: 110vh;
  scroll-snap-align: center;
  background-color: primary-100;
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 70px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 130px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Who = () => {
  return (
    <Section className=" bg-primary-100">
      <Container>
        <Left>
          <Lottie animationData={who}/>
        </Left>
        <Right>
          <Title className=" text-white font-bold">Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle className=" font-bold text-[24px] ">Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative bunch of Designers and Developers with a passion for the
            Arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
