/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from 'react';
import { useModals } from './context';
import Sign from '../../modals/sign';
import VerificationCodeModal from '../../modals/verification-code';

export type ModalIds = 'sign' | 'verification-code';

const ListModals: Record<ModalIds, any> = {
  sign: Sign,
  'verification-code': VerificationCodeModal,
};

const Modals = () => {
  const { modalId, data } = useModals((state) => state);

  if (!modalId) return;

  return createElement(ListModals[modalId], data);
};

export default Modals;
