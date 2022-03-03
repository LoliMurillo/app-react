import { Formik, Field, Form } from "formik";
export const SignUp = () => (
	<div>
		<h1>Registrate!</h1>
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			}}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form>
				<label htmlFor="firstName">Nombre</label>
				<Field id="firstName" name="firstName" placeholder="Jane" />
  
				<label htmlFor="lastName">Apellidos</label>
				<Field id="lastName" name="lastName" placeholder="Doe" />
  
				<label htmlFor="email">Email</label>
				<Field
					id="email"
					name="email"
					placeholder="jane@gmail.com"
					type="email"
				/>

				<label htmlFor="password">Password</label>
				<Field id="password" name="password" />

				<button type="submit">Registrar</button>
			</Form>
		</Formik>
	</div>
);