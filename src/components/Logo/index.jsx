import { Container } from "./styles";


export function Logo({ logoSymbol, isAdmin }) {

  return(
    <Container className="logo">
      <div className="logotype-container">
        <img 
          src={logoSymbol} 
          alt="Símbolo do logotipo do food explorer"
        />

        <h1>food explorer</h1>
      </div>

      <p className="admin-text">
        { isAdmin ? "admin" : "" }
      </p>
    </Container>    
  );
};
