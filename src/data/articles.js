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
					<p>When I wanted to get into cloud I used to watch a lot of videos, read articles and follow tech youtubers. One day watching <a href="https://www.youtube.com/madebygps">MadeByGPS</a> I came across the <a href="https://cloudresumechallenge.dev/docs/the-challenge/">Cloud Resume Challenge</a>. This challenge was created by Forrest Brazeal. This challenge caught my attention because of the various aspects of cloud and devops it covers. The main goal of this challenge is to use your knowledge of cloud services and combine that with some programming, CI/CD knowledge and automation. Then bring all that together into a portfolio others can view to show your work.</p>

					<p>As soon as I heard about this challenge that is when I started on the creation of my web portfolio <a href="https://www.khalidahmedportfolio.com">https://www.khalidahmedportfolio.com/</a>. Overall this was a great project I enjoyed doing. Here are highlights of this journey, the technologies I employed, a few hiccups faced, and the invaluable lessons learned.</p>

					<h3>GitHub Repository Launch:</h3>
					<p>My journey began with creating a GitHub repository for my web portfolio. Leveraging a starter kit for HTML, CSS, JavaScript/React from <a href="https://github.com/truethari">Tharindu</a>, I infused creativity by customizing the UI and integrating a visit counter script to show the number of visits to my portfolio. Small tweaks to styles and content gave my website a personalized touch.</p>

					<h3>AWS Hosting Adventure:</h3>
					<p>Transitioning to AWS, I hosted my website in an S3 bucket named 'khalidahmedportfolio.' Overcoming initial access challenges, I adjusted policies to ensure the content can be publicly viewed. I also had to enable static hosting and specify my root file that would be shown to the world.</p>

					<h3>Mastering CloudFront and Route53:</h3>
					<p>Static website hosting brought a challenge the HTTP vs. HTTPS accessibility. Using AWS CloudFront as the CDN, it provided a custom URL fortified with HTTPS. It also allowed me to forward traffic to my s3 bucket. However the URL did not look aesthetically pleasing. Seeking a more professional domain, I acquired 'khalidahmedportfolio.com' through AWS Route53. It came with a public hosted zone and certificate stored in ACM. Creating an A record and pointing it to my CloudFront distribution allowed and using the certificate in CloudFront allowed me to view my s3 bucket contents using a secure web domain.</p>

					<h3>DynamoDB and Lambda Function:</h3>
					<p>Venturing deeper into AWS, I introduced DynamoDB and Lambda to create a more interactive website. Showing the number of visit counts to the webpage. This was meant to update the count each time a get request or refresh to the webpage occurs. Challenges emerged, notably with Lambda's interaction with DynamoDB. I was able to resolve this by using IAM roles and applying the right permission to access specific AWS resources. After creating the python function and setting up the IAM role I was able to query the DynamoDB table and update the item of the visit counter key.</p>

					<h3>API Gateway:</h3>
					<p>I took it a step further by using a API gateway instead of directly running lambda function since it is more secure/flexible. There is technically no authentication or authorization at this moment. However using an API gateway provides more control on how my function is accessed with Cross-origin resource sharing (CORS), it can set rate limits and much more.</p>

					<h3>GitHub Actions and IaC Exploration:</h3>
					<p>In the pursuit of automation, I delved into GitHub actions and Infrastructure as Code (IaC). Using GitHub actions I encountered a blocker related to AWS credentials. I was able to swiftly resolve it by incorporating repository secrets for a seamless CI/CD workflow. Further exploration into IaC highlighted the need for AWS SAM CLI and the inclusion of the --capabilities CAPABILITY_IAM flag in the SAM deploy command, showcasing the power of CloudFormation. Using AWS SAM CLI I was able to create resources and update them as needed. I created two separate Actions. First pipeline being to update the s3 bucket when a push event occurs on the main branch. The second pipeline being any changes made the the IaC files. Using these actions I was able to automate infrastructure creation and updating.</p>

					<h3>Automation Triumph and Conclusion:</h3>
					<p>Every Journey must come to an end. This project has enhanced my knowledge and skills in cloud technologies. I learned more about configuring AWS services, how to use python to access AWS resources, using Github Actions to create CI/CD pipelines and some react front end development. In the future I plan to keep understand more about best practices for developing and deploying cloud applications. I am eager to apply what I have learned to improve this project and more projects in the future. Continuing to expand my horizons in the cloud domain.</p>

					<p>💻 🚀 #CloudTech #WebPortfolio #TechJourney #AWSAdventures</p>
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
