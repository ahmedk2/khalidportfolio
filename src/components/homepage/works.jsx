import React from "react";
import { faBriefcase, faCertificate } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="../playstation.jpg"
								alt="Sony Interactive Entertainment"
								className="work-image"
							/>
							<div className="work-title">Sony Interactive Entertainment</div>
							<div className="work-subtitle">
								DevOps Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
						<div className="work">
							<img
								src="../paymentus_logo.jpeg"
								alt="Paymentus"
								className="work-image"
							/>
							<div className="work-title">Paymentus</div>
							<div className="work-subtitle">
								Technical Implementation Engineer
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
					</div>
					
				}
			/>
			<br></br>
			<Card
				icon={faCertificate}
				title="Certifications"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png"
								alt="Amazon Web Services"
								className="work-image"
							/>
							<div className="work-title">AWS Certified Solutions Architect Associate</div>
							<div className="work-duration">Mar 2024</div>
						</div>
						<div className="work">
							<img
								src="https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
								alt="Amazon Web Services"
								className="work-image"
							/>
							<div className="work-title">AWS Certified Cloud Practitioner</div>
							<div className="work-duration">Jun 2022</div>
						</div>
					</div>
					
				}
			/>
		</div>
		
	);
};

export default Works;
