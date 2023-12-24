import React, { useCallback } from "react";

import Modal from "react-modal";

import { useLanguage } from "hooks/language";

import dataset from "../dataset";
import ImageSlider from "../ImageSlider";
import Project from "../interface/Project";

import {
	Body,
	CloseButton,
	DescriptionSection,
	Image,
	MainSection,
	PhotoSection,
	SeparateBar,
	Skill,
	SkillSection,
} from "./styles";

const customStyles = {
	overlay: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(32, 29, 29, 0.75)",
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		padding: "0px",
		width: "80%",
		height: "80%",
		borderRadius: "4px",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};



interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	project: string;
}

Modal.setAppElement("#root");

const ModalProject: React.FC<Props> = ({ isOpen, setIsOpen, project: projectId }) => {
	const { getLanguage } = useLanguage();
  const data = dataset[getLanguage()];

	const project = data.projects.find((project) => project.id === projectId);
	function closeModal() {
		setIsOpen(false);
	}

	return (
		<Modal
			id='modal-project'
			isOpen={isOpen}
			style={customStyles}
			contentLabel='Example Modal'
			onRequestClose={closeModal}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}>
			<CloseButton>
				<button onClick={closeModal}>X</button>
			</CloseButton>
			<Body>
				<MainSection>
					<PhotoSection>
						<Image >
							<ImageSlider slides={project?.images as string[]} title={project?.title as string}/>
						</Image>
					</PhotoSection>

          <SeparateBar />

					<DescriptionSection>
						<h2>{project?.title}</h2>
						{
							project?.description.split('\n\n').map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))
						}
					</DescriptionSection>
				</MainSection>
				<SkillSection quantity={project?.skills.length as number}>
					{project?.skills.map(({ icon: Icon, name }) => (
						<Skill key={name}>
							{<Icon />}
							{name}
						</Skill>
					))}
				</SkillSection>
			</Body>
		</Modal>
	);
};

export default ModalProject;
