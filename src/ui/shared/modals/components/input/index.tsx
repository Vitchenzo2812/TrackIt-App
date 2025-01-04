import { ReactElement } from 'react';
import * as S from './styled';

interface Props {
  isAmountInput?: boolean;
  placeholder: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

const ModalInput = ({
  isAmountInput = false,
  placeholder,
  leftIcon,
  rightIcon,
}: Props) => {
  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formatted = numericValue.replace(/^(\d+)(\d{2})$/, '$1,$2');
    return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAmountInput) return;

    const value = e.target.value;
    const formattedValue = formatCurrency(value);
    e.target.value = formattedValue;
  };

  return (
    <S.Container>
      {leftIcon}
      {isAmountInput && <S.AmountLabel>R$</S.AmountLabel>}
      <S.Input
        type="text"
        placeholder={placeholder}
        onChange={handleAmountInput}
      />
      {rightIcon}
    </S.Container>
  );
};

export default ModalInput;
