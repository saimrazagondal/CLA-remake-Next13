import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  background-color: #cce4ff;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 992px) {
    display: none;
  }

  > img {
    width: 85%;
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const LoginFormContainer = styled.div`
  width: calc(100% - 300px);
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: calc(100% - 200px);
  }
  @media (max-width: 992px) {
    width: calc(100% - 100px);
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const LoginText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 3rem;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;
