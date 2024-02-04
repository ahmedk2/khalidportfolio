import React from "react";

function article_1() {
	return {
		date: "Feb 4 2024",
		title: "🚀 Navigating Cloud Technologies: A Web Portfolio Journey",
		description:
			"Dive into my journey of crafting a unique web portfolio, where I navigate the complexities of cloud technologies, conquer challenges with AWS and GitHub, and unlock the power of automation.",
		keywords: [
			"🚀 Navigating Cloud Technologies: A Web Portfolio Journey",
			"Khalid",
			"Khalid A",
			"Khalid Ahmed",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
					<p>Embarking on the creation of my web portfolio <a href="https://www.khalidahmedportfolio.com">https://www.khalidahmedportfolio.com/</a> was more than just a project; it was a profound exploration into the world of cloud technologies. Let me share the highlights of this enriching journey, the technologies I employed, a few hiccups faced, and the invaluable lessons learned.</p>

					<h3>GitHub Repository Launch:</h3>
					<p>My journey began with the establishment of a GitHub repository for my web portfolio. Leveraging a starter kit for HTML, CSS, and JavaScript, I infused creativity by integrating a visit counter script powered by ChatGPT. Small tweaks to styles and content gave my website a personalized touch.</p>

					<h3>AWS Hosting Adventure:</h3>
					<p>Transitioning to AWS, I hosted my website in an S3 bucket named 'khalidahmedportfolio.' Overcoming initial access challenges, I meticulously adjusted policies to ensure seamless public viewing, all while adhering to robust security practices.</p>

					<h3>Mastering CloudFront and Route53:</h3>
					<p>Static website hosting brought a challenge – HTTP vs. HTTPS accessibility. Enter AWS CloudFront as a dependable CDN, providing a custom URL fortified with HTTPS. Seeking a more professional domain, 'khalidahmedportfolio.com' was acquired through AWS Route53, with meticulous adjustments and certificate validations enhancing its functionality.</p>

					<h3>DynamoDB and Lambda Function:</h3>
					<p>Venturing deeper into AWS, I introduced DynamoDB and Lambda to create a more interactive website. Challenges emerged, notably with Lambda's interaction with DynamoDB, emphasizing the pivotal role of IAM in ensuring seamless operation within AWS.</p>

					<h3>GitHub Actions and IaC Exploration:</h3>
					<p>In the pursuit of automation, I delved into GitHub actions and Infrastructure as Code (IaC). GitHub actions encountered a stumbling block related to AWS credentials, swiftly resolved by incorporating repository secrets for a seamless CI/CD workflow. Further exploration into IaC highlighted the need for AWS SAM CLI and the inclusion of the --capabilities CAPABILITY_IAM flag in the SAM deploy command, showcasing the power of CloudFormation.</p>

					<h3>Automation Triumph:</h3>
					<p>As the journey concluded, the successful automation of API services marked a significant milestone, unveiling the transformative potential of cloud technologies. Despite challenges, this learning experience has equipped me with a profound understanding of cloud technologies, setting the stage for continued growth and exploration.</p>

					<h3>Conclusion:</h3>
					<p>As the journey concluded</p>
					</div>
					
					<img
						src="../celebrating.gif"
						alt="random"
					/>
				</div>
			</React.Fragment>
		),
	};
}


const myArticles = [article_1];

export default myArticles;
