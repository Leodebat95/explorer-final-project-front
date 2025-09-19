import { styled } from "styled-components";


export const Container = styled.div`

  background: ${({ theme }) => theme.COLORS.BLACK_BLUE_1000};
  width: fit-content;

  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  cursor: default;

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  font-weight: 500;
  
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
