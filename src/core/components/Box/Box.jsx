import "./Box.css";

export const Box = ({ children }) => {
	return (
		<div className="box-container">{children}</div>
	);
};