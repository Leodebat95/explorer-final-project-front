import { useState } from "react";

import { PiReceipt } from "react-icons/pi";
import { PiList } from "react-icons/pi";

import { Container } from "./styles";

import { useCustom } from "../../contexts/CustomPropsContext";

import { Logo } from "../Logo";
import blueSymbol from "../../assets/hexagon.svg";



export function Header() {

	const { menuOpen, setMenuOpen } = useCustom();
	
	const { receiptCounter, setReceiptCounter } = useCustom();


	return(
		<Container
			className="header-container"
			styleReceipt={receiptCounter}
		>
			<header>
				<button
					type="button"
					id="btn-header-menu"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<PiList id="svg-header-menu"/>
				</button>

				<Logo logoSymbol={blueSymbol} />

				<div id="header-receipt-container">
					<div className="red-ball">
						{receiptCounter}
					</div>

					<PiReceipt id="svg-header-receipt"/>
				</div>
			</header>

		</Container>
	);
};
