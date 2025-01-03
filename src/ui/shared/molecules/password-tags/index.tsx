import PasswordTag from '../../atoms/password-tag';
import * as S from './styled';

const PasswordTags = () => {
  return (
    <S.Container>
      <PasswordTag isRight={true} text="No mínimo 8 caracteres" />
      <PasswordTag isRight={false} text="Um caractere minúsculo" />
      <PasswordTag isRight={false} text="No mínimo 1 dígito" />
      <PasswordTag isRight={false} text="Um caractere maiúsculo" />
      <PasswordTag isRight={false} text="No mínimo 1 caracter especial" />
    </S.Container>
  );
};

export default PasswordTags;
