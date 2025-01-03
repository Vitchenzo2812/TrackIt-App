import { sourceSans } from '@/styles/global';
import styled from 'styled-components';

export const Container = styled.div`
  width: 44rem;
  height: 4rem;
  border-radius: 0.8rem;
  border: 0.15rem solid rgba(244, 244, 244, 0.75);
  background: rgba(244, 244, 244, 0.35);
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem 0.9rem;
  gap: 0.9rem;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;

  &::placeholder {
    color: #797979;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: ${sourceSans.style.fontFamily}, sans-serif;
  }
`;
