export default function ContactSection() {
  const openToRoles = [
    { name: "Site Reliability Engineer", color: "bg-green-600" },
    { name: "DevOps Engineer", color: "bg-blue-600" },
    { name: "Cloud Engineer", color: "bg-purple-600" },
    { name: "Platform Engineer", color: "bg-red-600" }
  ];

  return (
    <section className="py-20 bg-neutral-light text-black animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Build Reliable Systems Together?</h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Looking for a Site Reliability Engineer who can bring calm to chaos, improve systems through automation, 
            and proactively prevent incidents? Let's connect and discuss how I can help your team achieve 99.9% uptime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="mailto:mahareshipathakk@gmail.com" className="bg-aws-orange hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </a>
            <a href="https://www.linkedin.com/in/mpathak7/" target="_blank" rel="noopener noreferrer" className="bg-azure-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
              <i className="fab fa-linkedin"></i>
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
            <p className="text-gray-300 mb-2">
              <strong>Open to opportunities in:</strong>
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {openToRoles.map((role, index) => (
                <span key={index} className={`${role.color} text-white px-4 py-2 rounded-full text-sm`}>
                  {role.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
