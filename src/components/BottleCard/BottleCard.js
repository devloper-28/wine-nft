import React, { useState } from 'react'
import Card from './Card/Card'
import {
	GOLD_STAR,
	PLATINUM_STAR,
	LEGENDARY_STAR,
	// GREYBG,
	// PURPLEBG,
	// YELLOWBG,
	GOLDBG,
	PLATINUMBG,
	LEGENDRYBG,
	LEGENDRY_BOTTLE,
	PLATINUM_BOTTLE,
	GOLD_BOTTLE,
} from '../../assets/images'
// import { Link } from 'react-router-dom'
import './Card/card.css'
// import PlaceBidModal from '../Modal/NFTmodal/PlaceBidModal'
// import BuyNftModal from '../Modal/NFTmodal/BuyNftModal'

const BottleCard = () => {
	// const [Open, setOpen] = useState(false)
	return (
		<>
			<div className="bottlewrapper">
				{/* <button onClick={() => setOpen(true)}> open modal</button> */}
				<div className="bottle_cards_box">
					<Card
						backgroundImage={GOLDBG}
						title="Gold"
						star={GOLD_STAR}
						bottle={GOLD_BOTTLE}
					/>
					<Card
						backgroundImage={LEGENDRYBG}
						title="Legendary"
						star={LEGENDARY_STAR}
						bottle={LEGENDRY_BOTTLE}
					/>
					<Card
						backgroundImage={PLATINUMBG}
						title="Platinum"
						star={PLATINUM_STAR}
						bottle={PLATINUM_BOTTLE}
					/>
				</div>
				{/* <div className="view_all_section">
          <Link to="/collections" className="all_collection_link">
            View Collection
          </Link>
        </div> */}
				{/* {Open && (
					<BuyNftModal
						showModal={Open}
						closeModal={() => setOpen(false)}
					/>
				)} */}
			</div>
		</>
	)
}

export default BottleCard
