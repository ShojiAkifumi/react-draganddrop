import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCard = ({ taskCardsList, setTaskCardsList }) => {
	const addTaskCard = () => {
		const taskCardId = uuid();
		setTaskCardsList([
			...taskCardsList,
			{ id: taskCardId, draggableId: `Card-${taskCardId}` },
		]);
	};
	return (
		<div className="add-btn-area">
			<button className="add-btn" onClick={addTaskCard}>
				+
			</button>
		</div>
	);
};
