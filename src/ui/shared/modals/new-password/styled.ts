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
  width: 48rem;
  border-radius: 1.2rem;
  border: 0.2rem solid #fff;
  background: linear-gradient(
    156deg,
    rgba(255, 255, 255, 0.45) 4.76%,
    rgba(153, 153, 153, 0.25) 96.56%
  );
  box-shadow: 0.3rem 0.4rem 0.4rem 0.35rem rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3.5rem);
  padding: 3.6rem 2rem;
`;

export const WrapperFirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.9rem;
`;

export const WrapperFirstSectionTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const Line = styled.div`
  width: 38rem;
  height: 0.15rem;
  background-color: #2e2e2e;
`;

export const WrapperPasswordInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.2rem;
  padding-top: 3rem;
`;

export const WrapperInputTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const WrapperRepeatPasswordInput = styled(WrapperPasswordInput)`
  padding-top: 2.5rem;
`;

export const ContainerPasswordTags = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: repeat(3, 14.8rem);
  grid-template-rows: repeat(2, 2rem);
`;
