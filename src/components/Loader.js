import React from "react";
import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
const Span = styled.span`
  display: inline-block;
  font-size: 40px;
  font-weight: 900;
  animation: ${loading} 0.6s infinite alternate;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    animation-delay: 0.5s;
  }
`;

const Loader = () => {
  return (
    <Container>
      <div className="loading">
        <Span>마</Span>
        <Span>롱</Span>
        <Span>이</Span>
        <Span>마</Span>
        <Span>롱</Span>
        <Span>이</Span>
      </div>
    </Container>
  );
};

export default Loader;
