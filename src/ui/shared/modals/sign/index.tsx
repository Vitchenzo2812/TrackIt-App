import { useModals } from '../../context/modals/context';
import SignIn from './in';
import * as S from './styled';
import SignUp from './up';

interface SignProps {
  type: 'sign-in' | 'sign-up';
}

const Sign = ({ type }: SignProps) => {
  const { closeAll } = useModals((state) => state);

  return (
    <S.GlobalContainer
      onClick={() => {
        closeAll();
      }}
    >
      {type === 'sign-in' && <SignIn />}
      {type === 'sign-up' && <SignUp />}
    </S.GlobalContainer>
  );
};

export default Sign;
