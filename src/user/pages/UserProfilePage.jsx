import Title from "core/components/Title/Title";
import imgUsuario from "core/pages/img/imgUsuario.jpg";

export const UserProfilePage = () => {
	return (
		<div className="Imagen-perfil">
			<h3>Ana Sánchez</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
				reiciendis dolorum deleniti illum numquam optio repudiandae quia est
				facilis repellendus, doloribus cupiditate, pariatur obcaecati quam ea.
				Tenetur explicabo minus quam.
			</p>

			<img src={imgUsuario} alt="" />
		</div>
	);
};
