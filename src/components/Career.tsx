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
                <h4>Software Engineer</h4>
                <h5>Stripe</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected scalable backend services with Python, Django &
              FastAPI, built interactive merchant dashboards with React &
              TypeScript, and designed event-driven microservices handling
              150K+ events/min on AWS EKS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Accenture</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Engineered high-performance RESTful APIs processing 1M+ daily
              records, built responsive SPAs for executive dashboards, and
              developed async data pipelines with Kafka & Spark, increasing
              throughput by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master in IT</h4>
                <h5>University of North America</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a Master's degree in Information Technology at the
              University of North America, VA, USA. Focused on software
              engineering, distributed systems, and cloud-native
              architectures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
