import { Formik, Field, Form } from "formik";
export const SignIn = () => (
	<div>
		<h1>Iniciar Sesión</h1>
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form>
				<label htmlFor="email">Email</label>
				<Field
					id="email"
					name="email"
					placeholder="jane@gmail.com"
					type="email"
				/>

				<label htmlFor="password">Password</label>
				<Field id="password" name="password" />

				<button type="submit">Iniciar Sesión</button>
			</Form>
		</Formik>
	</div>
);
