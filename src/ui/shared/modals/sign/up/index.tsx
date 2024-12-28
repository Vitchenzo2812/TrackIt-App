import * as S from './styled';

const SignUp = () => {
  return (
    <S.Container
      onClick={(evt) => {
        evt.stopPropagation();
      }}
    ></S.Container>
  );
};

export default SignUp;
