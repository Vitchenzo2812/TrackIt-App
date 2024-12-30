import { poppins, sourceSans } from '@/styles/global';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 48rem;
  height: 54.5rem;
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
`;

export const WrapperFirstSectionTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-family: ${poppins.style.fontFamily}, sans-serif;
  font-weight: 700;
  color: #2e2e2e;
`;

export const Description = styled.span`
  font-family: ${sourceSans.style.fontFamily}, sans-serif;
  text-align: center;
  font-weight: 400;
  font-size: 2.2rem;
  color: #000000;
`;

export const Line = styled.div`
  width: 40.6rem;
  height: 0.2rem;
  background-color: #000000;
`;

export const WrapperSignUpTexts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 2.1rem;
`;

export const SignUpText = styled.span<{ color?: string; clickable?: boolean }>`
  color: ${(props) => props.color ?? '#2e2e2e'};
  font-size: 1.2rem;
  font-family: ${sourceSans.style.fontFamily}, sans-serif;
  font-weight: 600;

  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;
    `}
`;

export const WrapperEmailInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  padding-top: 1.4rem;
`;

export const TitleInput = styled.span`
  color: #2e2e2e;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const WrapperPasswordInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  padding-top: 2.5rem;
`;

export const ForgetPasswordText = styled.span`
  color: #2e2e2e;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ContainerSubmitButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 16rem;
  height: 5.5rem;
  background-color: #e9c46a;
  border-radius: 1rem;
  color: #2e2e2e;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  filter: drop-shadow(0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
`;