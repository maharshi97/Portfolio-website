export default function FooterSection() {
  const expertise = [
    "AWS & Azure Cloud Platforms",
    "Kubernetes & Container Orchestration",
    "Infrastructure as Code (Terraform)",
    "CI/CD & GitOps Pipelines",
    "Site Reliability Engineering"
  ];

  const achievements = [
    "AWS Solutions Architect Certified",
    "99% System Uptime at CRA",
    "50+ Production Incidents Resolved",
    "500+ Professional Connections"
  ];

  const socialLinks = [
    { href: "mailto:mahareshipathakk@gmail.com", icon: "fas fa-envelope" },
    { href: "https://www.linkedin.com/in/mpathak7/", icon: "fab fa-linkedin" },
    { href: "https://github.com/maharshi97", icon: "fab fa-github" }
  ];

  return (
    <footer className="bg-aws-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Maharshi Pathak</h3>
              <p className="text-gray-400 mb-4">
                DevOps & Site Reliability Engineer specializing in AWS, Azure, and Kubernetes infrastructure.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-aws-orange transition-colors">
                    <i className={`${link.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <ul className="space-y-2 text-gray-400">
                {expertise.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
              <ul className="space-y-2 text-gray-400">
                {achievements.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Maharshi Pathak. Built with modern web technologies and cloud-native principles.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
