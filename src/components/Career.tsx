import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Scoreme Solutions Pvt Ltd</h5>
              </div>
              <h4>Jan, 2025 Jan, 2026</h4>
            </div>

            <p>
              <ul>
                <li> <b>DevSecOps Implementation</b>: Spearheaded end-to-end CI/CD pipeline design for a DLP architecture using Jenkins, reducing
                  deployment errors by 60% by integrating scans using tools like SonarQube, OWASP Dependency-Check, and Trivy.</li>
                <li> <b>High-Availability Orchestration</b>: Designed and operated distributed data ingestion pipelines using Apache NiFi for real-time
                  data processing, enabling secure authentication and high availability 99.9% uptime.</li>
                <li> <b>Infrastructure as Code (IaC)</b>: Architected Cloud and On-Premise infrastructure from scratch using Terraform and Ansible,
                  provisioning 20+ AWS resources across public-private subnets and reducing environment provisioning time by 70%.</li>
                <li><b>AWS Architecture & Security</b>: Designed a scalable multi-account architecture using AWS Organizations, enforcing 100%
                  workload isolation and implementing granular SSM access controls to eliminate SSH dependency.</li>
                <li> <b>Observability Stack</b>: Modernized monitoring by deploying Prometheus and Grafana with auto-discovery for ASG target
                  groups, establishing Google Golden Signals dashboards to minimize MTTR.</li>
                <li><b>Log Aggregation</b>: Deployed a centralized logging solution using the ELK Stack (Elasticsearch, Logstash, Kibana) to enable
                  real-time application-level analysis and faster debugging.</li>
                <li><b>Zero-Downtime Deployment</b>: Automated Blue-Green and Rolling deployment strategies for new DLP Architecture, ensuring
                  seamless target registration without downtime</li>
              </ul>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>(Summer Intern)</h5 >
                <h5>MRCC</h5>
              </div>
              <h4>July, 2024 Aug,  2024</h4>
            </div>
            <p>

              <ul>
                <li><b>Cost Optimization</b>: Reduced cloud infrastructure costs by 20% by implementing lifecycle policies on S3 and rightsizing
                  EC2/RDS resources based on usage metrics.</li>
                <li><b>Big Data Pipeline</b>: Engineered automated Big Data workflows using Apache Spark and Hadoop, handling full cluster
                  configuration, networking, and dependency management.</li>
                <li><b>Serverless Architecture</b>: Expanded a Face Recognition Service using AWS Rekognition, Lambda, and DynamoDB, enhanc-
                  ing system scalability and response time.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
