import { Container } from "./styles";
import { PiPlusBold, PiXBold } from "react-icons/pi";


export function IngredientItem({ isNew, value, onClick, ...rest }) {

	return(
		<Container isNew={isNew} >
			<input 
				type="text"
				placeholder="Adicionar"
				value={value}
				readOnly={!isNew}
				{...rest}
			/>

			<button
				type="button"
				onClick={onClick}
				className={isNew ? "btn-add" : "btn-delete"}
			>
				{isNew ? <PiPlusBold /> : <PiXBold /> }
			</button>
		</Container>
	);
};
