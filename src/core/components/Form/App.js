
import { useState } from "react";
import {
	Formulario, Label, ContenedorBotonCentrado,
	ContenedorTerminos, Boton,
	MensajeError, MensajeExito
} from "./elements/Form";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopCircle } from "@fortawesome/free-regular-svg-icons";
import Input from "./components/Input";



const App = () => {
	const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
	const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
	const [password, cambiarPassword] = useState({ campo: "", valido: null });
	const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
	const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
	const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);


	const expresiones = {
		usuario: /^[a-zA-Z0-9-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	};

	const validarPassword2 = () => {
		if (password.campo.length > 0) {
			if (password.campo !== password2.campo) {
				cambiarPassword2((prevState) => {
					return { ...prevState, valido: "false" };
				});
			} else {
				cambiarPassword2((prevState) => {
					return { ...prevState, valido: "true" };
				});
			}
		}
	};

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (
			usuario.valido === "true" &&
      nombre.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      terminos
		) {
			cambiarFormularioValido(true);
			cambiarUsuario({ campo: "", valido: "" });
			cambiarNombre({ campo: "", valido: null });
			cambiarPassword({ campo: "", valido: null });
			cambiarPassword2({ campo: "", valido: "null" });
			cambiarCorreo({ campo: "", valido: null });
			cambiarTelefono({ campo: "", valido: null });


		} else {
			cambiarFormularioValido(false);
		}
	};



	return (
		<main>
			<Formulario action="" onSubmit={onSubmit}>

				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					type="text"
					label="Nombre"
					placeholder="Nombre"
					name="name"
					leyendaError="El nombre solo puede contener letras"
					expresionRegular={expresiones.nombre}
				/>

				<Input
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					type="text"
					label="Usuario"
					placeholder="Usuario"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener números y letras"
					expresionRegular={expresiones.usuario}
				/>

				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					type="text"
					label="Correo"
					placeholder="Correo"
					name="correo"
					leyendaError="Introduce un correo válido"
					expresionRegular={expresiones.correo}
				/>

				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					type="password"
					label="Contraseña"
					placeholder="Contraseña"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos"
					expresionRegular={expresiones.password}
				/>

				<Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					type="password"
					label="Repetir Contraseña"
					placeholder="Contraseña"
					leyendaError="Las contraseñas deben ser iguales"
					funcion={validarPassword2}
				/>

				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					type="telefono"
					label="Teléfono"
					placeholder="Teléfono"
					leyendaError="El Télefono solo puede contener números"
					expresionRegular={expresiones.telefono}
				/>


				<ContenedorTerminos>
					<Label>
						<input
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos}
							onChange={onChangeTerminos}
						/>
            Acepto los Terminos y Condiciones
					</Label>
				</ContenedorTerminos>

				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faStopCircle} />
						<b>Error</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}


				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>El Formulario se envío con exito!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main >

	);
};



export default App;
