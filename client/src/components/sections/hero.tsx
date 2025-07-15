export default function HeroSection() {
  return (
    <header className="relative gradient-aws text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-aws-orange/20 via-transparent to-azure-blue/20"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--aws-orange) 2px, transparent 2px), radial-gradient(circle at 75% 75%, var(--azure-blue) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-aws-orange bg-clip-text text-transparent">
            Maharshi Pathak
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 font-medium">
            3.5+ Years of SRE & DevOps Experience | AWS Certified | Reliability Engineering Specialist
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Site Reliability Engineer specializing in building scalable, automated infrastructure solutions on AWS and Azure. 
            Proven track record of achieving 99% uptime, resolving 50+ production incidents, and enabling development velocity through infrastructure best practices.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="mailto:mahareshipathakk@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-aws-orange transition-colors duration-300">
              <i className="fas fa-envelope"></i>
              <span>mahareshipathakk@gmail.com</span>
            </a>
            <a href="tel:+16476171256" className="flex items-center gap-2 text-gray-300 hover:text-aws-orange transition-colors duration-300">
              <i className="fas fa-phone"></i>
              <span>+1 647-617-1256</span>
            </a>
            <a href="https://www.linkedin.com/in/mpathak7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-aws-orange transition-colors duration-300">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn Profile</span>
            </a>
            <span className="flex items-center gap-2 text-gray-300">
              <i className="fas fa-map-marker-alt"></i>
              <span>Mississauga, Canada</span>
            </span>
          </div>
          
          {/* Open to Work Status */}
          <div className="bg-gradient-to-r from-aws-orange to-yellow-600 text-white px-8 py-4 rounded-full inline-block font-semibold shadow-lg">
            <i className="fas fa-briefcase mr-2"></i>
            Open to SRE, DevOps, Cloud Engineer & Platform Engineer roles
          </div>
        </div>
      </div>
    </header>
  );
}
