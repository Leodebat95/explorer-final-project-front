import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { PiMagnifyingGlass, PiX } from "react-icons/pi";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

import { ContainerMenu, Container, Form, Avatar } from "./styles";

import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";



export function Profile() {

  const { user, updateProfile } = useAuth()
  
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const navigate = useNavigate()


  const [avatarFile, setAvatarFile] = useState(null)
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)


  async function handleUpdate() {

    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)
    
    await updateProfile({ user: userUpdated, avatarFile })
  }


  function handleChangeAvatar(event) {

    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)

    setAvatar(imagePreview)
  }
  

  function handleBack() {

    navigate(-1)
  }



  return(
    <ContainerMenu>
      <header>
        <button type="button" id="btn-close">
          <PiX />
          Menu
        </button>
      </header>

      <main>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlass}
        />

        <div className="btn-container">
          <ButtonText title="Novo prato" />
        </div>

        <div className="btn-container">
          <ButtonText title="Sair" />
        </div>
      </main>

      <Footer />

      {/* <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={ e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={ e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={ e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={ e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form> */}
    </ContainerMenu>
  );
};
