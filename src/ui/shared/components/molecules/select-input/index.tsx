import ArrowDownIcon from '@/ui/icons/arrow-down';
import Typography from '../../atoms/typography';
import * as S from './styled';
import { useRef, useState } from 'react';
import Dropdown from '../../atoms/dropdown';
import { useClickOutside } from '../../../hooks/use-click-outside';

const groups = [
  'Grupo de Tarefas 1',
  'Grupo de Tarefas 2',
  'Grupo de Tarefas 3',
];

const SelectInput = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  const items = [
    {
      label: 'teste 1',
      onClick: () => {},
    },
    {
      label: 'teste 2',
      onClick: () => {},
    },
    {
      label: 'teste 3',
      onClick: () => {},
    },
    {
      label: 'teste 3',
      onClick: () => {},
    },
    {
      label: 'teste 3',
      onClick: () => {},
    },
    {
      label: 'teste 3',
      onClick: () => {},
    },
    {
      label: 'teste 3',
      onClick: () => {},
    },
  ];

  return (
    <S.Container>
      <S.WrapperItemIcon
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Typography
          size={2.5}
          color="#2e2e2e"
          weight={600}
          onClick={() => void 0}
          maxWidth="19.365rem"
        >
          {groups[0]}
        </Typography>

        <ArrowDownIcon />
      </S.WrapperItemIcon>

      {isOpen && <Dropdown ref={dropdownRef} items={items} />}
    </S.Container>
  );
};

export default SelectInput;
