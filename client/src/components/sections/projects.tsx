export default function ProjectsSection() {
  const projects = [
    {
      title: "Remote Job Checker AI Agent",
      subtitle: "AI + Playwright + AWS Automation",
      period: "July 2025 - Present",
      github: "https://github.com/maharshi97/AI-Job-checker-/blob/master/README.md",
      description: "Designed and deployed an intelligent agent that automates remote job search by scanning job boards, extracting relevant roles using OpenAI GPT-4, and emailing daily updates with serverless AWS architecture.",
      features: [
        "Playwright for programmatic job board browsing",
        "OpenAI GPT-4 for intelligent job listing parsing",
        "Automated filtering for DevOps/SRE/Cloud roles",
        "Gmail SMTP integration for daily alerts"
      ],
      competencies: [
        { name: "AWS Lambda", color: "bg-aws-orange/10 text-aws-orange" },
        { name: "CloudWatch", color: "bg-azure-blue/10 text-azure-blue" },
        { name: "Automation", color: "bg-green-100 text-green-800" },
        { name: "CI/CD", color: "bg-blue-100 text-blue-800" },
        { name: "Python", color: "bg-purple-100 text-purple-800" }
      ],
      gradient: "from-aws-dark to-gray-800"
    },
    {
      title: "Azure AKS 3-Tier Application",
      subtitle: "Kubernetes Orchestration & Performance Optimization",
      period: "May 2025 - June 2025",
      description: "Orchestrated end-to-end deployment of a 3-tier e-commerce application on Azure AKS, managing 10+ polyglot microservices with databases and implementing high availability patterns.",
      features: [
        "Helm charts for consistent deployments",
        "StatefulSets with Azure Disks for persistence",
        "Multi-zone deployment for fault tolerance",
        "Performance optimization and scaling"
      ],
      competencies: [
        { name: "Azure AKS", color: "bg-azure-blue/10 text-azure-blue" },
        { name: "Kubernetes", color: "bg-green-100 text-green-800" },
        { name: "Helm", color: "bg-purple-100 text-purple-800" },
        { name: "High Availability", color: "bg-blue-100 text-blue-800" },
        { name: "Performance", color: "bg-yellow-100 text-yellow-800" }
      ],
      gradient: "from-azure-blue to-blue-700"
    },
    {
      title: "AWS EKS Three-Tier Application",
      subtitle: "Microservices & Infrastructure as Code",
      period: "Project Timeline",
      description: "Deployed a 3-tier e-commerce application on AWS EKS by containerizing 8+ microservices across multiple languages, implementing modular scaling and automated provisioning.",
      features: [
        "Containerized 8+ microservices (Java, Python, Go, PHP)",
        "Custom Helm charts for 15+ Kubernetes resources",
        "Reduced manual provisioning by 75%",
        "Version-controlled deployments across environments"
      ],
      competencies: [
        { name: "AWS EKS", color: "bg-aws-orange/10 text-aws-orange" },
        { name: "Kubernetes", color: "bg-green-100 text-green-800" },
        { name: "Helm", color: "bg-purple-100 text-purple-800" },
        { name: "Infrastructure as Code", color: "bg-blue-100 text-blue-800" },
        { name: "Microservices", color: "bg-yellow-100 text-yellow-800" }
      ],
      gradient: "from-aws-orange to-orange-700"
    },
    {
      title: "Terraform Multi-Cloud Infrastructure",
      subtitle: "Infrastructure Automation & Compliance",
      period: "Ongoing Project",
      description: "Built automated infrastructure provisioning using Terraform with multi-cloud support, implementing security best practices and compliance standards across AWS and Azure.",
      features: [
        "Multi-cloud infrastructure as code",
        "Automated compliance checks",
        "Security scanning and hardening",
        "Cost optimization strategies"
      ],
      competencies: [
        { name: "Terraform", color: "bg-purple-100 text-purple-800" },
        { name: "Multi-Cloud", color: "bg-green-100 text-green-800" },
        { name: "Security", color: "bg-red-100 text-red-800" },
        { name: "Compliance", color: "bg-blue-100 text-blue-800" },
        { name: "Cost Optimization", color: "bg-yellow-100 text-yellow-800" }
      ],
      gradient: "from-purple-600 to-indigo-700"
    }
  ];

  return (
    <section className="py-20 bg-neutral-light animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 aws-dark">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aws-orange to-azure-blue mx-auto mb-16"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover overflow-hidden">
                <div className={`bg-gradient-to-r ${project.gradient} text-white p-6`}>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.subtitle}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-calendar-alt"></i>
                      {project.period}
                    </span>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-aws-orange transition-colors">
                        <i className="fab fa-github"></i>
                        View Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold aws-dark mb-2">Key Features</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold aws-dark mb-2">SRE Competencies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.competencies.map((competency, compIndex) => (
                          <span key={compIndex} className={`${competency.color} px-3 py-1 rounded-full text-sm`}>
                            {competency.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}