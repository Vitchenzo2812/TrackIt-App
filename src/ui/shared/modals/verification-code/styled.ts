import styled from 'styled-components';

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  width: 65rem;
  height: 40rem;
  border-radius: 1.2rem;
  border: 0.25rem solid #fff;
  background: linear-gradient(
    156deg,
    rgba(255, 255, 255, 0.45) 4.76%,
    rgba(153, 153, 153, 0.25) 96.56%
  );
  box-shadow: 0.3rem 0.4rem 0.4rem 0.35rem rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3.5rem);
  padding: 3.1rem 4.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperTitleTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.3rem;
  padding-top: 2.3rem;
`;

export const SubmitButton = styled.button`
  width: 15rem;
  height: 5.5rem;
  border-radius: 1rem;
  margin-top: 3.3rem;
  border: 0.2rem solid #f4f4f4;
  background: rgba(244, 244, 244, 0.35);
  color: #2e2e2e;
  font-weight: 600;
  font-size: 2rem;
  padding: 1.2rem 4.4rem;
  cursor: pointer;
`;
