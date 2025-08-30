import { useAuth } from "../../hooks/auth";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";
import logoBlue from "../../assets/hexagon.svg";



export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const { signIn } = useAuth();
  

  function handleSignIn() {
    signIn({ email, password });
  };

  function handleToSignUp() {
    navigate("/register");
  };
  


  return(
    <Container>
      <Logo logoSymbol={logoBlue} />

      <Form>
        <label htmlFor="inp-email">Email</label>
        <Input
          id="inp-email"
          name="login-account-email"
          placeholder="Ex: nome@email.com"
          type="text"
          onChange={ event => setEmail(event.target.value)}
        />

        <label htmlFor="inp-psw">Senha</label>
        <Input
          id="inp-psw"
          name="login-account-password"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={ event => setPassword(event.target.value)}
        />

        <Button title="Entrar" id="btn-access-account" onClick={handleSignIn} />

        <div className="btn-text-container">
          <ButtonText title="Criar uma conta" id="btn-to-signup" onClick={handleToSignUp} />
        </div>
      </Form>
    </Container>
  );
};
