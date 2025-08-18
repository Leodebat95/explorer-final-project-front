import { Container } from "./styles";

import { PiHeartStraightFill, PiHeartStraight } from "react-icons/pi";


export function ButtonHeart({ isFilled, onClick }) {

    return(
        <Container
            type="button"
            onClick={onClick}
            aria-label={isFilled ? 'Desfavoritar' : 'Favoritar'}
        >
            {
                isFilled 
                ? <PiHeartStraightFill className="heart-filled" /> 
                : <PiHeartStraight className="heart-stroke" />
            }
        </Container>
    );
};
