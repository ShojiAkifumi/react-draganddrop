import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({ inputTask, setInputTask, tasks, setTasks }) => {
	const hundleSubmit = (e) => {
		const taskId = uuid();
		e.preventDefault();
		if (!inputTask) return;
		setTasks([
			...tasks,
			{
				id: taskId,
				draggableId: `task-${taskId}`,
				text: inputTask,
			},
		]);
		setInputTask("");
	};
	const handleChange = (e) => {
		setInputTask(e.target.value);
	};
	return (
		<form onSubmit={hundleSubmit}>
			<input
				type="text"
				placeholder="add a task"
				className="task-add-input"
				value={inputTask}
				onChange={handleChange}
			/>
		</form>
	);
};
