import React from 'react'
import { WINE_NEW } from '../../../assets/images'
import './card.css'

const Card = ({ backgroundImage, star, title, bottle }) => {
	return (
		<>
			<div className="collection_cards">
				<div
					className="cards_position wrapper"
					style={{ backgroundImage: `url(${backgroundImage})` }}
				>
					<img
						src={star}
						alt="star"
						className="cards_star_alignment-img"
					/>
					<div className="cardinfo-wrapper">
						<div className="cards_star_alignment">
							<p className="card_title">{title}</p>
						</div>
						<p className="card_content">Soigner #01</p>
						<p className="card_content">2022</p>
						<p className="card_content">Grand CRU</p>
						{/* <p className="card_value">$52,014</p> */}
					</div>
					<img src={bottle} alt="wine" className="wine_position" />
				</div>
			</div>
		</>
	)
}

export default Card
