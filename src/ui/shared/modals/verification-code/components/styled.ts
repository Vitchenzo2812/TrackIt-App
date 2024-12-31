import { sourceSans } from '@/styles/global';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const InputNumber = styled.input`
  width: 7.8rem;
  height: 10rem;
  font-size: 5rem;
  font-family: ${sourceSans.style.fontFamily}, sans-serif;
  font-weight: 600;
  color: rgba(46, 46, 46, 0.5);
  border-radius: 0.8rem;
  border: 0.2rem solid #f4f4f4;
  background: rgba(244, 244, 244, 0.35);
  box-shadow: 0.5rem 0.5rem 0.8rem 0rem rgba(0, 0, 0, 0.25);
  padding: 1.6rem 2.4rem;
`;
