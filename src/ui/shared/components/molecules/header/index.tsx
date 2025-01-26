import SettingsIcon from '@/ui/icons/settings';
import * as S from './styled';
import Typography from '../../atoms/typography';

const Header = () => {
  return (
    <S.Container>
      <S.WrapperItems>
        <S.Item>
          <Typography color="#2e2e2e" size={2.5} onClick={() => {}}>
            Tarefas
          </Typography>
        </S.Item>
        <S.Item>
          <Typography color="#9b9b9b" size={2.5}>
            Financeiro
          </Typography>
        </S.Item>
        <S.Item>
          <Typography color="#2e2e2e" size={2.5} onClick={() => {}}>
            Pomodoro
          </Typography>
        </S.Item>
      </S.WrapperItems>

      <SettingsIcon />
    </S.Container>
  );
};

export default Header;
