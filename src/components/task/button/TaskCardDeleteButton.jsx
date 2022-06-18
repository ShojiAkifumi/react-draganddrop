import React from "react";

export const TaskCardDeleteButton = ({
	taskCardID,
	taskCardsList,
	setTaskCardsList,
}) => {
	const hundleTaskDelete = (id) => {
		setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
	};
	return (
		<div>
			<button
				className="task-delete-btn"
				onClick={() => hundleTaskDelete(taskCardID)}
			>
				削除
			</button>
		</div>
	);
};
