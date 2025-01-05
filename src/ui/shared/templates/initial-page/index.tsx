import { poppins } from '@/styles/global';
import Typography from '../../atoms/typography';
import * as S from './styled';

const InitialPage = () => {
  return (
    <S.Container>
      <S.WrapperTitleSection>
        <Typography
          size={10}
          color="#2e2e2e"
          fontFamily={poppins.style.fontFamily}
          weight={600}
        >
          ITrackIt
        </Typography>
        <Typography size={4} color="#2e2e2e" weight={400}>
          Uma nova forma de manter seus hábitos e metas em dia.
        </Typography>
      </S.WrapperTitleSection>

      <S.WrapperButtons>
        <S.SignInButton>Entrar</S.SignInButton>
        <S.SignUpButton>Cadastrar</S.SignUpButton>
      </S.WrapperButtons>
    </S.Container>
  );
};

export default InitialPage;
