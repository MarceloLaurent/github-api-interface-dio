import styled from "styled-components";
import bgImg from "../../images/bg.png"

export const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  background: url(${bgImg}) center no-repeat;  
  background-size: cover;
  height: 84vh;
  justify-content: center;

  h1 {
    color: #fff;
    margin-top: 72px;
    font-weight: bold;
    font-size: 48px;
  }
`;

/*import styled from "styled-components";
import bgImg from "../../images/bg.png"

export const WrapperLayout = styled.section`
  margin: 16px;
  background: url(${bgImg}) center no-repeat;  
  background-size: cover;
  `;*/