import styled from "styled-components";
import { useState } from "react";
import Button from "../common/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const Text = styled.h1`
  margin: 0;
  width: 250px;
  font-size: 32px;
  line-height: 51.2px;
  text-align: center;

  margin: 32px 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 100%;
  height: 100%;
  padding: 20px 17px;

  background: #fcffe8;
  box-sizing: border-box; /* 패딩 포함 계산 */
`;

const InputWrapper = styled.div`
  position: relative; /* Count의 기준을 Input으로 설정 */
  width: 100%;
  height: 100%;
`;

const Input = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px 14px;
  background: #edffd8;

  border: none;
  border-radius: 12px;
  box-sizing: border-box;

  resize: none;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 163%; /* 26.08px */
  letter-spacing: 0.091px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 163%; /* 26.08px */
    letter-spacing: 0.091px;
  }
`;

const Count = styled.div`
  position: absolute;
  bottom: 10px;
  right: 14px;

  color: #555a6e;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;
`;

const QuestionInput = () => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleInput = () => {};

  return (
    <Container>
      <Text>올해 가장 자랑스러웠던 순간은 언제야?</Text>
      <InputContainer>
        <InputWrapper>
          <Input
            value={input}
            onChange={onChange}
            placeholder="답변을 입력해주세요"
            maxLength={100}
          />
          <Count>{input.length}/100</Count>
        </InputWrapper>

        {input.length > 0 && (
          <Button color={"#FF6767"} onClick={handleInput}>
            답변 입력하기
          </Button>
        )}
      </InputContainer>
    </Container>
  );
};

export default QuestionInput;
