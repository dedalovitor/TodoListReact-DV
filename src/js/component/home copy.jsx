import React, { useEffect, useState } from "react";

//add into array --> concat
//delete from an array --> filter
//update --> map

//create your first component
const Home1 = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container col-4">
			<h1>My Todos</h1>
			<ul>
				<li><input
					type="text"
					onChange={(e)=> setInputValue(e.target.value)}
					value= {inputValue}
					onKeyUp={(e) => {
						if (e.key== "Enter" && e.target.value.trim() != ""){
							setTodos(todos.concat([e.target.value]));
							setInputValue("");
						} 
						
					}}
					placeholder={todos.length == 0? "What do you need to do?" : "Had another todo"}>

				</input>
				</li>
				
				{todos.map((item, index) =>
				<li className="margin-auto">{item}{" "}
				<i 
				class="fa-solid fa-trash-can" 
				onClick={() => 
				setTodos(
					todos.filter(
						(t, currentIndex) =>
						 index != currentIndex
						 )
						 )
						 }></i>
						 </li>
						 )}
				
				</ul>

			<div>{todos.length > 0 ? `${todos.length} todos` : 'No todos' }</div>
		</div>
	);
};

export default Home;
