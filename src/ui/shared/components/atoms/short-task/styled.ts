import styled, { css } from 'styled-components';
import { ShortTaskVariant } from '.';

export const Container = styled.div<{ variant: ShortTaskVariant }>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  width: 25.5rem;
  height: 4.5rem;
  border-radius: 0.8rem;
  background: #fff;

  ${(props) => {
    switch (props.variant) {
      case 'completed':
        return css`
          border: 0.2rem solid #36ba98;
          box-shadow: 0.4rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
        `;

      case 'pending':
        return css`
          border: 0.2rem solid #e9c46a;
          box-shadow: -0.4rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
        `;
    }
  }}
`;
