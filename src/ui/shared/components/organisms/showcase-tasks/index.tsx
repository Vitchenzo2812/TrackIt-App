import Typography from '../../atoms/typography';
import ShowVariantTasks from '../../molecules/show-variant-tasks';
import * as S from './styled';

const ShowcaseTasks = () => {
  return (
    <S.Container>
      <S.WrapperTexts>
        <Typography size={3.5} color="#2e2e2e" weight={600}>
          Cada passo conta!
        </Typography>
        <Typography size={2.5} color="#2e2e2e">
          Mesmo pequenas conquistas fazem a{' '}
          <Typography size={2.5} color="#E76F51" weight={600}>
            diferença
          </Typography>
          .
        </Typography>
      </S.WrapperTexts>

      <S.ContainerTasks>
        <ShowVariantTasks variant="completed" />
        <S.Divisor />
        <ShowVariantTasks variant="pending" />
      </S.ContainerTasks>
    </S.Container>
  );
};

export default ShowcaseTasks;
