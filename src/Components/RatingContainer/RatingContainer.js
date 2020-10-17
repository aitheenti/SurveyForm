import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function RatingContainer() {
	const [userrating, setUserRating] = useState(null);
	const [hover, setHover] = useState(null);

	function handleClick(ratingValue) {
		setUserRating(ratingValue);
		console.log(setUserRating(ratingValue));
	}

	// let rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			<div className='rating_label'>
				<span>Not at all Likely</span>
				<span>Extremely Likely</span>
			</div>

			<div className='rating_container_layout'>
				{[...Array(10)].map((ratingval, i) => {
					const ratingValue = i + 1;
					return (
						<label>
							<input
								key={i}
								type='radio'
								name='rating_stars'
								value={ratingValue}
								onClick={() => handleClick(ratingValue)}
							/>
							<FaStar
								size={80}
								color={
									ratingValue <= (userrating || hover) ? "#FFC107" : "#E4E5E9 "
								}
								onMouseEnter={() => setHover(ratingValue)}
								onMouseLeave={() => setHover(null)}
							/>
						</label>
					);
				})}

				{/* Number rating */}
				{/* {rating.map((num, idx) => {
					const ratingValue = idx + 1;
					return (
						<label>
							{num}
							<input
								type='radio'
								className='rating_option'
								key={num}
								onClick={() => handleClick(ratingValue)}
								value={ratingValue}
							/>
						</label>
					);
				})} */}
			</div>
		</>
	);
}

export default RatingContainer;
