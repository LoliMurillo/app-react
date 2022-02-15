import "./Title.css";

const Title = ({ text }) => {

	return (
		<div className='title-container'>
			<h2 className='title-label'> {text} </h2>
		</div>
	);
};

export default Title;