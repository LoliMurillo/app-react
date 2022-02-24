
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { GrupoInput, IconoValidacion, LeyendaError } from "./Form";


const ComponenteInput = ({ estado, cambiarEstado, type, label, placeholder, name, leyendaError, expresionRegular, funcion }) => {
	const onChange = (event) => {
		cambiarEstado({ ...estado, campo: event.target.value });
	};

	const validacion = () => {
		if (expresionRegular) {
			if (expresionRegular.test(estado.campo)) {
				cambiarEstado({ ...estado, valido: "true" });
			} else {
				cambiarEstado({ ...estado, valido: "false" });
			}
		}

		if (funcion) {
			funcion();
		}
	}



	return (
		<div>
			<Label htmlFor={name} valido={estado.valido}>{label}</Label>
			<GrupoInput>
				<Input
					type={type}
					placeholder={placeholder}
					id={name}
					value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
				/>


				<IconoValidacion
					icon={estado.valido === "true" ? faCheckCircle : faCheckCircle}
					valido={estado.valido}
				/>
			</GrupoInput>
			<LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
		</div >
	);

};
export default ComponenteInput;