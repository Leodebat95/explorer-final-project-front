import { styled } from "styled-components";


export const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  font-size: 1.4rem;
  font-weight: 500;

  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.COLORS.BLUE_SKY};
  }
`;
