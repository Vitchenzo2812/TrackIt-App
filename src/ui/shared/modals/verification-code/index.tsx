import { poppins, sourceSans } from '@/styles/global';
import Typography from '../../components/atoms/typography';
import { useModals } from '../../context/modals/context';
import * as S from './styled';
import CodeInput from './components/code-input';
import { useEffect, useState } from 'react';

type TitleAndSubtitleType = {
  title: string;
  subtitle: string;
};

const verificationCodeTexts: Record<
  S.VerificationCodeType | 'default',
  TitleAndSubtitleType
> = {
  default: {
    title: 'Enviamos um código para o seu Email',
    subtitle: 'Da uma olhadinha lá e me conta qual é 😏',
  },

  rightCode: {
    title: 'Ufa!',
    subtitle: 'Deu tudo certo, ta liberado!',
  },

  wrongCode: {
    title: 'Vish...',
    subtitle: 'Tem algum número errado ai viu!',
  },
};

const VerificationCodeModal = () => {
  const { closeAll } = useModals((state) => state);
  const [timer, setTimer] = useState<number>(45);

  const variant = undefined;

  useEffect(() => {
    if (!timer) return;

    const timerInterval = setInterval(() => setTimer((old) => old - 1), 1000);

    return () => clearInterval(timerInterval);
  }, [timer]);

  return (
    <S.GlobalContainer
      onClick={() => {
        closeAll();
      }}
    >
      <S.Container
        variant={variant}
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
            {verificationCodeTexts[variant ?? 'default'].title}
          </Typography>
          <Typography
            size={2.2}
            fontFamily={sourceSans.style.fontFamily}
            color="#2e2e2e"
            weight={400}
          >
            {verificationCodeTexts[variant ?? 'default'].subtitle}
          </Typography>
        </S.WrapperTitleTexts>

        <S.WrapperInputs>
          <CodeInput variant={variant} />
          {!timer && (
            <S.ResendCodeButton variant={variant}>
              Reenviar o código
            </S.ResendCodeButton>
          )}
          {!!timer && (
            <Typography
              size={1.8}
              fontFamily={sourceSans.style.fontFamily}
              weight={400}
              color="#2e2e2e"
              textAlign="center"
            >
              Espere {timer} segundos para pode reenviar o código...
            </Typography>
          )}
        </S.WrapperInputs>

        <S.SubmitButton variant={variant}>Enviar</S.SubmitButton>
      </S.Container>
    </S.GlobalContainer>
  );
};

export default VerificationCodeModal;
