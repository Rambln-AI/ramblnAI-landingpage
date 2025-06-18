import React, { useEffect, useRef } from 'react';
import { MessageSquare, FileText, BarChart3, Zap, Slack, Calendar, GitBranch, Bell, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const integrationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (integrationsRef.current) observer.observe(integrationsRef.current);

    return () => observer.disconnect();
  }, []);

  const mainFeatures = [
    {
      icon: MessageSquare,
      title: "Automated Standup Summaries",
      description: "Transform daily standups into concise, actionable summaries that highlight progress, blockers, and next steps without the meeting fatigue.",
      benefits: ["Save 30+ minutes daily", "Never miss important updates", "Clear action items", "Async-friendly format"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "AI-Powered Meeting Notes",
      description: "Automatically capture, organize, and distribute meeting insights with key decisions and follow-ups clearly highlighted and searchable.",
      benefits: ["Zero manual note-taking", "Searchable meeting history", "Automatic follow-up tracking", "Smart action item extraction"],
      gradient: "from-[#B3A369] to-[#C4B47A]"
    },
    {
      icon: BarChart3,
      title: "Real-time Sprint Insights",
      description: "Get instant visibility into sprint progress, velocity trends, and potential roadblocks before they impact delivery timelines.",
      benefits: ["Predictive sprint analytics", "Early risk detection", "Data-driven decisions", "Velocity optimization"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Smart Integrations",
      description: "Seamlessly connect with your existing tools - Slack, Jira, GitHub, and more - without changing your workflow or learning new systems.",
      benefits: ["Works with existing tools", "No workflow disruption", "Universal compatibility", "One-click setup"],
      gradient: "from-[#003057] to-[#004080]"
    }
  ];

  const integrations = [
    { 
      icon: Slack, 
      name: "Slack", 
      description: "Direct integration with channels and DMs",
      features: ["Channel summaries", "DM insights", "Bot interactions"]
    },
    { 
      icon: Calendar, 
      name: "Calendar", 
      description: "Sync with Google Calendar and Outlook",
      features: ["Meeting prep", "Auto-scheduling", "Time blocking"]
    },
    { 
      icon: GitBranch, 
      name: "GitHub", 
      description: "Track commits and pull requests",
      features: ["Code activity", "PR summaries", "Release notes"]
    },
    { 
      icon: Bell, 
      name: "Jira", 
      description: "Automatic ticket status updates",
      features: ["Sprint tracking", "Burndown charts", "Issue insights"]
    }
  ];

  const useCases = [
    {
      title: "For Project Managers",
      description: "Get complete visibility without micromanaging",
      points: ["Real-time project health", "Automated status reports", "Risk early warning system"]
    },
    {
      title: "For Engineering Teams", 
      description: "Stay focused on coding, not communication",
      points: ["Reduced meeting overhead", "Async status updates", "Context preservation"]
    },
    {
      title: "For Remote Teams",
      description: "Bridge time zones and communication gaps", 
      points: ["24/7 activity summaries", "Cross-timezone coordination", "Async-first workflows"]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#B3A369]/10 px-4 py-2 rounded-full border border-[#B3A369]/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#B3A369]" />
            <span className="text-sm font-medium text-[#003057]">Powerful Features</span>
          </div>
          
          <h1 className="text-6xl font-bold text-[#003057] mb-8">
            Everything You Need
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive tools to streamline team communication and accelerate project delivery. 
            Built for modern teams who value both efficiency and quality.
          </p>
        </div>

        {/* Main Features */}
        <div ref={featuresRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="feature-card group bg-white rounded-3xl p-10 shadow-xl card-hover border border-gray-100 opacity-0 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-3xl opacity-50"></div>
              
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#003057] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#B3A369] flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003057] mb-4">
              Built for Every Team
            </h2>
            <p className="text-lg text-gray-600">
              Tailored solutions for different roles and team structures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100">
                <h3 className="text-xl font-bold text-[#003057] mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#B3A369] rounded-full"></div>
                      <span className="text-sm text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations Section */}
        <div ref={integrationsRef} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-16 mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-10 right-10 w-64 h-64 bg-[#B3A369]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#003057]/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#003057] mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg text-gray-600">
                Connect with the tools your team already uses and loves
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg card-hover border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#003057] to-[#004080] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <integration.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-[#003057] mb-2 text-lg">{integration.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
                  <div className="space-y-1">
                    {integration.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-gray-500">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Summary */}
        <div className="bg-gradient-to-br from-[#003057] via-[#004080] to-[#003057] rounded-3xl p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Teams Choose Rambln.AI
            </h2>
            <p className="text-xl text-gray-300">
              Proven results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#B3A369] mb-4">75%</div>
              <p className="text-xl font-medium">Less time in meetings</p>
              <p className="text-sm text-gray-400 mt-2">Average reduction across all teams</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#B3A369] mb-4">50%</div>
              <p className="text-xl font-medium">Faster sprint cycles</p>
              <p className="text-sm text-gray-400 mt-2">Improved delivery velocity</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#B3A369] mb-4">90%</div>
              <p className="text-xl font-medium">Improved team alignment</p>
              <p className="text-sm text-gray-400 mt-2">Better cross-team coordination</p>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/signup"
              className="btn-secondary text-[#003057] px-10 py-5 rounded-full text-lg font-bold shadow-2xl inline-flex items-center space-x-3"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;