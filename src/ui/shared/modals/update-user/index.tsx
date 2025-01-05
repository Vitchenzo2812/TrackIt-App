import { poppins, sourceSans } from '@/styles/global';
import Typography from '../../atoms/typography';
import * as S from './styled';
import ModalInput from '../components/input';
import SubmitButton from '../components/submit-button';
import { useModals } from '../../context/modals/context';

const UpdateUserModal = () => {
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
            fontFamily={poppins.style.fontFamily}
            weight={700}
          >
            Só mais uma coisinha...
          </Typography>
          <Typography
            size={2}
            textAlign="center"
            fontFamily={sourceSans.style.fontFamily}
            weight={400}
            color="#2e2e2e"
            styles={{ width: '35rem' }}
          >
            Preciso de alguns dados para finalizar seu cadastro
          </Typography>
        </S.WrapperTitleTexts>

        <S.WrapperInputs>
          <S.ContainerInputWithTitle>
            <Typography
              size={2}
              weight={600}
              color="#2e2e2e"
              fontFamily={sourceSans.style.fontFamily}
            >
              Como gostaria que ser chamado?
            </Typography>

            <ModalInput placeholder="Insira seu nome" />
          </S.ContainerInputWithTitle>

          <S.ContainerInputWithTitle>
            <S.WrapperAmountTexts>
              <Typography
                color="#2e2e2e"
                size={2}
                fontFamily={sourceSans.style.fontFamily}
                weight={600}
              >
                Atualize seu Salário (opcional)
              </Typography>
              <Typography
                color="#848484"
                size={1.4}
                fontFamily={sourceSans.style.fontFamily}
                weight={500}
              >
                Quer ajudar a organizar suas finanças? Informe seu salário aqui!
                <br />
                Mas, se preferir, pode deixar em branco. A escolha é sua!
              </Typography>
            </S.WrapperAmountTexts>

            <ModalInput isAmountInput placeholder="0,00" />
          </S.ContainerInputWithTitle>
        </S.WrapperInputs>

        <SubmitButton label="Atualizar" onClick={() => {}} />
      </S.Container>
    </S.GlobalContainer>
  );
};

export default UpdateUserModal;
