import { Container } from "./styles";

import { Logo } from "../Logo";
import logoGray from "../../assets/hexagon-gray.svg";


export function Footer() {

	return(
		<Container className="footer-container">
			<Logo logoSymbol={logoGray} />

			<p>© 2023 - Todos os direitos reservados.</p>
		</Container>
	);
};
