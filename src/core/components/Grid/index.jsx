import PropTypes from "prop-types";
import "./index.css";

const Grid = ({ container, columns, children }) => {
	return (
		<div style={container ? { gridTemplateColumns: `repeat(auto-fit, minmax(${columns}px, 1fr))` } : {}} className={container ? "grid-container" : "grid-item"}>{children}</div>
	);
};

Grid.defaultProps = {
	container: false,
	columns: 200,
};

Grid.propTypes = {
	container: PropTypes.bool,
	columns: PropTypes.number,
};

export default Grid;