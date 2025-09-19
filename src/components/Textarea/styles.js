import { styled } from "styled-components";


export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  background: ${({ theme }) => theme.COLORS.BLACK_BLUE_900};
  border-radius: 0.8rem;
  border: none;
  resize: none;   // Property de "Textarea" que permite o usuário aumentar/diminuir o tamanho da caixinha; "none" desativa ela

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  font-family: "Roboto", sans-serif;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;

  padding: 1.8rem;
  margin-bottom: 2.4rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &:focus-within {
    background: ${({ theme }) => theme.COLORS.BLUE_DARK};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  @media (width >= 768px) {
    border-radius: 0.5rem;
  }
`;
