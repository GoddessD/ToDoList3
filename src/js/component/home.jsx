import React from "react";
import { Item } from "./item.jsx"
import { Itemsleft } from "./itemsleft.jsx"
import { Input } from "./input.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="center">
			<h1 className="text-center"> todos </h1>
			<div className="container">
				<Input className="input" />
				<Item />
				<Itemsleft />
			</div>
		</div>
	)
}

export default Home;

