import { useState } from "react";

import { api } from "../../services/api";

import { Link, useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";
import logoBlue from "../../assets/hexagon.svg";



export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleSignUp() {

    if(!name || !email || !password) {

      return alert("Preencha todos os campos!");
    };

    api.post('/users', { name, email, password })
    
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        navigate('/');
      })

      .catch( error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível cadastrar.');
        }
      });
  };



  return(
    <Container>
      <Logo logoSymbol={logoBlue} />

      <Form>
        <label htmlFor="inp-name">Nome</label>
        <Input
          id="inp-name"
          name="created-account-name"
          placeholder="Nome"
          type="text"
          onChange={event => setName(event.target.value)}
        />

        <label htmlFor="inp-email">Email</label>
        <Input
          id="inp-email"
          name="created-account-email"
          placeholder="Ex: nome@email.com"
          type="text"
          onChange={event => setEmail(event.target.value)}
        />

        <label htmlFor="inp-psw">Senha</label>
        <Input
          id="inp-psw"
          name="created-account-password"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={event => setPassword(event.target.value)}
        />

        <Link>
          <Button title="Criar conta" id="btn-create-account" onClick={handleSignUp} />
        </Link>

        <Link to="/" id="btn-text-container">
          <ButtonText title="Já tenho uma conta"/>
        </Link>
      </Form>
    </Container>
  );
};
