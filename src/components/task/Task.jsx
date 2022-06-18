import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, tasks, setTasks, index }) => {
	const handleDelete = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};
	return (
		<Draggable index={index} draggableId={task.draggableId}>
			{(provided) => (
				<div
					className="task-box"
					key={index}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<p className="task-text">{task.text}</p>
					<button
						className="delete-btn"
						onClick={() => {
							handleDelete(task.id);
						}}
					>
						X
					</button>
				</div>
			)}
		</Draggable>
	);
};
