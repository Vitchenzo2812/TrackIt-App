import ShortTask, { ShortTaskVariant } from '../../atoms/short-task';
import Typography from '../../atoms/typography';
import * as S from './styled';

interface Props {
  variant: ShortTaskVariant;
}

const VariantStyles: Record<ShortTaskVariant, object> = {
  completed: {
    paddingRight: '2rem',
  },
  pending: {
    paddingLeft: '2rem',
  },
};

const ShowVariantTasks = ({ variant }: Props) => {
  return (
    <S.Container variant={variant}>
      <Typography
        size={2.5}
        color="#2e2e2e"
        weight={600}
        styles={VariantStyles[variant]}
      >
        Tarefas{' '}
        <Typography
          size={2.5}
          color={variant === 'completed' ? '#36BA98' : '#E9C46A'}
          weight={700}
        >
          {variant === 'completed' && 'Concluídas'}
          {variant === 'pending' && 'Pendentes'}
        </Typography>
      </Typography>

      <S.WrapperTasks variant={variant}>
        <ShortTask label="Tarefa 1" variant={variant} />
        <ShortTask label="Tarefa 2" variant={variant} />
        <ShortTask label="Tarefa 3" variant={variant} />
        <ShortTask label="Tarefa 4" variant={variant} />
        <ShortTask label="Tarefa 5" variant={variant} />
      </S.WrapperTasks>
    </S.Container>
  );
};

export default ShowVariantTasks;
