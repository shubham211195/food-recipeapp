import React from "react";
import './App.css';

const Recipe = ({title,calories,image,ingredients}) =>{
	return(
		<div className="grid">
			<h1>{title}</h1>
			<ol>
				{ingredients.map((ingredient,idx)=>(
					<li key={idx}>{ingredient.text}</li>
				))}
			</ol>
			
<p>Calories : {calories}</p>

			<img  src={image} alt=""/>

		</div>
	);

}
export default Recipe;
