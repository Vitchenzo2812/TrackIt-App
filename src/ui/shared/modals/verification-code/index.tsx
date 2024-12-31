import { poppins, sourceSans } from '@/styles/global';
import Typography from '../../atoms/typography';
import { useModals } from '../../context/modals/context';
import * as S from './styled';
import CodeInput from './components/code-input';

const VerificationCodeModal = () => {
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
            fontFamily={poppins.style.fontFamily}
            color="#2e2e2e"
            weight={700}
          >
            Enviamos um código para o seu Email
          </Typography>
          <Typography
            size={2.2}
            fontFamily={sourceSans.style.fontFamily}
            color="#2e2e2e"
            weight={400}
          >
            Da uma olhadinha lá e me conta qual é 😏
          </Typography>
        </S.WrapperTitleTexts>

        <S.WrapperInputs>
          <CodeInput />
          <Typography
            size={1.8}
            fontFamily={sourceSans.style.fontFamily}
            weight={400}
            color="#2e2e2e"
            textAlign="center"
          >
            Espere 45 segundos para pode reenviar o código...
          </Typography>
        </S.WrapperInputs>

        <S.SubmitButton>Enviar</S.SubmitButton>
      </S.Container>
    </S.GlobalContainer>
  );
};

export default VerificationCodeModal;
