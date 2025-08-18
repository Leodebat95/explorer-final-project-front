import { styled } from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled(Link)`
   height: 4.8rem;
   width: 100%;
   background-color: ${({ theme }) => theme.COLORS.RED_DARK};

   text-decoration: none;
   cursor: pointer;

   color: ${({ theme }) => theme.COLORS.WHITE_100};
   font-size: 1.4rem;
   font-weight: 500;

   display: flex;
   align-items: center;
   justify-content: center;

   border: 0;
   border-radius: 0.8rem;

   transition: filter 0.27s;

   &:hover {
      filter: brightness(0.85);
   }

   &:disabled {
      opacity: 0.5;
   }
`;
