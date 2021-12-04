import React from "react";
import styled from "styled-components";

export default function Stats({ profileObj }) {
  return (
    <Container>
      {/* {profileObj.map(obj, index) => {
            return <Stat key={index}>

            </Stat>
        }} */}
      <Stat>
        <Number>30</Number>
        <Title>Followers</Title>
      </Stat>
      <Stat></Stat>
      <Stat></Stat>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 95px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  background-color: #fff;
  border-top: 1px solid hsl(227, 10%, 86%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Stat = styled.div`
  width: 80px;
  height: 60px;
  background-color: red;
  text-align: center;
`;

const Number = styled.div`
  width: 100%;
  height: 20px;
  background-color: blue;
  padding-top: 10px;
`;

const Title = styled.div`
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: blue;
`;
