import { Container } from "./styles";

import { PiHeartStraightFill, PiHeartStraight } from "react-icons/pi";


export function ButtonHeart({ isFilled, ...rest }) {

  return(
    <Container
      type="button"
      className="btn-heart"
      aria-label={isFilled ? 'Desfavoritar' : 'Favoritar'}
      {...rest}
    >
      {
        isFilled 
        ? <PiHeartStraightFill className="heart-filled" /> 
        : <PiHeartStraight className="heart-stroke" />
      }
    </Container>
  );
};
