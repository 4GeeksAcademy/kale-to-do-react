import React, { useState } from "react";


//create your first component
const Home = () => {
	const [todoList, setTodoList] = useState("")
	const [valor, setValor] = useState("")

	const agregarTarea = (e) => {
		if (e.key === 'Enter' && valor.trim()) {
			setTodoList([...todoList, valor]);
			setValor('');
		}
	}

	const borrarTarea = (index) => {
		setTodoList(todoList.filter((_, i) => i !== index));
	}

	return (
		<div className="text-center container w-25 justify-content-center">
			<h1>todos</h1>
			<div className="principal">
				<ul className="list-group">
					<input className="titulo" type="text" value={valor} onChange={(e) => setValor(e.target.value)}
						onKeyDown={agregarTarea} placeholder="Whats need to be done?" />
					{todoList.length === 0 ? (
						<li className="list-group-item disabled" aria-disabled="true">No hay tareas</li>
					) : (
						todoList.map((todoList, index) =>
						(
							<li className="list-group-item list-group-item-light d-flex justify-content-between" key={{ index }}>
								{todoList} <button className="btn btn-outline-danger" onClick={() => borrarTarea(index)}>X</button>
							</li>
						))
					)
					}
					<li className="list-group-item text-start"><p>{todoList.length} item left</p></li>
					<li className="list-group-item primero"></li>
					<li className="list-group-item segundo"></li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
