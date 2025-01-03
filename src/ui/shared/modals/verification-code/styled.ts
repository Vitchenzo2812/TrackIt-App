import styled, { css } from 'styled-components';

export type VerificationCodeType = 'rightCode' | 'wrongCode';

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div<{ variant?: VerificationCodeType }>`
  width: 65rem;
  height: max-content;
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

  ${({ variant }) => {
    if (!variant) return;

    switch (variant) {
      case 'rightCode':
        return css`
          border-radius: 1.2rem;
          border: 0.25rem solid #6df857;
          background: linear-gradient(
            156deg,
            rgba(198, 255, 188, 0.45) 4.76%,
            rgba(198, 255, 188, 0.25) 96.56%
          );
          box-shadow: 0.3rem 0.4rem 0.4rem 0.35rem rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(3.5rem);
        `;

      case 'wrongCode':
        return css`
          border-radius: 1.2rem;
          border: 0.25rem solid #f76262;
          background: linear-gradient(
            156deg,
            rgba(250, 140, 140, 0.45) 4.76%,
            rgba(250, 140, 140, 0.25) 96.56%
          );
          box-shadow: 0.3rem 0.4rem 0.4rem 0.35rem rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(3.5rem);
        `;
    }
  }}
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

export const ResendCodeButton = styled.button<{
  variant?: VerificationCodeType;
}>`
  width: 18.3rem;
  height: 4rem;
  border: 0.2rem solid #f4f4f4;
  background: rgba(244, 244, 244, 0.35);
  color: #2e2e2e;
  font-weight: 700;
  font-size: 2rem;
  padding: 0rem 0.8rem;
  cursor: pointer;

  ${({ variant }) => {
    if (!variant) return;

    switch (variant) {
      case 'rightCode':
        return css`
          border-radius: 0.8rem;
          border: 0.2rem solid #6df857;
          background: rgba(198, 255, 188, 0.35);
        `;

      case 'wrongCode':
        return css`
          border-radius: 0.8rem;
          border: 0.2rem solid #f76262;
          background: rgba(250, 140, 140, 0.35);
        `;
    }
  }}
`;

export const SubmitButton = styled.button<{ variant?: VerificationCodeType }>`
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
  filter: drop-shadow(0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25));

  ${({ variant }) => {
    if (!variant) return;

    switch (variant) {
      case 'rightCode':
        return css`
          border-radius: 1rem;
          border: 0.2rem solid #6df857;
          background: rgba(198, 255, 188, 0.35);
        `;

      case 'wrongCode':
        return css`
          border-radius: 1rem;
          border: 0.2rem solid #f76262;
          background: rgba(250, 140, 140, 0.35);
        `;
    }
  }}
`;
