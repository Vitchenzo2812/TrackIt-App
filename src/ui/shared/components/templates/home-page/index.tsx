import { poppins } from '@/styles/global';
import Typography from '../../atoms/typography';
import Header from '../../molecules/header';
import * as S from './styled';
import SelectInput from '../../molecules/select-input';
import TaskPercentage from '../../molecules/task-percentage';
import ShowcaseTasks from '../../organisms/showcase-tasks';

const HomePage = () => {
  const username = 'Guilherme';

  return (
    <S.GlobalContainer>
      <S.ContainerHeader>
        <Header />
      </S.ContainerHeader>

      <S.Container>
        <S.WrapperTitleTexts>
          <Typography
            color="#2e2e2e"
            fontFamily={poppins.style.fontFamily}
            weight={600}
            size={5}
          >
            Bem Vindo{' '}
            <Typography
              color="#E9C46A"
              fontFamily={poppins.style.fontFamily}
              weight={600}
              size={5}
            >
              {username}
            </Typography>
            !
          </Typography>
          <Typography color="#2e2e2e" size={3.5} weight={400}>
            Sua{' '}
            <Typography color="#E76F51" size={3.5} weight={400}>
              rotina
            </Typography>
            , seus{' '}
            <Typography color="#F4A261" size={3.5} weight={400}>
              hábitos
            </Typography>
            , suas{' '}
            <Typography color="#36BA98" size={3.5} weight={400}>
              finanças
            </Typography>
            . Tudo em um só lugar!{' '}
          </Typography>
        </S.WrapperTitleTexts>

        <S.WrapperTaskSection>
          <SelectInput />

          <S.WrapperTaskContainers>
            <TaskPercentage />
            <ShowcaseTasks />
          </S.WrapperTaskContainers>
        </S.WrapperTaskSection>
      </S.Container>
    </S.GlobalContainer>
  );
};

export default HomePage;
