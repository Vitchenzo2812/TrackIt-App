import { sourceSans } from '@/styles/global';
import styled, { css } from 'styled-components';
import { VerificationCodeType } from '../styled';

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const InputNumber = styled.input<{ variant?: VerificationCodeType }>`
  width: 7.8rem;
  height: 10rem;
  font-size: 5rem;
  font-family: ${sourceSans.style.fontFamily}, sans-serif;
  font-weight: 600;
  color: #2e2e2e;
  border-radius: 0.8rem;
  border: 0.2rem solid #f4f4f4;
  background: rgba(244, 244, 244, 0.35);
  box-shadow: 0.5rem 0.5rem 0.8rem 0rem rgba(0, 0, 0, 0.25);
  padding: 1.6rem 2.4rem;

  ${({ variant }) => {
    if (!variant) return;

    switch (variant) {
      case 'rightCode':
        return css`
          border-radius: 0.8rem;
          border: 0.2rem solid #6df857;
          background: rgba(198, 255, 188, 0.35);
          box-shadow: 0.5rem 0.5rem 0.8rem 0rem rgba(0, 0, 0, 0.25);
        `;

      case 'wrongCode':
        return css`
          border-radius: 0.8rem;
          border: 0.2rem solid #f76262;
          background: rgba(250, 140, 140, 0.35);
          box-shadow: 0.5rem 0.5rem 0.8rem 0rem rgba(0, 0, 0, 0.25);
        `;
    }
  }}
`;
