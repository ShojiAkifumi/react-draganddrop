import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

export const Tasks = ({ tasks, setTasks }) => {
	const handleDrag = (result) => {
		// タスクを並び替え
		if (!result.destination) return;
		const rm = tasks.splice(result.source.index, 1);
		tasks.splice(result.destination.index, 0, rm[0]);
		setTasks(tasks);
	};
	return (
		<DragDropContext onDragEnd={handleDrag}>
			<Droppable droppableId="droppable">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{tasks.map((task, index) => (
							<div key={task.id}>
								<Task
									task={task}
									tasks={tasks}
									setTasks={setTasks}
									index={index}
								/>
							</div>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
