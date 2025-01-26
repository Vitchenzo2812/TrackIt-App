import { CircularProgress } from '@mui/material';
import * as S from './styled';
import Typography from '../typography';
import { poppins } from '@/styles/global';

interface Props {
  percentage: number;
}

const Percentage = ({ percentage }: Props) => {
  return (
    <S.Container>
      <CircularProgress
        size="21.7rem"
        variant="determinate"
        value={percentage}
        sx={{
          color: '#36BA98',
          circle: {
            strokeWidth: 4,
          },
        }}
      />

      <S.TextContainer>
        <Typography size={5} weight={700} fontFamily={poppins.style.fontFamily}>
          {percentage}%
        </Typography>
      </S.TextContainer>
    </S.Container>
  );
};

export default Percentage;
