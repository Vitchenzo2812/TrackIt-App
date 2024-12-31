import { useModals } from '@/ui/shared/context/modals/context';

const App = () => {
  const { open, modalId } = useModals((state) => state);

  return (
    !modalId && (
      <button
        onClick={() => {
          open('verification-code');
        }}
      >
        Abrir modal
      </button>
    )
  );
};

export default App;
