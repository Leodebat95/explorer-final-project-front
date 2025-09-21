import { useNavigate } from "react-router-dom";

import { PiReceipt, PiList, PiSignOut, PiMagnifyingGlass } from "react-icons/pi";

import { Container } from "./styles";

import { useAuth } from "../../hooks/auth";
import { useCustom } from "../../contexts/CustomPropsContext";

import { Button } from "../Button";
import { Input } from "../Input";
import { Logo } from "../Logo";
import blueSymbol from "../../assets/hexagon.svg";



export function Header({ onChange }) {

	const { signOut, isAdmin } = useAuth();

	const { menuOpen, setMenuOpen } = useCustom();

	const { receiptCounter, setReceiptCounter } = useCustom();


	const navigate = useNavigate();


  function handleShopItem() {

    if(receiptCounter === 0) {
      alert("Escolha pelo menos 1 item para continuar");

      return;
    }

    if (!confirm("Deseja finalizar o pedido?")) {
      return;
    };

    setReceiptCounter(0);

    navigate("/");

    window.location.reload();    
  };


  function handleToNew() {

    navigate("/new");
  };
  
  function handleSignOut() {
    
    navigate("/");

    signOut();
  };



	return(
		<Container
			className="header-container"
			styleReceipt={receiptCounter}
			isAdmin={isAdmin()}
		>
			<header>
				{window.innerWidth < 768 &&
					<button
						type="button"
						id="btn-header-menu"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<PiList id="svg-header-menu"/>
					</button>
				}

				{isAdmin() &&
					<Logo
						logoSymbol={blueSymbol}
						isAdmin={true}
					/>
				}

				{!isAdmin() &&
					<Logo
						logoSymbol={blueSymbol}
						isAdmin={false}
					/>
				}

				{window.innerWidth >= 768 &&
					<Input
						onChange={onChange}
						icon={PiMagnifyingGlass}
						placeholder={window.innerWidth <= 1140
							? "Busque por pratos"
							: "Busque por pratos ou ingredientes"
						}
					/>
				}

				{(!isAdmin() && window.innerWidth < 768) &&
					<div id="header-receipt-container">
						<div className="red-ball">
							{receiptCounter}
						</div>

						<PiReceipt id="svg-header-receipt"/>
					</div>
				}

				{(isAdmin() && window.innerWidth >= 768) &&
					<Button
						id="btn-new-dish"
						title="Novo prato"
						onClick={handleToNew}
					/>
				}

				{(!isAdmin() && window.innerWidth >= 768) &&
					<Button
						id="btn-orders"
						icon={PiReceipt}
						title={`Pedidos (${receiptCounter})`}
						onClick={handleShopItem}
					/>
				}

				{window.innerWidth >= 768 &&
					<Button
						id="btn-sign-out"
						icon={PiSignOut}
						onClick={handleSignOut}
					/>
				}
			</header>

		</Container>
	);
};
