import Typography from '@/ui/shared/components/atoms/typography';
import * as S from './styled';
import { poppins, sourceSans } from '@/styles/global';
import ModalInput from '../../components/input';
import EmailIcon from '@/ui/icons/email';
import PasswordIcon from '@/ui/icons/password';
import ClosedEyeIcon from '@/ui/icons/closed-eye';
import PasswordTags from '@/ui/shared/components/molecules/password-tags';
import SubmitButton from '../../components/submit-button';

const SignUp = () => {
  return (
    <S.Container
      onClick={(evt) => {
        evt.stopPropagation();
      }}
    >
      <S.WrapperFirstSection>
        <S.WrapperFirstSectionTexts>
          <Typography
            as="h1"
            size={2.5}
            fontFamily={poppins.style.fontFamily}
            weight={700}
            color="#2e2e2e"
          >
            Crie sua conta em segundos!
          </Typography>
          <Typography
            size={2.2}
            fontFamily={sourceSans.style.fontFamily}
            weight={400}
            textAlign="center"
            lineHeight={2.8}
          >
            Sem complicação, só o essencial para você
            <br />
            começar a organizar sua rotina.
          </Typography>
        </S.WrapperFirstSectionTexts>

        <S.Line />
      </S.WrapperFirstSection>

      <S.WrapperAllInputs>
        <S.WrapperEmailInput>
          <S.WrapperInputTexts>
            <Typography
              size={2}
              weight={600}
              fontFamily={sourceSans.style.fontFamily}
              color="#2e2e2e"
            >
              Qual é seu Email?
            </Typography>
            <Typography
              size={1.5}
              weight={500}
              fontFamily={sourceSans.style.fontFamily}
              color="#848484"
            >
              Apenas para podermos manter contato.
            </Typography>
          </S.WrapperInputTexts>

          <ModalInput
            leftIcon={<EmailIcon />}
            placeholder="exemplo@gmail.com"
          />
        </S.WrapperEmailInput>

        <S.WrapperPasswordInput>
          <S.WrapperInputTexts>
            <Typography
              size={2}
              weight={600}
              fontFamily={sourceSans.style.fontFamily}
              color="#2e2e2e"
            >
              Crie sua senha
            </Typography>
            <Typography
              size={1.5}
              weight={500}
              fontFamily={sourceSans.style.fontFamily}
              color="#848484"
            >
              Escolha uma senha que só você saiba.
            </Typography>
          </S.WrapperInputTexts>

          <ModalInput
            placeholder=""
            leftIcon={<PasswordIcon />}
            rightIcon={<ClosedEyeIcon />}
          />

          <PasswordTags />
        </S.WrapperPasswordInput>

        <S.WrapperRepeatPasswordInput>
          <S.WrapperInputTexts>
            <Typography
              size={2}
              weight={600}
              fontFamily={sourceSans.style.fontFamily}
              color="#2e2e2e"
            >
              Repita a senha
            </Typography>
            <Typography
              size={1.5}
              weight={500}
              fontFamily={sourceSans.style.fontFamily}
              color="#848484"
            >
              Foi mal fazer você escrever novamente, é só pra ter certeza :)
            </Typography>
          </S.WrapperInputTexts>

          <ModalInput
            placeholder=""
            leftIcon={<PasswordIcon />}
            rightIcon={<ClosedEyeIcon />}
          />
        </S.WrapperRepeatPasswordInput>
      </S.WrapperAllInputs>

      <SubmitButton
        label="Cadastrar"
        onClick={() => {}}
        styles={{ paddingTop: '1.9rem' }}
      />
    </S.Container>
  );
};

export default SignUp;
