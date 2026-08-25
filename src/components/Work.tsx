import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";
import {
  FiLayers,
  FiZap,
  FiShield,
  FiCpu,
  FiActivity,
  FiCloud,
  FiCheckCircle,
  FiMusic,
} from "react-icons/fi";

type Project = {
  name: string;
  label: string;
  category: string;
  tools: string;
  description: string;
  architectureFlow: string;
  story: string;
  details: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  icon: any;
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "BUNKR",
    label: "FEATURED PROJECT • LIVE PLATFORM",
    category: "REAL-TIME PLATFORM",
    tools: "React · TypeScript · Node.js · WebSockets · PostgreSQL · JWT · Docker",
    description:
      "A real-time collaborative platform leveraging a server-authoritative WebSocket architecture to enable synchronized multi-user playback with strong consistency guarantees.",
    architectureFlow: `Clients
(React / TypeScript)
        │
     WebSocket
        ↓
┌─────────────────────────────────┐
│ Dockerized Backend              │
│                                 │
│ Server-Authoritative             │
│ Room Sync Engine                 │
│        │                 │       │
│        ↓                 ↓       │
│ In-Memory Session      PostgreSQL│
│ State                  Persistent│
│ (Low-Latency)          Data      │
└─────────────────────────────────┘`,
    story:
      "I architected and built BUNKR as a real-time collaborative music synchronization platform. The core challenge was achieving synchronized audio playback across multiple concurrent clients. I designed a server-authoritative WebSocket architecture to coordinate room playback state with low-latency synchronization, paired with JWT/bcrypt authentication and a hybrid in-memory + PostgreSQL persistence model.",
    details: [
      "Architected and built a real-time collaborative platform leveraging a server-authoritative WebSocket architecture to enable synchronized multi-user playback with strong consistency guarantees.",
      "Designed and implemented RESTful APIs and normalized PostgreSQL schemas supporting authentication, room lifecycle orchestration, invite-code validation, and persistent session management.",
      "Developed secure, stateless authentication using JWT and bcrypt with role-based access control (RBAC) to enforce fine-grained authorization across protected routes.",
      "Engineered hybrid state management combining low-latency in-memory session coordination with durable relational persistence to ensure system reliability and data integrity.",
      "Containerized backend services using Docker and managed cloud deployments, troubleshooting CORS configurations, environment variables, and runtime stability issues.",
      "Performed concurrent load testing to validate WebSocket message handling and real-time synchronization under multi-user session scenarios.",
    ],
    metrics: [
      { label: "Sync Latency", value: "Low-Latency Synchronization" },
      { label: "Protocol", value: "WebSockets" },
      { label: "State Layer", value: "In-Memory + PG" },
    ],
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Docker", "JWT / RBAC"],
    icon: FiMusic,
    image: "/images/bunkr-screenshot.png",
    link: "https://bunkr404.com",
  },
  {
    name: "Internal Payments & Risk Dashboard",
    label: "WORK SAMPLE • STRIPE",
    category: "INTERNAL APPLICATION",
    tools: "React · TypeScript · Material UI · Python/FastAPI · REST APIs",
    description:
      "Internal team dashboard providing near-real-time visibility into payments, settlements, compliance, and risk metrics. Built with React, TypeScript, and Material UI, integrating with backend services through REST APIs.",
    architectureFlow: `Internal Team Dashboard
        ↓
     REST APIs
        ↓
   Backend Services
        ↓
      Data`,
    story:
      "I worked on an internal application used by the team to get visibility into payments, settlements, compliance, and risk metrics. My work involved the React/TypeScript dashboard and integrating the UI with backend services through APIs. The focus was on making operational and financial information easier for the team to access and understand.",
    details: [
      "Developed interactive internal dashboards using React.js, TypeScript, and Material UI, enabling visibility into payments, settlements, compliance, and risk metrics.",
      "Built reusable and modular frontend UI components and integrated REST APIs to support dynamic, responsive operational views.",
      "Collaborated with backend services to consume secure REST endpoints for transaction lookup and financial settlement summaries.",
      "Designed clean client-side state management and data formatting for operational and audit teams.",
    ],
    metrics: [
      { label: "Role", value: "Frontend & API Integration" },
      { label: "API Protocol", value: "REST APIs" },
      { label: "Interface", value: "Material UI" },
    ],
    tags: ["React", "TypeScript", "Material UI", "Python / FastAPI", "REST APIs"],
    icon: FiLayers,
  },
  {
    name: "Event-Driven Payment Services",
    label: "WORK SAMPLE • STRIPE",
    category: "DISTRIBUTED SYSTEMS",
    tools: "Python · Kafka · Microservices · Event-Driven Architecture · AWS",
    description:
      "Event-driven payment services designed for distributed processing using Apache Kafka, supporting high-volume payment events and asynchronous communication between services.",
    architectureFlow: `Payment / Transaction Services
            ↓
          Kafka
            ↓
     Consumer Services
            ↓
   Distributed Processing
            ↓
    Downstream Services`,
    story:
      "Separately from the internal dashboard work, I worked on event-driven payment services. The architecture used Kafka as an asynchronous communication layer between distributed services. This allowed payment-related events to be processed independently by downstream services rather than tightly coupling every service together. The system was designed to handle high event volumes and support reliable distributed processing.",
    details: [
      "Designed and developed event-driven microservices using Python and Apache Kafka to decouple transaction intake from downstream processing.",
      "Engineered asynchronous consumer services processing high-throughput payment and transaction events across distributed nodes.",
      "Implemented reliable message handling patterns to support consistent downstream delivery and state propagation across services.",
      "Containerized microservices and integrated with cloud-native AWS infrastructure.",
    ],
    metrics: [
      { label: "Throughput", value: "High-Volume Event Processing" },
      { label: "Messaging", value: "Apache Kafka" },
      { label: "Architecture", value: "Event-Driven" },
    ],
    tags: ["Python", "Apache Kafka", "Microservices", "Event-Driven", "AWS"],
    icon: FiZap,
  },
  {
    name: "Distributed Fraud Scoring & Reconciliation",
    label: "WORK SAMPLE • STRIPE",
    category: "DATA & RISK SYSTEMS",
    tools: "Python · Celery · Redis · PySpark · PostgreSQL · MongoDB",
    description:
      "Distributed reconciliation and fraud-scoring pipeline for processing transaction data, identifying anomalies, and generating risk indicators using Celery for asynchronous task management and PySpark for large-scale distributed analytics.",
    architectureFlow: `Transaction Data
       ↓
Processing Pipeline
       ↓
 ┌─────┴──────────┐
 ↓                ↓
Celery + Redis    PySpark
(Asynchronous     (Distributed
Task Execution)   Processing)
 ↓                ↓
Reconciliation   Anomaly Indicators
 ↓                ↓
PostgreSQL      Risk Metrics
       └────┬─────┘
            ↓
     Fraud / Risk Results`,
    story:
      "I also worked on distributed reconciliation and fraud-scoring pipelines. The problem was processing transaction-related data and identifying discrepancies and risk signals without putting all of the workload into a synchronous application path. We used Celery + Redis for asynchronous task execution and PySpark for distributed processing across large datasets. PostgreSQL and MongoDB supported different relational and document data requirements.",
    details: [
      "Implemented distributed reconciliation and fraud-scoring workflows using Celery and Redis to offload compute-heavy verification from synchronous API paths.",
      "Utilized Apache Spark and PySpark for distributed data processing to aggregate transaction records and compute anomaly indicators.",
      "Designed and optimized PostgreSQL schemas for high-concurrency transactional workloads and utilized MongoDB for flexible rule configurations.",
      "Enforced OAuth2, JWT, and RBAC authorization across risk-sensitive internal endpoints.",
    ],
    metrics: [
      { label: "Reconciliation", value: "Reduced Discrepancies" },
      { label: "Task Execution", value: "Celery + Redis" },
      { label: "Distributed Processing", value: "PySpark" },
    ],
    tags: ["Python", "Celery", "Redis", "PySpark", "PostgreSQL", "MongoDB"],
    icon: FiShield,
  },
  {
    name: "Enterprise Financial APIs",
    label: "WORK SAMPLE • ACCENTURE",
    category: "BACKEND & MICROSERVICES",
    tools: "Python · Flask · Kafka · Spark · PostgreSQL",
    description:
      "High-volume RESTful APIs and microservices for enterprise financial systems, supporting transaction processing, reporting, and asynchronous data workflows.",
    architectureFlow: `Client
  ↓
Load Balancer
  ↓
REST API / Flask
  ↓
Microservices
  ↓
 ┌──────────────┐
 ↓              ↓
Data         Event Processing
 ↓              ↓
PostgreSQL    Kafka / Spark`,
    story:
      "At Accenture, I worked on financial applications where the backend needed to handle high volumes of data while meeting client SLA and compliance requirements. I worked on Python/Flask REST APIs and microservices, with Kafka and Spark supporting asynchronous and large-scale processing. I also worked with PostgreSQL and MongoDB and focused on query and reporting performance.",
    details: [
      "Engineered RESTful APIs using Python and Flask for enterprise financial clients, supporting secure data processing and compliance requirements.",
      "Built responsive executive dashboard SPAs in React.js & TypeScript for audit reporting and transaction oversight.",
      "Designed modular backend architectures leveraging Flask Blueprints and clean architecture principles to improve maintainability.",
      "Developed asynchronous event-driven data pipelines using Apache Kafka and Spark for high-throughput batch and stream processing.",
      "Optimized PostgreSQL queries and indexing strategies to improve reporting efficiency and maintain reliable response times.",
    ],
    metrics: [
      { label: "Data Volume", value: "High-Volume Financial Data" },
      { label: "Service Focus", value: "Reliability-Focused APIs" },
      { label: "Query Layer", value: "Optimized Performance" },
    ],
    tags: ["Python", "Flask", "Kafka", "Spark", "PostgreSQL", "Microservices"],
    icon: FiCpu,
  },
  {
    name: "Telemetry & Observability",
    label: "WORK SAMPLE • PROFESSIONAL EXPERIENCE",
    category: "OBSERVABILITY",
    tools: "Prometheus · Grafana · CloudWatch · ELK · Spark/PySpark",
    description:
      "Observability architecture spanning application metrics, infrastructure monitoring, and centralized logging using Prometheus, Grafana, CloudWatch, and ELK.",
    architectureFlow: `Applications / Services
        │
   ┌────┼──────────┐
   ↓    ↓          ↓
Metrics Logs   AWS Signals
(Prometheus) (ELK) (CloudWatch)
   ↓    ↓          ↓
   └────┼──────────┘
        ↓
     Grafana (Visualization)
        ↓
Engineering Visibility`,
    story:
      "As the systems became more distributed, observability became important for understanding system health. I worked with metrics, dashboards, centralized logging, and AWS monitoring. Prometheus collected metrics, Grafana provided visualization, CloudWatch provided AWS-level monitoring, and ELK supported centralized log analysis. The goal was to give engineering teams visibility into application and infrastructure behavior and help identify operational issues.",
    details: [
      "Implemented Prometheus metrics collection and Grafana visualization dashboards for application telemetry and service health monitoring.",
      "Set up CloudWatch monitoring and alerts for AWS infrastructure components and server health.",
      "Utilized the ELK stack (Elasticsearch, Logstash, Kibana) for centralized log aggregation and operational debugging.",
      "Monitored Spark/PySpark analytics pipelines and distributed stream workloads for pipeline health.",
    ],
    metrics: [
      { label: "Metrics & Logs", value: "Prometheus · ELK" },
      { label: "Visualization", value: "Grafana" },
      { label: "Cloud Monitor", value: "AWS CloudWatch" },
    ],
    tags: ["Prometheus (Metrics)", "Grafana (Viz)", "ELK (Logs)", "CloudWatch (AWS)", "PySpark"],
    icon: FiActivity,
  },
  {
    name: "Cloud Infrastructure & CI/CD",
    label: "WORK SAMPLE • PROFESSIONAL EXPERIENCE",
    category: "CLOUD & DEVOPS",
    tools: "Docker · Kubernetes · AWS EKS · Terraform · CI/CD",
    description:
      "Containerized cloud deployments using Docker and Kubernetes/EKS, with Terraform-based infrastructure and automated CI/CD pipelines supporting scalable, repeatable releases.",
    architectureFlow: `Source Code
    ↓
   CI/CD
    ↓
Docker Image
    ↓
Kubernetes / AWS EKS
    ↓
Application Services
    ↓
Rolling Update Deployments / Horizontal Autoscaling

Infrastructure:
Terraform → AWS Infrastructure → EKS + Supporting Resources`,
    story:
      "I also worked on the infrastructure and deployment side of these systems. Applications were containerized with Docker and deployed using Kubernetes/EKS. Terraform was used to define infrastructure as code, while CI/CD pipelines automated testing and deployment. Kubernetes deployment strategies such as rolling update deployments and horizontal autoscaling helped make releases more repeatable and reduce manual operational work.",
    details: [
      "Containerized backend microservices with Docker and managed deployments on AWS EKS (Kubernetes) with horizontal autoscaling.",
      "Defined cloud infrastructure as code (IaC) using Terraform for repeatable, automated provisioning of AWS resources.",
      "Built automated CI/CD pipelines with GitHub Actions / GitLab CI integrating automated testing and rolling update deployment workflows.",
      "Leveraged AWS services including EC2, RDS, S3, Lambda, SQS, IAM, and CloudWatch for operational support.",
    ],
    metrics: [
      { label: "Infra as Code", value: "Terraform" },
      { label: "Container Orchestration", value: "Kubernetes / EKS" },
      { label: "Deployments", value: "Rolling Updates" },
    ],
    tags: ["Docker", "Kubernetes", "AWS EKS", "Terraform", "CI/CD", "GitHub Actions"],
    icon: FiCloud,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="work-section" id="work" ref={containerRef}>
      <div className="work-container section-container">
        <div className="work-header-row">
          <div className="work-title-area">
            <h2>
              Selected <span>Engineering Work</span>
            </h2>
            <p className="work-disclaimer">
              * Featured projects and generalized architecture & engineering work samples from professional experience, structured to reflect individual system components and respect confidentiality.
            </p>
          </div>
          <div className="work-nav-arrows">
            <button
              className="work-nav-btn"
              onClick={prevProject}
              aria-label="Previous project"
              data-cursor="disable"
            >
              <HiChevronLeft />
            </button>
            <span className="work-counter">
              <span className="work-counter-current">0{currentIndex + 1}</span> / 0{projects.length}
            </span>
            <button
              className="work-nav-btn"
              onClick={nextProject}
              aria-label="Next project"
              data-cursor="disable"
            >
              <HiChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel View */}
        <div className="work-carousel-wrapper">
          <div
            className="work-carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div className="work-slide" key={index}>
                  <div className="work-slide-content">
                    <div className="work-slide-left">
                      <div className="work-slide-badge">0{index + 1} • {project.label}</div>
                      <h3 className="work-slide-title">{project.name}</h3>
                      <p className="work-slide-desc">{project.description}</p>
                      
                      <div className="work-slide-tools">
                        <h4>Technologies</h4>
                        <p>{project.tools}</p>
                      </div>

                      <div className="work-actions-row">
                        {project.link ? (
                          <div className="work-btn-group">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="work-live-btn"
                              data-cursor="disable"
                            >
                              Launch Live BUNKR →
                            </a>
                            <button
                              type="button"
                              className="work-live-btn secondary-btn"
                              onClick={() => setActiveModalProject(project)}
                              data-cursor="disable"
                            >
                              View Architecture →
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            className="work-live-btn"
                            onClick={() => setActiveModalProject(project)}
                            data-cursor="disable"
                          >
                            View System Architecture →
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="work-slide-right">
                      {project.image ? (
                        <WorkImage
                          image={project.image}
                          alt={project.name}
                          link={project.link}
                        />
                      ) : (
                        <div className="arch-blueprint-card">
                          <div className="arch-card-header">
                            <div className="arch-card-icon-wrap">
                              <Icon className="arch-card-icon" />
                            </div>
                            <div className="arch-card-status">
                              <span className="arch-status-dot"></span>
                              ARCHITECTURE WORK SAMPLE
                            </div>
                          </div>

                          <div className="arch-metrics-grid">
                            {project.metrics.map((m, i) => (
                              <div className="arch-metric-box" key={i}>
                                <span className="arch-metric-label">{m.label}</span>
                                <span className="arch-metric-val">{m.value}</span>
                              </div>
                            ))}
                          </div>

                          <div className="arch-tags-container">
                            {project.tags.map((tag, i) => (
                              <span className="arch-tag-pill" key={i}>
                                <FiCheckCircle className="arch-tag-icon" /> {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="work-dots-row">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`work-dot-btn ${i === currentIndex ? "active" : ""}`}
              onClick={() => goToProject(i)}
              data-cursor="disable"
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject &&
        createPortal(
          <div
            className="project-modal-overlay"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="project-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="project-modal-close"
                onClick={() => setActiveModalProject(null)}
                data-cursor="disable"
              >
                <HiXMark />
              </button>

              <div className="project-modal-badge">
                {activeModalProject.label} • {activeModalProject.category}
              </div>
              <h3 className="project-modal-title">{activeModalProject.name}</h3>

              <div className="project-modal-tools">
                <strong>Technologies:</strong> {activeModalProject.tools}
              </div>

              {/* Architecture Data Flow Diagram */}
              <div className="project-modal-flow">
                <h4>System Architecture & Flow</h4>
                <pre className="arch-flow-diagram">{activeModalProject.architectureFlow}</pre>
              </div>

              {/* Engineering Context & Story */}
              <div className="project-modal-story">
                <h4>Engineering Overview</h4>
                <p>{activeModalProject.story}</p>
              </div>

              {/* Key Bullet Points */}
              <div className="project-modal-bullets">
                <h4>Key Implementation Details</h4>
                <ul>
                  {activeModalProject.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Work;
