import { styled } from "styled-components";


export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLACK_BLUE_900};
  border-radius: 0.8rem;

  display: flex;
  align-items: center;

  &:focus-within {
    background: ${({ theme }) => theme.COLORS.BLUE_DARK};
  }

  input {
    background: transparent;
    border: 0;

    height: 4.8rem;
    width: 100%;
    padding: 0 1.8rem;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: "Roboto", sans-serif;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    white-space: nowrap;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  svg {
    background: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-left: 1.8rem;
  }
`;
