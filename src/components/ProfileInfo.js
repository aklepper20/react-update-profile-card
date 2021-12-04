import React from "react";
import styled from "styled-components";

export default function ProfileInfo() {
  return (
    <Profile>
      <ProfileImage></ProfileImage>
      <ProfileContent>
        <Name>Aly Baez</Name>
        <Info>
          <span>Los Angeles</span>
          <span>24</span>
        </Info>
      </ProfileContent>
    </Profile>
  );
}

const Profile = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid #175676;
  position: absolute;
  top: -50px;
  left: 130px;
  background-image: url("/images/profile.jpg");
  background-size: contain;
`;

const ProfileContent = styled.div`
  width: 150px;
  height: 40px;
  margin-top: 30px;
  text-align: center;
`;
const Name = styled.div`
  letter-spacing: 1.3px;
  color: hsl(229, 53%, 23%);
`;

const Info = styled.div`
  margin-top: 4px;
  color: hsl(229, 23%, 23%);

  span:first-child {
    font-size: 14px;
    margin-right: 8px;
  }

  span:last-child {
    font-size: 12px;
  }
`;
