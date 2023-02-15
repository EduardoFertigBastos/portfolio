import React from "react";

import Modal from "react-modal";

import {
	Body,
	CloseButton,
	Icon,
} from "./styles";

const customStyles = {
	overlay: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(75, 69, 69, 0.75)",
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		width: "70%",
		backgroundColor: "transparent",
		border: 'none',
		borderRadius: "10px",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	image: string;
}

Modal.setAppElement("#root");

const ModalImage: React.FC<Props> = ({ isOpen, setIsOpen, image }) => {
	function closeModal() {
		setIsOpen(false);
	}
	return (
		<Modal
			id='modal-imagem'
			isOpen={isOpen}
			style={customStyles}
			contentLabel='Example Modal'
			onRequestClose={closeModal}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}>
			<CloseButton>
			</CloseButton>
			<Body>
				<img src={image} alt='zoomed' />
				
				<Icon onClick={closeModal}/>
			</Body>
		</Modal>
	);
};

export default ModalImage;
