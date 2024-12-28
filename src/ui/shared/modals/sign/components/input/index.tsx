import { ReactElement } from 'react';
import * as S from './styled';

interface Props {
  placeholder: string;
  leftIcon: ReactElement;
  rightIcon?: ReactElement;
}

const SignInput = ({ placeholder, leftIcon, rightIcon }: Props) => {
  return (
    <S.Container>
      {leftIcon}
      <S.Input type="text" placeholder={placeholder} />
      {rightIcon}
    </S.Container>
  );
};

export default SignInput;
