import styled from 'styled-components'
import { Clover, Honor1, Iconlogo, Sad1, Tree1 } from './assets'

const Main = () => {
  return (
    <Wrapper>
      <div className='text'>
        랜덤 질문에 답하며
        <br /> 올해를 회고하고
        <br /> 새해 목표를 세워봐!!
      </div>
      <img src={Honor1} className='honor' alt='honor' />
      <img src={Tree1} className='tree' alt='tree' />
      <img src={Clover} className='clover' alt='clover' />
      <img src={Sad1} className='sad' alt='sad' />
      <img src={Iconlogo} className='icon' alt='icon' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;

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

    font-feature-settings: 'ss10' on;
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
`

export default Main
