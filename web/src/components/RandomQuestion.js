import styled from "styled-components";

import { Clover } from "../assets";
import Button from "../common/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 81px;
  padding: 0 62px;

  height: 100vh;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  margin: 0;
  width: 250px;
  font-size: 32px;
  line-height: 51.2px;
  text-align: center;
`;

const ButtonBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const RandomQuestion = () => {
  const getRandomQuestion = () => {};
  const handleInput = () => {};

  return (
    <Container>
      <Question>
        <img src={Clover} alt="clover" width={236} height={224} />
        <Text>어떤 분야에서 더 많은 성취를 이루고 싶어?</Text>
      </Question>

      {/** 버튼 */}
      <ButtonBox>
        <Button color={"#8EFFFD"} onClick={getRandomQuestion}>
          랜덤 질문 재추첨하기
        </Button>
        <Button color={"#FF6767"} onClick={handleInput}>
          답변 입력하기
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default RandomQuestion;
