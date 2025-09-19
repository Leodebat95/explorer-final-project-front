import { Container } from "./styles";

import { PiPencilSimple } from "react-icons/pi";


export function ButtonPencil({ ...rest }) {

  return(
    <Container
      type="button"
      className="btn-pencil"
      aria-label="Editar"
      {...rest}
    >
      {<PiPencilSimple className="pencil" />}
    </Container>
  );
};
