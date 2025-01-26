import RightIcon from '@/ui/icons/right';
import * as S from './styled';
import WrongIcon from '@/ui/icons/wrong';
import Typography from '../typography';
import { sourceSans } from '@/styles/global';

interface Props {
  isRight: boolean;
  text: string;
}

const PasswordTag = ({ text, isRight }: Props) => {
  return (
    <S.Container>
      {isRight ? <RightIcon /> : <WrongIcon />}
      <Typography
        size={1.2}
        fontFamily={sourceSans.style.fontFamily}
        color="#2E2E2E"
        weight={400}
      >
        {text}
      </Typography>
    </S.Container>
  );
};

export default PasswordTag;
