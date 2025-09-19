import { Children } from "react";
import { Container } from "./styles";


export function Textarea({ value, ...rest }) {

  return(
    <Container
      className="textarea" {...rest}
      value={value}
    >
    </Container>
  );
};
