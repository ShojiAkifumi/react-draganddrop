import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddTaskCard } from "./button/AddTaskCard";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
	const [taskCardsList, setTaskCardsList] = useState([
		{ id: "0", draggableId: `Card-0` },
	]);
	const handleDrag = (result) => {
		if (!result.destination) return;
		const rm = taskCardsList.splice(result.source.index, 1);
		taskCardsList.splice(result.destination.index, 0, rm[0]);
		setTaskCardsList(taskCardsList);
	};
	return (
		<DragDropContext onDragEnd={handleDrag}>
			<Droppable droppableId="droppable2" direction="horizontal">
				{(provided) => (
					<div
						className="task-cards-area"
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{taskCardsList.map((taskCard, index) => (
							<TaskCard
								taskCardID={taskCard.id}
								taskCardsList={taskCardsList}
								setTaskCardsList={setTaskCardsList}
								key={taskCard.id}
								index={index}
							/>
						))}
						{provided.placeholder}
						<AddTaskCard
							taskCardsList={taskCardsList}
							setTaskCardsList={setTaskCardsList}
						/>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
