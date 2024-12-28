import EmailIcon from '@/ui/icons/email';
import SignInput from '../components/input';
import * as S from './styled';
import PasswordIcon from '@/ui/icons/password';
import ClosedEyeIcon from '@/ui/icons/closed-eye';

const SignIn = () => {
  return (
    <S.Container
      onClick={(evt) => {
        evt.stopPropagation();
      }}
    >
      <S.WrapperFirstSection>
        <S.WrapperFirstSectionTexts>
          <S.Title>Bem-vindo de volta ao ITrackIt!</S.Title>
          <S.Description>
            Hora de retomar o controle da sua rotina.
          </S.Description>
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
        <S.TitleInput>Email</S.TitleInput>
        <SignInput placeholder="endereço de email" leftIcon={<EmailIcon />} />
      </S.WrapperEmailInput>

      <S.WrapperPasswordInput>
        <S.TitleInput>Senha</S.TitleInput>
        <SignInput
          placeholder=""
          leftIcon={<PasswordIcon />}
          rightIcon={<ClosedEyeIcon />}
        />
        <S.ForgetPasswordText>Esqueceu sua senha?</S.ForgetPasswordText>
      </S.WrapperPasswordInput>

      <S.ContainerSubmitButton>
        <S.SubmitButton>Entrar</S.SubmitButton>
      </S.ContainerSubmitButton>
    </S.Container>
  );
};

export default SignIn;
