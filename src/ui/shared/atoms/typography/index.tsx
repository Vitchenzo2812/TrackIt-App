/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, JSX } from 'react';
import * as S from './styled';
import { sourceSans } from '@/styles/global';

interface Props {
  as?: keyof JSX.IntrinsicElements;
  size: number;
  color?: string;
  weight?: number;
  fontFamily?: string;
  lineHeight?: number;
  children: any;
  textAlign?: CSSProperties['textAlign'];
  styles?: CSSProperties;
}

const Typography = ({
  as = 'span',
  size,
  weight = 400,
  color = '#000',
  fontFamily = sourceSans.style.fontFamily,
  lineHeight,
  children,
  textAlign,
  styles,
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
      style={styles}
    >
      {children}
    </S.Typography>
  );
};

export default Typography;
