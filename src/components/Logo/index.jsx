import { Container } from "./styles";


export function Logo({ logoSymbol, isAdmin }) {

  return(
    <Container className="logo">
      <img 
        src={logoSymbol} 
        alt="Símbolo do logotipo do food explorer"
      />

      <h1>food explorer</h1>

      <p className="admin-text">
        { isAdmin ? "admin" : "" }
      </p>
    </Container>    
  );
};
