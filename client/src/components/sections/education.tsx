export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Lakehead University",
      period: "September 2019 - May 2021",
      location: "Thunder Bay, Canada",
      gpa: "3.7/4.0",
      coursework: "Cloud Computing, Deep Learning, Software Engineering Principles, Security"
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Charotar University of Science & Technology",
      period: "July 2015 - April 2019",
      location: "Gujarat, India",
      gpa: "8.62/10",
      coursework: "Data Structures, Operating Systems, Web Technologies"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issued: "March 2025",
      expires: "March 2028",
      icon: "fab fa-aws",
      color: "from-aws-orange/10 to-yellow-50 border-aws-orange/20",
      iconColor: "text-aws-orange",
      tags: [
        { name: "Cloud Architecture", color: "bg-aws-orange/10 text-aws-orange" },
        { name: "Security", color: "bg-blue-100 text-blue-800" },
        { name: "Cost Optimization", color: "bg-green-100 text-green-800" }
      ]
    },
    {
      name: "Learning NoSQL Databases",
      issuer: "LinkedIn Learning",
      issued: "June 2020",
      icon: "fab fa-linkedin",
      color: "from-blue-50 to-indigo-50 border-blue-200",
      iconColor: "text-blue-600",
      tags: []
    },
    {
      name: "Big Data Foundations - Level 1",
      issuer: "IBM",
      issued: "Verified Achievement",
      icon: "fas fa-database",
      color: "from-gray-50 to-blue-50 border-gray-200",
      iconColor: "text-blue-600",
      tags: []
    }
  ];

  return (
    <section className="py-20 bg-neutral-light animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 aws-dark">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aws-orange to-azure-blue mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold aws-dark mb-8">🎓 Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg card-hover">
                    <h4 className="text-xl font-semibold aws-dark mb-2">{edu.degree}</h4>
                    <p className="azure-blue font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600 mb-3">{edu.period} • {edu.location}</p>
                    <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>
                    <p className="text-sm text-gray-600 mt-2">{edu.coursework}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold aws-dark mb-8">🏆 Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className={`bg-white border border-gray-200 p-6 rounded-xl shadow-lg card-hover`}>
                    <div className="flex items-center gap-4 mb-4">
                      <i className={`${cert.icon} text-3xl ${cert.iconColor}`}></i>
                      <div>
                        <h4 className="text-xl font-semibold aws-dark">{cert.name}</h4>
                        <p className="text-gray-600">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Issued: {cert.issued}</span>
                      {cert.expires && (
                        <>
                          <span>•</span>
                          <span>Expires: {cert.expires}</span>
                        </>
                      )}
                    </div>
                    {cert.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cert.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={`${tag.color} px-3 py-1 rounded-full text-sm`}>
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}
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
