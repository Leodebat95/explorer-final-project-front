import { Container } from "./styles";


export function Textarea({ value, ...rest }) {

  return(
    <Container className="textarea" {...rest}>
      {value}
    </Container>
  );
};
