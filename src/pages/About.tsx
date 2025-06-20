import React, { useEffect, useRef } from 'react';
import { Target, Users, Lightbulb, Heart, Zap, Shield, ArrowRight } from 'lucide-react';

const About = () => {
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    [missionRef, valuesRef, founderRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Users,
      title: "Team First",
      description: "We believe great software comes from great teams. Our tools amplify human collaboration, never replace it.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Simplicity",
      description: "Complex problems deserve elegant solutions. We make powerful AI feel effortless and intuitive.",
      color: "from-[#B3A369] to-[#C4B47A]"
    },
    {
      icon: Target,
      title: "Focus",
      description: "Every feature we build serves one purpose: helping teams focus on building amazing products.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand the daily struggles of software teams because we've lived them ourselves.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI while keeping human needs at the center.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Your team's data and communications are sacred. We build with privacy and security first.",
      color: "from-[#003057] to-[#004080]"
    }
  ];

  const stats = [
    { number: "500+", label: "Teams on waitlist" },
    { number: "50+", label: "Companies interested" },
    { number: "2025", label: "Founded" },
    { number: "100%", label: "Team satisfaction" }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#B3A369]/10 px-4 py-2 rounded-full border border-[#B3A369]/20 mb-8">
            <Heart className="w-4 h-4 text-[#B3A369]" />
            <span className="text-sm font-medium text-[#003057]">Our Story</span>
          </div>
          
          <h1 className="text-6xl font-bold text-[#003057] mb-8">
            About Rambln.AI
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to eliminate communication friction in software development teams, 
            one intelligent automation at a time.
          </p>
        </div>

        {/* Mission Section */}
        <div ref={missionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 opacity-0">
          <div>
            <h2 className="text-4xl font-bold text-[#003057] mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Every day, talented engineers spend hours in meetings, writing status updates, and explaining their work instead of building amazing products. Project managers struggle to get clear visibility into progress without constantly interrupting their teams.
              </p>
              <p>
                This communication overhead isn't just inefficient—it's soul-crushing. It turns passionate builders into reluctant reporters and transforms creative problem-solving into administrative busywork.
              </p>
              <p className="text-[#003057] font-semibold">
                Rambln.AI bridges this gap with intelligent automation that keeps everyone informed while preserving focus time for what matters most: creating exceptional software.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-[#003057] to-[#004080] rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#B3A369]/30 rounded-full blur-xl"></div>
              
              <div className="relative text-center">
                <Target className="w-20 h-20 mx-auto mb-8 text-[#B3A369]" />
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  A world where software teams communicate effortlessly, stay perfectly aligned, and ship faster than ever before—without sacrificing the human connections that make great teams great.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg card-hover border border-gray-100">
              <div className="text-3xl font-bold text-[#003057] mb-2">{stat.number}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div ref={valuesRef} className="mb-24 opacity-0">
          <h2 className="text-4xl font-bold text-[#003057] text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-8 bg-white rounded-2xl shadow-lg card-hover border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003057] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div ref={founderRef} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-16 shadow-xl border border-gray-100 mb-24 opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003057] mb-4">
              Meet the Founder
            </h2>
            <p className="text-lg text-gray-600">
              Built by someone who's lived the pain of inefficient team communication
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-[#003057] to-[#B3A369] rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-60 h-60 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-500 mb-2">👨‍💻</div>
                      <span className="text-lg font-bold text-gray-600">Founder</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#B3A369] rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left space-y-6">
                <h3 className="text-3xl font-bold text-[#003057]">
                  Junhyuk Hur
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    After years of seeing leading engineering teams and experiencing firsthand the communication challenges that slow down great teams, I founded Rambln.AI to solve this problem once and for all.
                  </p>
                  <p>
                    I saw how much time talented engineers spent explaining their work instead of doing it. I watched brilliant minds get bogged down in status meetings and progress reports when they could have been building the future.
                  </p>
                  <p className="text-[#003057] font-semibold">
                    Rambln.AI is my solution to give that time back to the builders, the creators, the teams who change the world one line of code at a time.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="https://www.linkedin.com/in/junhyuk-hur/" className="text-[#003057] hover:text-[#B3A369] font-medium transition-colors duration-200">
                    LinkedIn →
                  </a>
                  <a href="https://x.com/Rambln_AI" className="text-[#003057] hover:text-[#B3A369] font-medium transition-colors duration-200">
                    Twitter →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#003057] via-[#004080] to-[#003057] rounded-3xl p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the growing community of teams who've discovered the power of intelligent communication automation. 
              Your productivity breakthrough starts here.
            </p>
            <a
              href="/signup"
              className="btn-secondary text-[#003057] px-10 py-5 rounded-full text-lg font-bold shadow-2xl inline-flex items-center space-x-3"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
