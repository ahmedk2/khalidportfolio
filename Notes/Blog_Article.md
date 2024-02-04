# LinkedIn Article Potential

🚀 Navigating Cloud Technologies: A Web Portfolio Journey

When I wanted to get into cloud I used to watch a lot of videos, read articles and follow tech youtubers. One day watching [MadeByGPS](https://www.youtube.com/madebygps) I came across the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/). This challenge was created by Forrest Brazeal. This challenge caught my attention because of the various aspects of cloud and devops it covers. The main goal of this challenge is to use your knowledge of cloud services and combine that with some programming, CI/CD knowledge and automation. Then bring all that together into a portfolio others can view to show your work. 

As soon as I heard about this challenge that is when I started on the creation of my web portfolio https://www.khalidahmedportfolio.com/. Overall this was a great project I enjoyed doing. Here are highlights of this journey, the technologies I employed, a few hiccups faced, and the invaluable lessons learned.

GitHub Repository Launch:
My journey began with creating a GitHub repository for my web portfolio. Leveraging a starter kit for HTML, CSS, JavaScript/React from **[Tharindu](https://github.com/truethari)**, I infused creativity by customizing the UI and integrating a visit counter script. Small tweaks to styles and content gave my website a personalized touch.

AWS Hosting Adventure:
Transitioning to AWS, I hosted my website in an S3 bucket named 'khalidahmedportfolio.' Overcoming initial access challenges, I adjusted policies to ensure the content can be publicly viewed. I also had to enable static hosting and specify my root file that would be shown to the world.

Mastering CloudFront and Route53:
Static website hosting brought a challenge – HTTP vs. HTTPS accessibility. Using AWS CloudFront as a dependable CDN, it provided a custom URL fortified with HTTPS. It also allowed me to forward traffic to my s3 bucket. However the URL did not look aesthetically pleasing. Seeking a more professional domain, I acquired 'khalidahmedportfolio.com' through AWS Route53. It came with a public hosted zone and certificate stored in ACM. Creating an A record and pointing it to my CloudFront distribution allowed and using the certificate in CloudFront allowed me to view my s3 bucket contents using a secure web domain.

DynamoDB and Lambda Function:
Venturing deeper into AWS, I introduced DynamoDB and Lambda to create a more interactive website. Showing the number of visit counts to the webpage. This was meant to update the count each time a get request or refresh to the webpage occurs. Challenges emerged, notably with Lambda's interaction with DynamoDB. I was able to resolve this by using IAM roles and applying the right permission to access specific AWS resources. After creating the python function and setting up the IAM role I was able to query the DynamoDB table and update the item of the visit counter key. 

GitHub Actions and IaC Exploration:
In the pursuit of automation, I delved into GitHub actions and Infrastructure as Code (IaC). Using GitHub actions I encountered a blocker related to AWS credentials. I was able to swiftly resolve it by incorporating repository secrets for a seamless CI/CD workflow. Further exploration into IaC highlighted the need for AWS SAM CLI and the inclusion of the --capabilities CAPABILITY_IAM flag in the SAM deploy command, showcasing the power of CloudFormation. Using AWS SAM CLI I was able to create resources and update them as needed. I created two separate Actions. First pipeline being to update the s3 bucket when a push event occurs on the main branch. The second pipeline being any changes made the the IaC files. Using these actions I was able to automate infrastructure creation and updating.

Automation Triumph and Conclusion:
Every Journey must come to an end. This project has enhanced my knowledge and skills in cloud technologies. I learned more about configuring AWS services, how to use python to access AWS resources, using Github Actions to create CI/CD pipelines and some react front end development. In the future I plan to keep understand more about best practices for developing and deploying cloud applications. I am eager to apply what I have learned to improve this project and more projects in the future. Continuing to expand my horizons in the cloud domain.

💻 🚀 #CloudTech #WebPortfolio #TechJourney #AWSAdventures
