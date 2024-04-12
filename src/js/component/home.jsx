import React, { useEffect, useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);


	const inputData = () => {
		 !todos.includes(inputValue) ?
			(setTodos(todos.concat(inputValue)) ,
			setInputValue("")) : alert("Please change your todo. That todo is already saved!")
	
	};

	return (
		<div className="container">
			<div className="row margin-auto">
				<div className="column">
					<h1>Todos List</h1>
					<div className="col-6 m-auto border border-2 border-dark-subtle">
						<input type="text" onChange={(e) => { setInputValue(e.target.value) }} onKeyUp={(e) => e.key == "Enter" && e.target.value.trim() !== "" ? inputData() : null} value={inputValue} placeholder={todos.length == 0 ? "Add your first Todo!" : "Add more todos!"}></input>

					</div>
					<div className="col-6 m-auto">
					<ul>
						{todos.map((item, index) =>
						<div className="d-flex mb-1">
								<li className="col-10">{index + 1}. {item}</li>
								<button className="btn btn-danger col-2" onClick={()=> setTodos(todos.filter((t, currentIndex) => currentIndex != index))
								} >x</button>
								</div>
						)}
					</ul>
					{console.log(todos)}
					<p>{ todos.length == 0? "nothing to do" : todos.length + " to be done" }</p>
					</div>
				</div>
			</div>
		</div>
	);

};

export default Home;
