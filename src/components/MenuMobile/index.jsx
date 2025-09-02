import { PiMagnifyingGlass, PiX } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useCustom } from "../../contexts/CustomPropsContext";

import { Container } from "./styles";

import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";



export function MenuMobile() {

  const { signOut } = useAuth();

  const { menuOpen, setMenuOpen } = useCustom();
  
  const navigate = useNavigate();
  

  function handleToNew() {

    setMenuOpen(!menuOpen);

    navigate("/new");
  };
  
  function handleSignOut() {
    
    navigate("/");

    signOut();
  };



  return(
    <Container menuOpen={menuOpen}>

      <div className="mob-header">
        <button type="button" id="btn-close" onClick={() => setMenuOpen(!menuOpen)}>
          <PiX />
          Menu
        </button>
      </div>

      <main>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlass}
        />

        <div className="btn-container">
          <ButtonText title="Novo prato" onClick={handleToNew} />
        </div>

        <div className="btn-container">
          <ButtonText title="Sair" onClick={handleSignOut} />
        </div>
      </main>

      <Footer />
    </Container>
  );
};
