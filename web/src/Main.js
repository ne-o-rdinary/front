import styled from "styled-components";
import { Clover, Honor1, Iconlogo, Sad1, Tree1 } from "./assets";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="text">
        랜덤 질문에 답하며
        <br /> 올해를 회고하고
        <br /> 새해 목표를 세워봐!!
      </div>
      <img src={Honor1} className="honor" alt="honor" />
      <img src={Tree1} className="tree" alt="tree" />
      <img src={Clover} className="clover" alt="clover" />
      <img src={Sad1} className="sad" alt="sad" />
      <img src={Iconlogo} className="icon" alt="icon" />

      <div className="btn" onClick={() => navigate("/option")}>
        시작하기
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;

  display: flex;
  align-items: end;
  justify-content: center;

  .btn {
    width: 341px;
    height: 58px;
    margin-bottom: 20px;
    display: flex;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: var(--Pastel-Red, #ff6767);

    overflow: hidden;
    color: var(--White, #fff);
    text-align: center;
    font-feature-settings: "ss10" on;
    text-overflow: ellipsis;

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.24px;
  }

  .text {
    position: absolute;
    bottom: 390px;
    left: 140px;

    width: 179px;
    height: 110px;

    background: white;

    display: flex;
    align-items: center;
    justify-content: center;

    font-feature-settings: "ss10" on;
    /* Body 2 Semibold */
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 22.5px */
    letter-spacing: -0.03px;
  }
  .tree {
    position: absolute;
    bottom: 320px;
    left: 0px;
    z-index: 5;
  }
  .clover {
    position: absolute;
    bottom: 600px;
    left: 120px;
    transform: rotate(30deg);

    width: 156px;
    height: 148px;
  }
  .honor {
    position: absolute;
    bottom: 450px;
    right: 0px;
  }
  .sad {
    position: absolute;
    bottom: 170px;
    right: 0;
  }
  .icon {
    position: absolute;
    bottom: 120px;
    left: 20px;
  }

  background: var(
    --Sub-gradient,
    linear-gradient(180deg, #feeced 0%, #f2e8ff 100%)
  );
`;

export default Main;
