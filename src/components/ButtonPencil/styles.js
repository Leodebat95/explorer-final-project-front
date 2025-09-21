import { styled } from "styled-components";


export const Container = styled.button`

  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  display: flex;
  align-items: center;

  transform: scale(1.5);
  height: 1.4rem;
  width: fit-content;
  border-radius: 50%;

  appearance: none;
  background: none;
  border: none;
  cursor: pointer;

  .pencil {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.COLORS.YELLOW};
      transform: scale(1.2);
    }
  }
`;
