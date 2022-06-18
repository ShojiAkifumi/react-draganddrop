import React from "react";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskAddInput } from "./TaskAddInput";
import { Tasks } from "./Tasks";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({
	taskCardID,
	taskCardsList,
	setTaskCardsList,
	index,
}) => {
	const [inputTask, setInputTask] = useState("");
	const [tasks, setTasks] = useState([
		{ id: "0", draggableId: "task-0", text: "sample task" },
	]);
	return (
		<Draggable index={index} draggableId={taskCardID}>
			{(provided) => (
				<div
					className="taskCard"
					key={index}
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<div className="task-header" {...provided.dragHandleProps}>
						<TaskCardTitle />
						<TaskCardDeleteButton
							taskCardID={taskCardID}
							taskCardsList={taskCardsList}
							setTaskCardsList={setTaskCardsList}
						/>
					</div>
					<TaskAddInput
						inputTask={inputTask}
						setInputTask={setInputTask}
						tasks={tasks}
						setTasks={setTasks}
					/>
					<Tasks tasks={tasks} setTasks={setTasks} />
				</div>
			)}
		</Draggable>
	);
};
