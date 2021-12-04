import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Image src="https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80">
      {/* <img  /> */}
    </Image>
  );
}

const Image = styled.img`
  width: 100%;
  height: 145px;
  object-fit: cover;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  margin-bottom: 0;
`;
