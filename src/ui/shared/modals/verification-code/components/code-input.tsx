import { createRef, useEffect } from 'react';
import * as S from './styled';
import { VerificationCodeType } from '../styled';
import React from 'react';

interface Props {
  variant?: VerificationCodeType;
}

const CodeInput = ({ variant }: Props) => {
  const refs = Array.from({ length: 6 }).map(() =>
    createRef<HTMLInputElement>()
  );

  useEffect(() => {
    if (!refs.length || !refs[0].current) return;

    refs[0].current.focus();
  }, [refs]);

  return (
    <S.Container>
      {refs.map((ref, index) => (
        <S.InputNumber
          key={index}
          ref={ref}
          variant={variant}
          placeholder="0"
          type="text"
          maxLength={1}
          pattern="[0-9]"
          onKeyDown={(e) => {
            const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];

            if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
              e.preventDefault();
            }

            if (e.key === 'Backspace' && !ref.current?.value) {
              e.preventDefault();
              refs[index - 1]?.current?.focus();
            }
          }}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            e.target.value = value;

            const nextInput = refs[index + 1]?.current;

            if (!value || !nextInput || !!nextInput?.value) return;

            nextInput?.focus();
          }}
        />
      ))}
    </S.Container>
  );
};

export default React.memo(CodeInput);
