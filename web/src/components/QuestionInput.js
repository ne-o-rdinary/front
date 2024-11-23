import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

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
  font-family: Pretendard;

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
    font-family: Pretendard;
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
  const location = useLocation();
  const inputRef = useRef();

  useEffect(() => {
    console.log(location.state.option); // questionId
  }, []);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const navigate = useNavigate();

  const handleInput = async () => {
    const result = await axios.post(
      "https://yoonsever.xn--h32bi4v.xn--3e0b707e/api/answers", // API 엔드포인트
      {
        questionId: location.state.option,
        answer: input,
      }, // Body 데이터
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI0MjllYzA4MC1jY2QyLTQ4YTUtYmM3OC02YWYyM2NmMDI3NmEiLCJpYXQiOjE3MzIzNzczNzAsImV4cCI6MTczMjk4MjE3MH0.7pv3033TXttOezcjwKd44d-rPEnB7-gbqkmWMgyzKEM",
        },
        withCredentials: true,
      }
    );
    console.log(result.data.result.uuid);
    navigate(`/share/${result.data.result.uuid}`);
  };

  return (
    <Container>
      <Text>
        올해 가장
        <br /> 자랑스러웠던
        <br /> 순간은 언제야?
      </Text>
      <InputContainer>
        <InputWrapper>
          <Input
            ref={inputRef}
            value={input}
            onChange={onChange}
            placeholder="답변을 입력해주세요"
            maxLength={100}
          />
          <Count>{input.length}/100</Count>
        </InputWrapper>

        {input.length > 0 && (
          <Button btncolor={"#FF6767"} txtcolor={"#fff"} onClick={handleInput}>
            답변 완료
          </Button>
        )}
      </InputContainer>
    </Container>
  );
};

export default QuestionInput;
