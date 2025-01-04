import { CSSProperties } from 'styled-components';
import * as S from './styled';

interface Props {
  label: string;
  buttonColor: string;
  labelColor?: string;
  onClick: () => void;
  styles?: CSSProperties;
}

const SubmitButton = ({
  label,
  buttonColor,
  labelColor = '#2e2e2e',
  onClick,
  styles,
}: Props) => {
  return (
    <S.ContainerSubmitButton style={styles}>
      <S.SubmitButton
        buttonColor={buttonColor}
        labelColor={labelColor}
        onClick={onClick}
      >
        {label}
      </S.SubmitButton>
    </S.ContainerSubmitButton>
  );
};

export default SubmitButton;
