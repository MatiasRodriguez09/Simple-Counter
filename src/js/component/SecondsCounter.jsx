import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
		<>
		<p>Contador: {props.numero1}</p>
		<p>{props.numero2}</p>
		<p>{props.numero3}</p>
		<p>{props.numero4}</p>
		<p>{props.numero5}</p>
		<p>{props.numero6}</p>
		</>
	);
};

export default SecondsCounter;
