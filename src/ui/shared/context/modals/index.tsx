/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from 'react';
import { useModals } from './context';
import Sign from '../../modals/sign';

export type ModalIds = 'sign';

const ListModals: Record<ModalIds, any> = {
  sign: Sign,
};

const Modals = () => {
  const { modalId, data } = useModals((state) => state);

  if (!modalId) return;

  return createElement(ListModals[modalId], data);
};

export default Modals;
