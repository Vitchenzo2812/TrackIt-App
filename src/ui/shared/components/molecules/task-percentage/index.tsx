import { sourceSans } from '@/styles/global';
import Typography from '../../atoms/typography';
import * as S from './styled';
import Percentage from '../../atoms/percentage';

const TaskPercentage = () => {
  return (
    <S.Container>
      <Typography
        color="#2e2e2e"
        size={3.5}
        weight={600}
        fontFamily={sourceSans.style.fontFamily}
      >
        Tarefas concluídas
      </Typography>

      <Percentage percentage={75} />
    </S.Container>
  );
};

export default TaskPercentage;
