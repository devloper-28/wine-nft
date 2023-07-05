import Modal from 'react-bootstrap/Modal'
import React from 'react'
import { CROSS_FILTER_MOB_ICON } from '../../assets/images'
import './modal.css'

const CustomModal = (props) => {
	const {
		mainClassName = '',
		className = '',
		modalSize = 'md',
		showModal = false,
		showCloseButton = true,
		closeModal,
		children,
		FooterComponent = '',
	} = props

	return (
		<Modal
			show={showModal}
			size={modalSize}
			aria-labelledby="contained-modal-title-vcenter"
			className={mainClassName}
			centered
		>
			{showCloseButton && (
				<div className="w-100 d-flex justify-content-end cp">
					<img
						src={CROSS_FILTER_MOB_ICON}
						alt="crossicon"
						onClick={closeModal}
						className="modal-cross-icon"
					/>
				</div>
			)}

			<div className={`${className} ${!showCloseButton ? 'pt-0' : ''}`}>
				{children}
			</div>
			{FooterComponent && (
				<Modal.Footer>
					<FooterComponent />
				</Modal.Footer>
			)}
		</Modal>
	)
}

export default CustomModal
