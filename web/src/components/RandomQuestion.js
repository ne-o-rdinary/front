import styled from "styled-components";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { Clover, Sad, Honor } from "../assets";
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
  width: calc(85% + 2 * 62px);
  display: flex;
  gap: 18px;
  flex-direction: column;
  align-items: center;
  margin: 0 -62px;
`;

const RandomQuestion = () => {
  const location = useLocation();
  const [question, setQuestion] = React.useState("");
  const [questionId, setQuestionId] = React.useState("");
  const [imageIndex, setImageIndex] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    getRandomQuestion();
  }, []);

  /** 랜덤 질문 조회 API */
  const getRandomQuestion = () => {
    axios({
      method: "GET",
      url: `https://yoonsever.xn--h32bi4v.xn--3e0b707e/api/questions`,
      params: {
        questionCategory:
          location?.state?.category === "회고" ? "RETROSPECT" : "PLAN",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI0MjllYzA4MC1jY2QyLTQ4YTUtYmM3OC02YWYyM2NmMDI3NmEiLCJpYXQiOjE3MzIzNzczNzAsImV4cCI6MTczMjk4MjE3MH0.7pv3033TXttOezcjwKd44d-rPEnB7-gbqkmWMgyzKEM",
      },
      withCredentials: true,
    })
      .then((response) => {
        setQuestionId(response.data.result.questionId);
        setQuestion(response.data.result.question);
        setImageIndex(response.data.result.imageIndex);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // questionId 함께 전달
  const navigateToInput = () => {
    if (questionId) {
      navigate("/question-input", {
        state: {
          option: questionId,
        },
      });
    }
  };

  return (
    question &&
    imageIndex && (
      <Container>
        <Question>
          {imageIndex === 1 ? (
            <img src={Clover} alt="clover" width={236} height={224} />
          ) : imageIndex === 2 ? (
            <img src={Sad} alt="sad" width={236} height={224} />
          ) : (
            <img src={Honor} alt="honor" width={236} height={224} />
          )}

          <Text>{question}</Text>
        </Question>

        {/** 버튼 */}
        <ButtonBox>
          <Button
            btncolor={"#8EFFFD"}
            txtcolor={"#000"}
            onClick={getRandomQuestion}
          >
            랜덤 질문 재추첨하기
          </Button>
          <Button
            btncolor={"#FF6767"}
            txtcolor={"#fff"}
            onClick={navigateToInput}
          >
            답변 입력하기
          </Button>
        </ButtonBox>
      </Container>
    )
  );
};

export default RandomQuestion;
