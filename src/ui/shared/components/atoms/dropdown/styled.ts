import styled from 'styled-components';

export const Container = styled.div`
  width: 24.5rem;
  height: 35rem;
  background: #fff;
  box-shadow: 2rem 2rem 6rem 0.2rem #bebebe;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  padding: 2rem;
  overflow-y: auto;
  position: absolute;
  z-index: 100;
  top: 5rem;
`;

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Divisor = styled.div`
  background-color: #2e2e2e;
  height: 0.2rem;
  width: 100%;
`;

export const WrapperItemDivisor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
