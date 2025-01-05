import { sourceSans } from '@/styles/global';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11.9rem;
`;

export const WrapperTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`;

export const SignInButton = styled.button`
  width: 23rem;
  height: 7.5rem;
  border-radius: 3rem;
  border: 0.1rem solid #f4f4f4;
  background: #36ba98;
  filter: drop-shadow(0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
  color: #2e2e2e;
  font-size: 3.5rem;
  font-weight: 600;
  font-family: ${sourceSans.style.fontFamily}, sans-serif;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  color: #2e2e2e;
  font-family: ${sourceSans.style.fontFamily}, sans-serif;
  font-size: 3rem;
  font-weight: 300;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
`;