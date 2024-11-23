import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Button from "./common/Button";
import { Clover } from "./assets";
import { CropHonor } from "./assets";
import { CropSad } from "./assets";
import { Randombox } from "./assets";
import { useNavigate } from "react-router-dom";

export default function Random() {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state.option;

  const handleButton = () => {
    if (category) {
      navigate("/random-question", {
        state: {
          category: category,
        },
      });
    }
  };

  return (
    <BackGround>
      <HonorImg src={CropHonor} />
      <CloverImg src={Clover} />
      <SadImg src={CropSad} />
      <RandomboxImg src={Randombox} />
      <ButtonContainer onClick={() => handleButton()}>
        <Button btncolor={"#FF6767"} txtcolor={"#ffffff"}>
          랜덤 질문 추첨하기
        </Button>
      </ButtonContainer>
    </BackGround>
  );
}

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
`;

const HonorImg = styled.img`
  position: absolute;
  right: 0;
  top: 120px;
`;
const CloverImg = styled.img`
  width: 156px;
  height: 148px;
  position: absolute;
  transform: rotate(-14.564deg);
  top: 60px;
`;
const SadImg = styled.img`
  position: absolute;
  left: 0;
  top: 150px;
`;
const RandomboxImg = styled.img`
  position: absolute;
  top: 140px;
  width: 258.546px;
  height: 355.395px;
  flex-shrink: 0;
`;
const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  width: 90%;
  bottom: 2%;
`;
