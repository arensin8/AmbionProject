import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

function GsapText2() {
  const textRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const textElement = textRef.current;

    if (!textElement) {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementTop = textElement.offsetTop;
      const elementBottom = elementTop + textElement.offsetHeight;
      const windowHeight = window.innerHeight;

      const startAnimationPosition = elementTop - windowHeight;
      const endAnimationPosition = elementBottom - windowHeight;

      if (
        scrollPosition >= startAnimationPosition &&
        scrollPosition <= endAnimationPosition
      ) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textRef]);

  useEffect(() => {
    if (shouldAnimate) {
      // Your animation logic using gsap
      const t1 = gsap.timeline();
      t1.from(".singleLine div", {
        y: 200,
        ease: "power4.out",
        duration: 3,
        stagger: {
          amount: 0.9,
        },
      });
    }
  }, [shouldAnimate]);

  return (
    <AppContainer ref={textRef}>
      {shouldAnimate && (
        <Wrapper>
          <Line className="singleLine">
            <Text>
              O<span>U</span>R
            </Text>
          </Line>
          <Line className="singleLine">
            <Text>
              G<span>RA</span>D<span>U</span>AT<span>ED</span>,
            </Text>
          </Line>
          <Line className="singleLine">
            <Text>
              S<span>T</span>UD<span>E</span>N<span>T'S</span>
            </Text>
          </Line>
        </Wrapper>
      )}
    </AppContainer>
  );
}

export default GsapText2;

const AppContainer = styled.div`
  width: 90vw;
  height: 100vh;
  color: #000000;
  position: relative;
  margin-top: -5%;

  display: flex;
  align-items: center;
  text-align: center !important;
  justify-content: center;
  padding-left: 10vw;

  @media screen and (max-width: 550px) {
    height: 50vh;
    width: 95vw;
    margin-top: -15%;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 11vw;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 550px) {
    height: 14vw;
  }

  &:nth-of-type(1) {
    display: flex;
    justify-content: center;
  }
  &:nth-of-type(2) {
    display: flex;
    justify-content: flex-start;
    margin-right: 30px;
  }
  &:nth-of-type(3) {
    display: flex;
    justify-content: flex-end;
  }
  &:nth-of-type(4) {
    display: flex;
    justify-content: center;
  }
`;

const Text = styled.div`
  position: absolute;
  font-size: 10vw;
  color: #fff;
  line-height: 10vw;

  span {
    font-family: "Major Mono Display", monospace;
    color: rgb(150, 149, 149);
    font-size: 10vw;
  }
`;
