import styled from 'styled-components'
import { Honor } from './assets'

const Share = () => {
  return (
    <Wrapper>
      <div className='content'>
        <img src={Honor} alt='honor' />
        <Desc>
          <div className='title'>올해 가장 자랑스러웠던 순간은 언제야?</div>
          <div>
            내가 너디너리 해커톤에서 멋진 팀원들과 함께 1등을 해서 너무 기뻤을
            때야. 장소는 선정릉 근처 디캠프에서 열렸지. 내가 너디너리 해커톤에서
            멋진 팀원들과 함께 1등을 해서 너무기
          </div>
        </Desc>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  height: 100%;
  width: 100%;

  .content {
    border-radius: 48px;
    border: 1px solid rgba(252, 255, 232, 0.3);
    background: var(
      --Sub-gradient,
      linear-gradient(180deg, #feeced 0%, #f2e8ff 100%)
    );
    width: 341px;
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
`
const Desc = styled.div`
  margin: 0 20px;

  .title {
    color: var(--Navy, #191929);
    font-feature-settings: 'ss10' on;

    /* Headline150 */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
    letter-spacing: -0.552px;

    margin-bottom: 20px;
  }
`
export default Share
