import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Clock, Target, Sparkles, Zap, Users } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

    [heroRef, featuresRef, statsRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '75%', label: 'Less time in meetings', icon: Clock },
    { number: '50%', label: 'Faster sprint cycles', icon: Zap },
    { number: '90%', label: 'Improved team alignment', icon: Users }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B3A369]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#003057]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-lg mb-8">
              <Sparkles className="w-4 h-4 text-[#B3A369]" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Team Communication</span>
            </div>
            
            <img 
              src="/rambln_transparent_logo_full.png" 
              alt="Rambln.AI" 
              className="h-20 w-auto mx-auto mb-8 animate-float"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-[#003057] mb-8 leading-tight">
            We ramble,<br />
            <span className="gradient-text animate-gradient bg-gradient-to-r from-[#B3A369] via-[#C4B47A] to-[#B3A369]">
              so you don't have to.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            An AI middle-layer that automates standups, recaps meetings, and shortens your sprint cycles.
            <br />
            <span className="text-lg text-gray-500 mt-2 block">Keep your team aligned without the communication overhead.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/signup"
              className="group btn-primary text-white px-10 py-5 rounded-full text-lg font-medium shadow-2xl flex items-center space-x-3"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/how-it-works"
              className="text-[#003057] px-10 py-5 rounded-full text-lg font-medium border-2 border-[#003057] hover:bg-[#003057] hover:text-white transition-all duration-300 hover:shadow-xl"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-500">Trusted by forward-thinking teams</p>
            <div className="flex items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">500+</div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="text-sm text-gray-400">Teams on waitlist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#003057] to-[#004080] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#003057] mb-2">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#B3A369]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#003057]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div ref={featuresRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#003057] mb-6">
              Streamline Your Team Communication
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform chaotic team updates into clear, actionable insights that keep everyone aligned
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-10 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl card-hover border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-[#003057] to-[#004080] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#003057] mb-4">Automated Summaries</h3>
              <p className="text-gray-600 leading-relaxed">
                Turn lengthy team updates into concise, actionable summaries that highlight what matters most
              </p>
            </div>
            
            <div className="group text-center p-10 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl card-hover border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-[#B3A369] to-[#C4B47A] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#003057] mb-4">Real-time Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant clarity on project status, blockers, and team progress without constant check-ins
              </p>
            </div>
            
            <div className="group text-center p-10 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl card-hover border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-[#003057] to-[#B3A369] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#003057] mb-4">Focused Teams</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep engineers coding while PMs stay informed - everyone wins with better focus time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#003057] via-[#004080] to-[#003057] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-[#B3A369]" />
              <span className="text-sm font-medium text-white/90">Limited Early Access</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to Transform Your Team Communication?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the waitlist and be among the first to experience the future of project management. 
            Your team's productivity breakthrough is just one click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/signup"
              className="group btn-secondary text-[#003057] px-10 py-5 rounded-full text-lg font-bold shadow-2xl flex items-center space-x-3"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/features"
              className="text-white px-10 py-5 rounded-full text-lg font-medium border-2 border-white/30 hover:bg-white/10 transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
            >
              Explore Features
            </Link>
          </div>
          
          <div className="mt-16 flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-400">No credit card required • Free setup • Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;