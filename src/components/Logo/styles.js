import { styled } from "styled-components";


export const Container = styled.div`

    display: flex;
    align-items: center;

    gap: 1.1rem;
    cursor: default;
    
    h1 {
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        font-family: "Roboto", sans-serif;
        font-size: 3.8rem;
        font-weight: 700;

        white-space: nowrap;
    }

    img {
        width: 4.4rem;
        height: 4.4rem;
    }

    .admin-text {
        color: ${({ theme }) => theme.COLORS.BLUE_SKY};
        font-family: "Roboto", sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 160%;
        
        white-space: nowrap;
    }
`;
