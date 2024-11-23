import styled from "styled-components";
import { Clover, Sad, Honor } from "./assets";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./common/Button";

const Share = () => {
  const { uuid } = useParams(); // URL에서 동적 파라미터 가져오기
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://yoonsever.xn--h32bi4v.xn--3e0b707e/api/answers/${uuid}`,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI0MjllYzA4MC1jY2QyLTQ4YTUtYmM3OC02YWYyM2NmMDI3NmEiLCJpYXQiOjE3MzIzNzczNzAsImV4cCI6MTczMjk4MjE3MH0.7pv3033TXttOezcjwKd44d-rPEnB7-gbqkmWMgyzKEM",
      },
      withCredentials: true,
    }).then((response) => {
      console.log(response.data.result);
      const { answer, imageIndex, question } = response.data.result;
      setResult([imageIndex, question, answer]);
    }).catch((error) => {
      console.error("Error:", error);
    });
  }, []);

  const copyToClipboard = () => {
    const currentUrl = window.location.href; // 현재 주소 가져오기
    navigator.clipboard
      .writeText(currentUrl) // 클립보드에 복사
      .then(() => {
        alert("URL이 복사되었습니다!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <Wrapper>
      <div className="content">
        {result && result[0] === 1 ? (
          <img src={Clover} alt="clover" width={236} height={224} />
        ) : result[0] === 2 ? (
          <img src={Sad} alt="sad" width={236} height={224} />
        ) : (
          <img src={Honor} alt="honor" width={236} height={224} />
        )}
        <Desc>
          {result && (
            <>
              <div className="title">{result[1]}</div>
              <div>{result[2]}</div>
            </>
          )}
        </Desc>
      </div>
      <Button btncolor={"#FF6767"} txtcolor={"#fff"} onClick={copyToClipboard}>
        공유하기
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100vh;
  width: 100%;

  .content {
    border-radius: 48px;
    border: 1px solid rgba(252, 255, 232, 0.3);
    background: var(
      --Sub-gradient,
      linear-gradient(180deg, #feeced 0%, #f2e8ff 100%)
    );
    width: 21rem;
    height: 594px;

    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    img {
      margin-top: 20px;
      width: 301px;
      height: 285.564px;
    }
  }
`;
const Desc = styled.div`
  margin: 0 20px;

  .title {
    color: var(--Navy, #191929);
    font-feature-settings: "ss10" on;

    /* Headline150 */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
    letter-spacing: -0.552px;

    margin-bottom: 20px;
  }
`;
export default Share;
