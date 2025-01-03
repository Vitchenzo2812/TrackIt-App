import { poppins, sourceSans } from '@/styles/global';
import Typography from '../../atoms/typography';
import * as S from './styled';
import ModalInput from '../components/input';
import EmailIcon from '@/ui/icons/email';

const ForgetPasswordModal = () => {
  return (
    <S.GlobalContainer>
      <S.Container>
        <S.WrapperTitleTexts>
          <Typography
            size={2.5}
            color="#2e2e2e"
            weight={700}
            fontFamily={poppins.style.fontFamily}
          >
            Esqueceu sua senha?
          </Typography>
          <Typography
            size={2}
            color="#2e2e2e"
            weight={400}
            fontFamily={sourceSans.style.fontFamily}
          >
            Fica em paz! só precisamos do seu email
          </Typography>
        </S.WrapperTitleTexts>

        <S.WrapperEmailInput>
          <Typography size={1.8} color="#2e2e2e" weight={600}>
            Insira seu Email
          </Typography>
          <ModalInput
            placeholder="endereço de email"
            leftIcon={<EmailIcon />}
          />
        </S.WrapperEmailInput>

        <S.ContainerSubmitButton>
          <S.SubmitButton>Enviar código</S.SubmitButton>
        </S.ContainerSubmitButton>
      </S.Container>
    </S.GlobalContainer>
  );
};

export default ForgetPasswordModal;
