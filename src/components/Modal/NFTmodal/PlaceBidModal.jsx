import React, { useState } from 'react'
import { GOLD_BOTTLE, USER_DUMMY } from '../../../assets/images'
import CustomModal from '../CustomModal'
import './nftmodal.css'
const PlaceBidModal = ({ closeModal = () => null, showModal }) => {
	return (
		<CustomModal
			showModal={showModal}
			closeModal={closeModal}
			showCloseButton={true}
			modalSize="lg"
			mainClassName="bidmodal"
		>
			<div className="bidmodal-wrapper ">
				<div className="wrapper bidcontainer">
					<div className="nft-img">
						<img src={GOLD_BOTTLE} alt="BOTTLE" />
					</div>
					<div className="nft-info">
						<h4 className="mb-3 text-capital">
							2020 screaming eagle
						</h4>
						<p className="mb-4 nft-info-text">Napa Valley</p>
						<div className=" mb-3 wrapper justify-content-start">
							<div>
								<p className="info_title mb-2">MSRP</p>
								<p className="nft_price">$4100</p>
							</div>
							<div className="mx-3">
								<p className="info_title text-capital mb-2">
									making offer to
								</p>
								<div className="wrapper">
									<img src={USER_DUMMY} alt="alt" />
									<p
										className="info_title mx-1 mb-2"
										style={{
											color: '#929292',
										}}
									>
										0wxfg10516788
									</p>
								</div>
							</div>
						</div>
						<p className="info_title text-capital mb-3">Bid For</p>
						<div className="wrapper">
							<select className="nft_currency">
								<option>USD</option>
							</select>
							<input
								className="nft_price_input mx-3"
								type="text"
								value="$4310"
							/>
						</div>
					</div>
				</div>
				<button className="submitbtn mt-3 mb-1">
					Place Bid For $4300
				</button>
			</div>
		</CustomModal>
	)
}

export default PlaceBidModal
