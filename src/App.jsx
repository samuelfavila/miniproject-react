import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./TaskDetails";

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: "1",
			title: "Estudar programação",
			completed: false,
		},
		{
			id: "2",
			title: "Ler livros",
			completed: true,
		},
	]);

	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasks(newTasks);
	};

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);
	};

	const handleTaskAddition = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				title: taskTitle,
				id: uuidv4,
				completed: false,
			},
		];
		setTasks(newTasks);
	};

	const ListTasks = () => (
		<>
			<AddTask handleTaskAddition={handleTaskAddition} />
			<Tasks
				tasks={tasks}
				handleTaskClick={handleTaskClick}
				handleTaskDeletion={handleTaskDeletion}
			/>
		</>
	);

	return (
		<Router>
			<div className="container">
				<Header />
				<Routes>
					<Route
						path="/"
						// render={() => (
						// 	<>
						// 		<AddTask handleTaskAddition={handleTaskAddition} />
						// 		<Tasks
						// 			tasks={tasks}
						// 			handleTaskClick={handleTaskClick}
						// 			handleTaskDeletion={handleTaskDeletion}
						// 		/>
						// 	</>
						// )}
						exact
						element={<ListTasks />}
					/>
					<Route path="/:taskTitle" element={<TaskDetails />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
