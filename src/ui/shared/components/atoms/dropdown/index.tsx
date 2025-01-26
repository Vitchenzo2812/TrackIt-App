import { ForwardedRef, forwardRef } from 'react';
import Typography from '../typography';
import * as S from './styled';

type Item = {
  label: string;
  onClick: () => void;
};

interface Props {
  items: Item[];
}

const Dropdown = ({ items }: Props, ref?: ForwardedRef<HTMLDivElement>) => {
  return (
    <S.Container ref={ref}>
      <S.WrapperItems>
        {items.map((item, index) => {
          const isTheLastItem = items.length - 1 !== index;

          return (
            <S.WrapperItemDivisor key={index}>
              <Typography
                size={2}
                color="#2e2e2e"
                weight={600}
                onClick={item.onClick}
                maxWidth="20.5rem"
              >
                {item.label}
              </Typography>

              {isTheLastItem && <S.Divisor />}
            </S.WrapperItemDivisor>
          );
        })}
      </S.WrapperItems>
    </S.Container>
  );
};

export default forwardRef(Dropdown);
