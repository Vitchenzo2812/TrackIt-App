/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from 'react';
import { useModals } from './context';

export type ModalIds = 'sign-in' | 'sign-up';

const ListModals: Record<ModalIds, any> = {
  'sign-in': <></>,
  'sign-up': <></>,
};

const Modals = () => {
  const { modalId, modals, data } = useModals((state) => state);

  if (!modalId || !modals.length) return;

  for (const modal in modals) {
    return createElement(ListModals[modal as ModalIds], data);
  }
};

export default Modals;
