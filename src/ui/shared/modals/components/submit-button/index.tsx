import { CSSProperties } from 'styled-components';
import * as S from './styled';

interface Props {
  label: string;
  onClick: () => void;
  styles?: CSSProperties;
}

const SubmitButton = ({ label, onClick, styles }: Props) => {
  return (
    <S.ContainerSubmitButton style={styles}>
      <S.SubmitButton onClick={onClick}>{label}</S.SubmitButton>
    </S.ContainerSubmitButton>
  );
};

export default SubmitButton;
