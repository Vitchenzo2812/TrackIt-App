import EmailIcon from '@/ui/icons/email';
import ModalInput from '../../components/input';
import * as S from './styled';
import PasswordIcon from '@/ui/icons/password';
import ClosedEyeIcon from '@/ui/icons/closed-eye';
import Typography from '@/ui/shared/atoms/typography';
import { poppins, sourceSans } from '@/styles/global';

const SignIn = () => {
  return (
    <S.Container
      onClick={(evt) => {
        evt.stopPropagation();
      }}
    >
      <S.WrapperFirstSection>
        <S.WrapperFirstSectionTexts>
          <Typography
            size={2.5}
            fontFamily={poppins.style.fontFamily}
            weight={700}
            color="#2e2e2e"
          >
            Bem-vindo de volta ao ITrackIt!
          </Typography>
          <Typography
            size={2.2}
            fontFamily={sourceSans.style.fontFamily}
            weight={400}
          >
            Hora de retomar o controle da sua rotina.
          </Typography>
        </S.WrapperFirstSectionTexts>

        <S.Line />
      </S.WrapperFirstSection>

      <S.WrapperSignUpTexts>
        <S.SignUpText>
          Ainda não tem uma conta?
          <br />
          <S.SignUpText color="#229C7C" clickable>
            Cadastre-se aqui
          </S.SignUpText>{' '}
          e comece a organizar sua vida.
        </S.SignUpText>
      </S.WrapperSignUpTexts>

      <S.WrapperEmailInput>
        <Typography size={1.8} color="#2e2e2e" weight={600}>
          Email
        </Typography>
        <ModalInput placeholder="endereço de email" leftIcon={<EmailIcon />} />
      </S.WrapperEmailInput>

      <S.WrapperPasswordInput>
        <Typography size={1.8} color="#2e2e2e" weight={600}>
          Senha
        </Typography>
        <ModalInput
          placeholder=""
          leftIcon={<PasswordIcon />}
          rightIcon={<ClosedEyeIcon />}
        />
        <S.ForgetPasswordText>
          Esqueceu sua senha?
          <S.ForgetPasswordText color="#229C7C">
            {' '}
            Clique aqui
          </S.ForgetPasswordText>
        </S.ForgetPasswordText>
      </S.WrapperPasswordInput>

      <S.ContainerSubmitButton>
        <S.SubmitButton>Entrar</S.SubmitButton>
      </S.ContainerSubmitButton>
    </S.Container>
  );
};

export default SignIn;
