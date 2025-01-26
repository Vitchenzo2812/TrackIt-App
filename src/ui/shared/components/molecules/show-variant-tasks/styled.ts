import styled, { css } from 'styled-components';
import { ShortTaskVariant } from '../../atoms/short-task';

export const Container = styled.div<{ variant: ShortTaskVariant }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${(props) => {
    switch (props.variant) {
      case 'completed':
        return css`
          align-items: end;
        `;

      case 'pending':
        return css`
          align-items: start;
        `;
    }
  }}
`;

export const WrapperTasks = styled.div<{ variant: ShortTaskVariant }>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-height: 13rem;
  overflow-y: auto;
  padding-bottom: 2rem;

  ${(props) => {
    switch (props.variant) {
      case 'completed':
        return css`
          padding-right: 1rem;
        `;

      case 'pending':
        return css`
          padding-left: 1rem;
        `;
    }
  }}
`;
