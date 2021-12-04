import React from "react";
import styled from "styled-components";

export default function ProfileInfo() {
  return (
    <Profile>
      <ProfileImage></ProfileImage>
    </Profile>
  );
}

const Profile = styled.div`
  background-color: red;
  width: 100%;
  height: 100px;
  position: relative;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid white;
  position: absolute;
  top: -50px;
  left: 130px;
  background-image: url("/images/profile.jpg");
  background-size: contain;
`;
