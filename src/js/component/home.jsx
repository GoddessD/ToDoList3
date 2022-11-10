import React from "react";
import { Item } from "./item.jsx"
import { Itemsleft } from "./itemsleft.jsx"
import { Input } from "./input.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1 className="text"> todos </h1>
			<Input className="input"/>
			<item />
			<itemsleft />
		</div>
	)
}

export default Home;

