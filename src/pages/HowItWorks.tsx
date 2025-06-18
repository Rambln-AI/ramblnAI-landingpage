import React, { useEffect, useRef } from 'react';
import { Users, Brain, Eye, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-slide-in-left');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepsRef.current) observer.observe(stepsRef.current);
    if (flowRef.current) observer.observe(flowRef.current);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Users,
      title: "Team Updates Flow Naturally",
      description: "Your team continues their normal workflow - standups, Slack messages, meeting notes, and code commits all flow into Rambln.AI automatically through seamless integrations.",
      details: ["Slack integration", "Meeting transcripts", "Jira updates", "GitHub activity"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI Processes & Understands",
      description: "Our intelligent system processes all communications in real-time, identifying blockers, progress updates, critical decisions, and extracting actionable insights from the noise.",
      details: ["Natural language processing", "Context understanding", "Priority detection", "Smart categorization"],
      color: "from-[#B3A369] to-[#C4B47A]"
    },
    {
      icon: Eye,
      title: "PMs Get Crystal Clear Insights",
      description: "Project managers receive clean, organized summaries with actionable insights, clear next steps, and early warning signals about potential issues before they become problems.",
      details: ["Executive summaries", "Risk alerts", "Progress tracking", "Action items"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Engineers Stay in the Zone",
      description: "Development teams spend less time in meetings and explaining their work, more time building amazing products, while staying perfectly aligned with project goals and team priorities.",
      details: ["Reduced meeting time", "Async communication", "Focus preservation", "Automatic updates"],
      color: "from-[#003057] to-[#004080]"
    }
  ];

  const benefits = [
    "75% reduction in meeting time",
    "50% faster sprint cycles", 
    "90% improved team alignment",
    "Zero workflow disruption"
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#B3A369]/10 px-4 py-2 rounded-full border border-[#B3A369]/20 mb-8">
            <Brain className="w-4 h-4 text-[#B3A369]" />
            <span className="text-sm font-medium text-[#003057]">Intelligent Automation</span>
          </div>
          
          <h1 className="text-6xl font-bold text-[#003057] mb-8">
            How Rambln.AI Works
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A simple, four-step process that transforms chaotic team communication into clear, actionable insights. 
            No workflow changes required - just better results.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="space-y-24 mb-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-16 opacity-0`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-gray-200">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold text-[#003057] mb-6">
                  {step.title}
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {step.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#B3A369]" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-16 shadow-2xl border border-gray-100">
                    <div className={`w-40 h-40 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto opacity-20 animate-float`}>
                      <step.icon className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  
                  {/* Connection line to next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-8 h-8 text-[#B3A369] animate-bounce" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div ref={flowRef} className="bg-gradient-to-br from-[#003057] via-[#004080] to-[#003057] rounded-3xl p-16 text-white relative overflow-hidden opacity-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-center mb-16">
              The Complete Transformation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {['Input', 'Process', 'Analyze', 'Deliver'].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#B3A369] to-[#C4B47A] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-3xl font-bold text-[#003057]">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#B3A369] to-[#C4B47A] mx-auto rounded-full"></div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8">Proven Results</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <CheckCircle className="w-6 h-6 text-[#B3A369] mx-auto mb-2" />
                    <p className="text-sm font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-[#003057] mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of teams who've already discovered the power of intelligent communication automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="btn-primary text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/features"
              className="text-[#003057] px-8 py-4 rounded-full text-lg font-medium border-2 border-[#003057] hover:bg-[#003057] hover:text-white transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;