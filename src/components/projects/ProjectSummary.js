import React from 'react';

const ProjectSummary = ({ project }) => {
	return (
		<div className="project-list section">
			<div className="card z-depth-0  project-summary" style={{ padding: 20 }}>
				<span className="card-title">{project.title}</span>
				<p>Posted by Asad Abidi</p>
				<p className="grey-text">14th June, 6am</p>
			</div>
		</div>
	);
};

export default ProjectSummary;
