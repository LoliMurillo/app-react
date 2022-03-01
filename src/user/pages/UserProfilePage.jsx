import Title from "core/components/Title/Title";
import Grid from "core/components/Grid";
import { Box } from "core/components/Box/Box";


export const UserProfilePage = () => {
	return (
		<>
			<Title text="User profile page" />
			<p>
				Te ayudamos a conocer a personas como tú, con las que compartir tus
				aficiones, tus gustos y momemtos divertidos. Te guiamos en el proceso de
				interacción haciéndolo sencillo y agradable. Sabemos que a pesar de las
				dificultades, tu deseo de interactuar y relacionarte con los demás es
				intenso y por ello te ayudamos a conseguirlo. Vamos a por ello!
			</p>

			<Grid container columns={300}>
				<Grid>1</Grid>
				<Grid>2</Grid> 
				<Grid>3</Grid> 
				<Grid>4</Grid> 
				<Grid>5</Grid>
				<Box>6</Box>
			</Grid>
		</>
	);
};
