import React from "react";
import "./TaskDetails.css";
import Button from "./Button";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = () => {
	const params = useParams();
	const navigate = useNavigate();

	const handleGoBackButtonClick = () => {
		navigate("/");
	};

	return (
		<>
			<div className="back-button-container">
				<Button onClick={handleGoBackButtonClick}>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
					molestias doloribus praesentium modi commodi, dolores odio
					recusandae perferendis error. Aspernatur.
				</p>
			</div>
		</>
	);
};

export default TaskDetails;
