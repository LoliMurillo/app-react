import Proptypes from "prop-types";

const Label = ({ text }) => {
	return (
		<div>
			<label>{text}</label>
		</div>
	);
};

Label.defaultProps = {
	text: "",
};

Label.proptypes = {
	text: Proptypes.string.isRequired,
};
export default Label;
