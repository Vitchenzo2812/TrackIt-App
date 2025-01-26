import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.7rem;
  padding: 2.2rem 2.1rem;
  width: 60.6rem;
  height: 35rem;
  border-radius: 5rem;
  background: #fff;
  box-shadow:
    -2rem -2rem 6rem 0.2rem #fff,
    2rem 2rem 6rem 0.2rem #bebebe;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ContainerTasks = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const Divisor = styled.div`
  width: 0.1rem;
  height: 100%;
  background-color: #2e2e2e;
`;
