import styled from 'styled-components';

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  border-radius: 1.2rem;
  border: 0.25rem solid #fff;
  background: linear-gradient(
    156deg,
    rgba(255, 255, 255, 0.45) 4.76%,
    rgba(153, 153, 153, 0.25) 96.56%
  );
  box-shadow: 0.3rem 0.4rem 0.4rem 0.35rem rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3.5rem);
  padding: 3.6rem 2rem;
`;

export const WrapperTitleTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperEmailInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  padding-top: 1.4rem;
`;
