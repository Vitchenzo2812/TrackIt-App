/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from 'react';
import { useModals } from './context';
import Sign from '../../modals/sign';
import VerificationCodeModal from '../../modals/verification-code';
import ForgetPasswordModal from '../../modals/forget-password';
import NewPasswordModal from '../../modals/new-password';

export type ModalIds =
  | 'sign'
  | 'verification-code'
  | 'forget-password'
  | 'new-password';

const ListModals: Record<ModalIds, any> = {
  sign: Sign,
  'verification-code': VerificationCodeModal,
  'forget-password': ForgetPasswordModal,
  'new-password': NewPasswordModal,
};

const Modals = () => {
  const { modalId, data } = useModals((state) => state);

  if (!modalId) return;

  return createElement(ListModals[modalId], data);
};

export default Modals;
