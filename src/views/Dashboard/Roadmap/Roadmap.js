import React from 'react'
import './roadmap.css'
const Roadmap = () => {
	return (
		<>
			<div className="main" id="roadmap">
				<ul>
					<li>
						<div className="icon ">Step 1.</div>
						<div className="progress one">
							<p>1</p>
						</div>
						<p className="text">
							Read our{' '}
							<a href="#" className="step_link">
								whitepaper
							</a>{' '}
							and learn more about Soigner
						</p>
					</li>
					<li>
						<div className="icon ">Step 2.</div>
						<div className="progress two">
							<p>2</p>
						</div>
						<p className="text">
							Join our discord to earn your whitelist spot
						</p>
					</li>
					<li>
						<div className="icon ">Step 3.</div>
						<div className="progress three">
							<p>3</p>
						</div>
						<p className="text">
							recieve your Grand Cru pass as a NFT.
						</p>
					</li>
					<li>
						<div className="icon ">Step 4.</div>
						<div className="progress four">
							<p>4</p>
						</div>
						<p className="text">
							Recieve a random bottle worth upto $30,000 from our
							exclusive collection with the Grand Cru Pass
						</p>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Roadmap
