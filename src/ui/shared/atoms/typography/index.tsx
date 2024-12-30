/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, JSX } from 'react';
import * as S from './styled';

interface Props {
  as?: keyof JSX.IntrinsicElements;
  size: number;
  color?: string;
  weight?: number;
  fontFamily?: string;
  lineHeight?: number;
  children: any;
  textAlign?: CSSProperties['textAlign'];
}

const Typography = ({
  as = 'span',
  size,
  weight = 400,
  color = '#000',
  fontFamily,
  lineHeight,
  children,
  textAlign,
}: Props) => {
  return (
    <S.Typography
      as={as}
      size={size}
      weight={weight}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </S.Typography>
  );
};

export default Typography;
