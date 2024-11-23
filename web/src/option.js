import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import { Clover } from "./assets";
import { CropHonor } from "./assets";
import { CropSad } from "./assets";
import { Tree } from "./assets";
import { Randombox } from "./assets";
import { useNavigate } from "react-router-dom";

export default function Option() {
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  const handleCategory = (select) => {
    setCategory(select);
  };

  useEffect(() => {
    if (category) {
      navigate("/randombox", {
        state: {
          option: category,
        },
      });
    }
  }, [category, navigate]);
  return (
    <BackGround>
      <HonorImg src={CropHonor} />
      <CloverImg src={Clover} />
      <SadImg src={CropSad} />
      <TreeImg src={Tree} />
      <TitleContainer>
        <TitleTxt>안녕!나는 리플리트리라고 해!</TitleTxt>
        <TitleTxt>어떤 랜덤 질문에 답하고 싶어?</TitleTxt>
      </TitleContainer>
      <ButtonArea>
        <ButtonContainer onClick={() => handleCategory("회고")}>
          <Button btncolor={"#00CD80"} txtcolor={"#ffffff"}>
            2024년 회고하기
          </Button>
        </ButtonContainer>
        <ButtonContainer onClick={() => handleCategory("목표")}>
          <Button btncolor={"#FF6767"} txtcolor={"#ffffff"}>
            2025년 목표세우기
          </Button>
        </ButtonContainer>
      </ButtonArea>
    </BackGround>
  );
}

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  top: 6rem;
`;
const CloverImg = styled.img`
  width: 156px;
  height: 148px;
  position: absolute;
  transform: rotate(-14.564deg);
  top: 4rem;
`;
const SadImg = styled.img`
  position: absolute;
  left: 0;
  top: 9rem;
`;
const TreeImg = styled.img`
  position: absolute;
  top: 9rem;
`;
const TitleContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 30%;
  flex-direction: column;
  align-items: center;
`;
const TitleTxt = styled.div`
  color: #191929;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 38.4px */
  letter-spacing: -0.552px;
`;
const ButtonArea = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 1.5rem;
  flex-direction: column;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  margin-top: 18px;
  flex-direction: column;
  align-items: center;
`;
