import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 48rem;
  height: 72rem;
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

export const WrapperFirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
  padding-bottom: 3rem;
`;

export const WrapperFirstSectionTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  width: 38rem;
  height: 0.2rem;
  background-color: #2e2e2e;
`;

export const WrapperAllInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const WrapperEmailInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.2rem;
`;

export const WrapperInputTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const WrapperPasswordInput = styled(WrapperEmailInput)``;
export const WrapperRepeatPasswordInput = styled(WrapperEmailInput)``;
