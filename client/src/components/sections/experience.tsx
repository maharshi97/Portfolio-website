export default function ExperienceSection() {
  const achievements = [
    "Deployed microservices on AWS EKS/Azure AKS, improving scalability for 1,000+ users",
    "Automated operations with Python/Shell scripts, reducing ticket resolution time by 20%",
    "Achieved 99% uptime through proactive monitoring with CloudWatch, Prometheus, Grafana",
    "Implemented Infrastructure as Code with Terraform, enabling consistent deployments"
  ];

  const responsibilities = [
    "Built CI/CD pipelines with Jenkins, GitHub Actions, and Argo CD",
    "Resolved 50+ production incidents with 95%+ SLA compliance",
    "Improved incident resolution time by 25% through better observability",
    "Cross-functional collaboration with DevOps, network, and security teams"
  ];

  const metrics = [
    { value: "99%", label: "System Uptime", color: "text-green-600" },
    { value: "50+", label: "Incidents Resolved", color: "text-azure-blue" },
    { value: "25%", label: "Faster Resolution", color: "text-aws-orange" },
    { value: "95%", label: "SLA Compliance", color: "text-purple-600" }
  ];

  return (
    <section className="py-20 bg-neutral-light animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 aws-dark">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aws-orange to-azure-blue mx-auto mb-16"></div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold aws-dark mb-2">IT Infrastructure Analyst</h3>
                <h4 className="text-xl azure-blue font-semibold mb-2">Canada Revenue Agency</h4>
                <p className="text-gray-600 font-medium">Aug 2021 - Present • 3.5+ years</p>
                <p className="text-gray-500">Mississauga, Ontario, Canada</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-6 py-3 rounded-full font-bold text-lg">
                  99% Uptime Achieved
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              As an IT Infrastructure Support Analyst at CRA, I ensured the reliability and scalability of critical government systems 
              through automation, troubleshooting, observability, and infrastructure optimization. My work laid a strong foundation 
              for adopting DevOps and SRE practices within enterprise environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold aws-dark mb-4">🚀 Key Achievements</h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-600 mt-1"></i>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold aws-dark mb-4">🔧 Technical Responsibilities</h4>
                <ul className="space-y-3">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <i className="fas fa-cog azure-blue mt-1"></i>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Impact Metrics */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold aws-dark mb-6">📊 Quantified Impact</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
