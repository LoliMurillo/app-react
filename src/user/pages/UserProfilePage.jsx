import Title from "core/components/Title/Title";
import Grid from "core/components/Grid";
import { Box } from "core/components/Box/Box";
import imgUsuario from "core/pages/img/imgUsuario.jpg";

export const UserProfilePage = () => {
	return (
		<Grid container columns={300}>
			<img src={imgUsuario} alt="" />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
				reiciendis dolorum deleniti illum numquam optio repudiandae quia est
				facilis repellendus, doloribus cupiditate, pariatur obcaecati quam ea.
				Tenetur explicabo minus quam.
			</p>

			<Grid>3</Grid>
			<Grid>4</Grid>
			<Grid>5</Grid>
			<Box>6</Box>
		</Grid>
	);
};
