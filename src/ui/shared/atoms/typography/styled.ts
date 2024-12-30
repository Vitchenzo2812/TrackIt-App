import styled from 'styled-components';

export const Typography = styled.span<{
  size: number;
  weight?: number;
  fontFamily?: string;
  color: string;
  lineHeight?: number;
  textAlign?: string;
}>`
  font-size: ${(props) => props.size}rem;
  font-family: ${(props) => `${props.fontFamily},`} sans-serif;
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => !!props.lineHeight && `${props.lineHeight}rem`};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign ?? 'start'};
`;
