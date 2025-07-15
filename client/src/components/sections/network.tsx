export default function NetworkSection() {
  const networkStats = [
    {
      value: "500+",
      label: "LinkedIn Connections",
      color: "text-azure-blue",
      description: "Professional network in DevOps, SRE, and Cloud Engineering"
    },
    {
      value: "868",
      label: "LinkedIn Followers",
      color: "text-green-600",
      description: "Engaged community following my technical content"
    },
    {
      value: "125",
      label: "Post Impressions",
      color: "text-aws-orange",
      description: "Recent technical insights and career updates"
    }
  ];

  return (
    <section className="py-20 bg-neutral-light animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 aws-dark">Professional Network</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aws-orange to-azure-blue mx-auto mb-12"></div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {networkStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                  <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold aws-dark mb-4">Recent Professional Activity</h4>
              <div className="bg-gradient-to-r from-aws-orange/10 to-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  <strong>"Thrilled to Announce: I'm Now an AWS Certified Solutions Architect - Associate!"</strong>
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Recent LinkedIn post celebrating AWS certification achievement, highlighting expertise in 
                  designing resilient architectures, implementing security best practices, and building cost-optimized infrastructures.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>👍 53 reactions</span>
                  <span>💬 18 comments</span>
                  <span>🔄 1 repost</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
