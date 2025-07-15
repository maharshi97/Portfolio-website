export default function SkillsSection() {
  const skillCategories = [
    {
      icon: "fas fa-server",
      title: "Infrastructure & Systems",
      color: "text-aws-orange",
      skills: [
        { name: "Linux Administration", color: "bg-aws-orange/10 text-aws-orange" },
        { name: "AWS EC2/VPC", color: "bg-aws-orange/10 text-aws-orange" },
        { name: "Azure AKS", color: "bg-azure-blue/10 text-azure-blue" },
        { name: "Kubernetes", color: "bg-green-100 text-green-800" },
        { name: "Terraform", color: "bg-blue-100 text-blue-800" },
        { name: "Docker", color: "bg-purple-100 text-purple-800" }
      ]
    },
    {
      icon: "fas fa-chart-line",
      title: "Monitoring & Observability",
      color: "text-azure-blue",
      skills: [
        { name: "Prometheus", color: "bg-red-100 text-red-800" },
        { name: "Grafana", color: "bg-yellow-100 text-yellow-800" },
        { name: "CloudWatch", color: "bg-aws-orange/10 text-aws-orange" },
        { name: "ELK Stack", color: "bg-gray-100 text-gray-800" },
        { name: "SLI/SLO", color: "bg-green-100 text-green-800" },
        { name: "Incident Response", color: "bg-blue-100 text-blue-800" }
      ]
    },
    {
      icon: "fas fa-cogs",
      title: "DevOps & Automation",
      color: "text-green-600",
      skills: [
        { name: "Jenkins", color: "bg-blue-100 text-blue-800" },
        { name: "GitHub Actions", color: "bg-gray-100 text-gray-800" },
        { name: "Argo CD", color: "bg-purple-100 text-purple-800" },
        { name: "GitOps", color: "bg-green-100 text-green-800" },
        { name: "Python", color: "bg-yellow-100 text-yellow-800" },
        { name: "Shell Scripting", color: "bg-gray-100 text-gray-800" }
      ]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security & Compliance",
      color: "text-red-600",
      skills: [
        { name: "IAM", color: "bg-red-100 text-red-800" },
        { name: "RBAC", color: "bg-purple-100 text-purple-800" },
        { name: "TLS/SSL", color: "bg-green-100 text-green-800" },
        { name: "Secrets Management", color: "bg-blue-100 text-blue-800" },
        { name: "SonarQube", color: "bg-yellow-100 text-yellow-800" },
        { name: "Compliance", color: "bg-gray-100 text-gray-800" }
      ]
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Reliability & Performance",
      color: "text-purple-600",
      skills: [
        { name: "SLOs/SLIs", color: "bg-green-100 text-green-800" },
        { name: "Load Testing", color: "bg-blue-100 text-blue-800" },
        { name: "Autoscaling", color: "bg-purple-100 text-purple-800" },
        { name: "HPA", color: "bg-yellow-100 text-yellow-800" },
        { name: "Performance Tuning", color: "bg-red-100 text-red-800" },
        { name: "Capacity Planning", color: "bg-gray-100 text-gray-800" }
      ]
    },
    {
      icon: "fas fa-users",
      title: "Collaboration & Communication",
      color: "text-indigo-600",
      skills: [
        { name: "Cross-functional Teams", color: "bg-indigo-100 text-indigo-800" },
        { name: "Runbooks", color: "bg-blue-100 text-blue-800" },
        { name: "Postmortems", color: "bg-purple-100 text-purple-800" },
        { name: "Incident Playbooks", color: "bg-green-100 text-green-800" },
        { name: "Documentation", color: "bg-yellow-100 text-yellow-800" },
        { name: "Knowledge Transfer", color: "bg-red-100 text-red-800" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-neutral-light animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 aws-dark">SRE Skills & Competencies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aws-orange to-azure-blue mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover">
                <div className="flex items-center mb-6">
                  <i className={`${category.icon} text-3xl ${category.color} mr-4`}></i>
                  <h3 className="text-xl font-semibold aws-dark">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`${skill.color} px-3 py-1 rounded-full text-sm font-medium`}>
                        {skill.name}
                      </span>
                    ))}
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
