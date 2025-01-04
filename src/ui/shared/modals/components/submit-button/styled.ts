import styled from 'styled-components';

export const ContainerSubmitButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button<{
  buttonColor: string;
  labelColor: string;
}>`
  width: 16rem;
  height: 5.5rem;
  background-color: ${(props) => props.buttonColor};
  border-radius: 1rem;
  color: ${(props) => props.labelColor};
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  filter: drop-shadow(0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
  border: 0.2rem solid #f4f4f4;
`;
