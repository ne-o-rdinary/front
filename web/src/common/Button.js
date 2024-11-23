import React from "react";
import styled from "styled-components";

export default function Button({ children, color }) {
  return (
    <ButtonContainer color={color}>
      <ButtonTxt>{children}</ButtonTxt>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  width: 100%;
  height: 58px;
  min-width: 84px;
  max-width: 480px;
  padding: 0px 16px;
  gap: 0px;
  background-color: ${({ color }) => color};
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;
const ButtonTxt = styled.div`
  display: flex;
  color: white;
  font-size: 20px;
  line-height: 28px;
  align: center;
  font: Pretendard;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
