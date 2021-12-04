import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";
import Stats from "./Stats";

export default function CardContainer() {
  return (
    <Container>
      <Header />
      <ProfileInfo />
      <Stats />
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  box-shadow: 5px 3px 5px rgba(0, 0, 0, 0.1);
`;
