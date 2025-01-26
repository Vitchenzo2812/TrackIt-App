import PendingIcon from '@/ui/icons/pending';
import Typography from '../typography';
import * as S from './styled';
import CompletedIcon from '@/ui/icons/completed';

export type ShortTaskVariant = 'completed' | 'pending';

interface Props {
  label: string;
  variant: ShortTaskVariant;
}

const ShortTask = ({ label, variant }: Props) => {
  return (
    <S.Container variant={variant}>
      <Typography
        size={2}
        color="#2e2e2e"
        styles={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {label}
      </Typography>

      {variant === 'completed' && <CompletedIcon />}
      {variant === 'pending' && <PendingIcon />}
    </S.Container>
  );
};

export default ShortTask;
