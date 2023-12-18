## Notes on challenges faced

In the process of developing my web portfolio, I navigated through the intricate landscape of cloud technologies, encountering a series of noteworthy challenges. Here's an overview of my journey, from establishing a GitHub repository to deploying a fully functional website hosted on AWS.

The journey commenced with the creation of a GitHub repository for my web portfolio. I utilized a starter kit for HTML, CSS, and JavaScript to lay the foundation. Integrating a visit counter script using ChatGPT and fine-tuning the website with personalized styles and content set the stage for the next phase.

Transitioning to AWS, I initiated the hosting process by creating an S3 bucket named 'khalidahmedportfolio.' However, initial access challenges prompted a meticulous adjustment of its policy to allow public viewing, all while adhering to best security practices.

Enabling static website hosting for the S3 bucket revealed a challenge – accessibility via HTTP but not HTTPS. To address this, AWS CloudFront entered the scene as a reliable CDN, providing a custom URL fortified with HTTPS.

Seeking a more professional domain, I opted for 'khalidahmedportfolio.com' through AWS Route53. However, integrating my Route53 record into CloudFront presented a hurdle – a certificate was required. AWS Certificate Manager (ACM) came to the rescue, albeit with a slight delay due to pending validation. A pivotal solution emerged with the creation of a CNAME record in my hosted zone.

With the certificate validated, meticulous adjustments to the CloudFront distribution included alternate domain names and a custom SSL certificate. Incorporating 'www' as a Route 53 record prefix and leveraging a wildcard certificate brought my new domain to life.

Adding complexity to the narrative, DynamoDB and Lambda joined the journey. Initial struggles with Lambda's interaction with DynamoDB were traced back to an attribute name mismatch. A crucial lesson unfolded – the pivotal role of IAM in ensuring seamless operation within AWS.

Venturing further into GitHub actions and Infrastructure as Code (IaC), I explored automation possibilities. GitHub actions encountered a stumbling block related to AWS credentials, swiftly resolved by incorporating repository secrets for a seamless CI/CD workflow.

In the realm of IaC, the integration of AWS SAM CLI introduced an unexpected IAM challenge during Lambda setup. The remedy involved including the --capabilities CAPABILITY_IAM flag in the SAM deploy command. This experience underscored the potency of CloudFormation for automating API services and managing infrastructure.

As the journey reached its culmination, the automation of API services marked a significant milestone, showcasing the transformative potential of cloud technologies. Through challenges embraced and lessons learned, the experience provided a profound understanding of the intricate facets of AWS.