import React, { useState } from "react";

export const TaskCardTitle = () => {
	const [isClick, setIsClick] = useState(false);
	const [cardTitle, setCardTitle] = useState("new card");
	const handleChange = (e) => {
		setCardTitle(e.target.value);
	};
	const hundleSubmit = (e) => {
		e.preventDefault();
		setIsClick(false);
	};
	return (
		<div
			onClick={() => setIsClick(!isClick)}
			className="taskCardTitleInputArea"
		>
			{isClick ? (
				<form onSubmit={hundleSubmit}>
					<input
						autoFocus
						maxLength={10}
						type="text"
						value={cardTitle}
						onChange={handleChange}
						onBlur={() => setIsClick(false)}
						className="taskCardTitleInput"
					/>
				</form>
			) : (
				<h3>{cardTitle}</h3>
			)}
		</div>
	);
};
