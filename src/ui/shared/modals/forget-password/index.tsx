import { poppins, sourceSans } from '@/styles/global';
import Typography from '../../atoms/typography';
import * as S from './styled';
import ModalInput from '../components/input';
import EmailIcon from '@/ui/icons/email';
import SubmitButton from '../components/submit-button';
import { useModals } from '../../context/modals/context';

const ForgetPasswordModal = () => {
  const { closeAll } = useModals((state) => state);

  return (
    <S.GlobalContainer
      onClick={() => {
        closeAll();
      }}
    >
      <S.Container
        onClick={(evt) => {
          evt.stopPropagation();
        }}
      >
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
          <Typography
            size={2}
            color="#2e2e2e"
            weight={600}
            fontFamily={sourceSans.style.fontFamily}
          >
            Insira seu Email
          </Typography>
          <ModalInput
            placeholder="endereço de email"
            leftIcon={<EmailIcon />}
          />
        </S.WrapperEmailInput>

        <SubmitButton
          label="Enviar código"
          buttonColor="#e9c46a"
          onClick={() => {}}
        />
      </S.Container>
    </S.GlobalContainer>
  );
};

export default ForgetPasswordModal;
