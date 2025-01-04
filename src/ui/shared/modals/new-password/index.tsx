import { poppins, sourceSans } from '@/styles/global';
import Typography from '../../atoms/typography';
import * as S from './styled';
import ModalInput from '../components/input';
import PasswordIcon from '@/ui/icons/password';
import ClosedEyeIcon from '@/ui/icons/closed-eye';
import PasswordTags from '../../molecules/password-tags';
import { useModals } from '../../context/modals/context';
import SubmitButton from '../components/submit-button';

const NewPasswordModal = () => {
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
        <S.WrapperFirstSection>
          <S.WrapperFirstSectionTexts>
            <Typography
              size={2.5}
              color="#2e2e2e"
              fontFamily={poppins.style.fontFamily}
              weight={700}
            >
              Hora de uma nova senha!
            </Typography>
            <Typography
              size={2.2}
              color="#2e2e2e"
              fontFamily={sourceSans.style.fontFamily}
              weight={400}
            >
              Segurança em primeiro lugar.
            </Typography>
          </S.WrapperFirstSectionTexts>

          <S.Line />
        </S.WrapperFirstSection>

        <S.WrapperPasswordInput>
          <S.WrapperInputTexts>
            <Typography
              size={2}
              weight={600}
              fontFamily={sourceSans.style.fontFamily}
              color="#2e2e2e"
            >
              Escolha uma nova senha
            </Typography>
            <Typography
              size={1.5}
              weight={500}
              fontFamily={sourceSans.style.fontFamily}
              color="#848484"
            >
              Algo que só você vai lembrar, mas que seja forte.
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
              Confirme a nova senha
            </Typography>
            <Typography
              size={1.5}
              weight={500}
              fontFamily={sourceSans.style.fontFamily}
              color="#848484"
            >
              Só para garantir que está tudo certo.
            </Typography>
          </S.WrapperInputTexts>

          <ModalInput
            placeholder=""
            leftIcon={<PasswordIcon />}
            rightIcon={<ClosedEyeIcon />}
          />
        </S.WrapperRepeatPasswordInput>

        <SubmitButton
          label="Alterar senha"
          buttonColor="#e9c46a"
          onClick={() => {}}
          styles={{ paddingTop: '4.5rem' }}
        />
      </S.Container>
    </S.GlobalContainer>
  );
};

export default NewPasswordModal;
