import React from 'react'
import Countdown from 'react-countdown'
import { BANNER_IMAGE } from '../../../assets/images'
import BUYPASS from '../../../assets/images/buypass.svg'
import './bannersection.css'
const BannerSection = () => {
	const Renderer = ({ hours, minutes, seconds, days, completed }) => {
		if (days) {
			return (
				<div className="primary-text ml_10">{`${days}d: ${hours}h: ${minutes}m: ${seconds}s `}</div>
			)
		}
		if (days === 0 && hours > 0) {
			return (
				<>
					<div className="primary-text ml_10">{`${hours}h: ${minutes}m: ${seconds}s `}</div>
				</>
			)
		}
		if (days === 0 && hours === 0) {
			return (
				<>
					<div className="primary-text ml_10">
						{`${minutes}m: ${seconds}s `}
					</div>
				</>
			)
		}
		return null
	}
	return (
		<>
			<div className="bottle_wrapper">
				<div className="bottle_img">
					<img src={BANNER_IMAGE} alt="bottle" className="bottle" />
					<div className="buypassWrapper">
						<div>
							<img
								src={BUYPASS}
								alt="buypass"
								className="buypass"
							/>
						</div>
						<div>
							<p className="primary-text ml_10">BUY PASS</p>
						</div>
					</div>
					<div className="wrapper my-2">
						<Countdown
							date={new Date(
								'Thursday, December 1, 2022 12:00:00 AM',
							).toUTCString()}
							renderer={(props) => <Renderer {...props} />}
						/>
						<p className="timer-text">
							left. Connect your wallet to be first to access!
						</p>
					</div>
				</div>
				<div className="liner_wrapper">
					<div className="linerbox"></div>
				</div>
			</div>
		</>
	)
}

export default BannerSection
