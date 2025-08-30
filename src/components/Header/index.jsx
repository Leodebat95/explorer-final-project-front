import { Container } from "./styles";

import { Link } from "react-router-dom";

import { PiReceipt } from "react-icons/pi";
import { PiList } from "react-icons/pi";

import { Logo } from "../Logo";
import blueSymbol from "../../assets/hexagon.svg";


export function Header() {

	return(
		<Container className="header-container">
			<Link to="/profile">
				<button
					type="button"
					id="btn-header-menu"
				>
					<PiList id="svg-header-menu"/>
				</button>
			</Link>

			<Logo logoSymbol={blueSymbol} />

			<div id="header-receipt-container">
				<div className="red-ball">2</div>

				<PiReceipt id="svg-header-receipt"/>
			</div>
		</Container>
	);
};
