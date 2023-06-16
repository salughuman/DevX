// import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Mobnav from "./Mobnav";
import React, { useState, useEffect } from "react";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: space-between;

  background: url("./img/devxhero.webp");
  background-size: cover;

  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 40px;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 130px;
  padding-bottom: 200px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: white;

  @media only screen and (max-width: 768px) {
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
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    
     
    <Section className="">

      {isMobile ? <Mobnav /> : <Navbar />}
      <Container>
        <Left className=" ">
          <Title className=" font-bold">Think. Make. Solve.</Title>
          <WhatWeDo className=" font-bold text-[24px] ">
            <Line src="./img/line.png" />
            <Subtitle >What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        {/* <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right> */}
      </Container>
    </Section>
  );
};

export default Hero;
