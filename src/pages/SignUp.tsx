import React, { useState } from 'react';
import { Check, Mail, MessageSquare, ArrowRight, Sparkles, Users, Shield, Zap } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    role: '',
    teamSize: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: Zap,
      title: "Early Access",
      description: "Be first to experience Rambln.AI before public launch"
    },
    {
      icon: Users,
      title: "Free Setup",
      description: "Complimentary onboarding and team training"
    },
    {
      icon: MessageSquare,
      title: "Direct Feedback",
      description: "Shape the product with your input and suggestions"
    },
    {
      icon: Shield,
      title: "Exclusive Pricing",
      description: "Special rates locked in for early adopters"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#B3A369] to-[#C4B47A]"></div>
            
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce shadow-lg">
              <Check className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-[#003057] mb-6">
              Welcome to the Future!
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Thanks for joining the Rambln.AI waitlist. You're now part of an exclusive group of forward-thinking teams.
            </p>
            
            <div className="bg-gradient-to-br from-[#B3A369]/10 to-[#C4B47A]/10 rounded-2xl p-6 mb-8 border border-[#B3A369]/20">
              <h3 className="font-bold text-[#003057] mb-2">What happens next?</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• We'll send you exclusive updates and previews</li>
                <li>• Early access invitation (coming soon)</li>
                <li>• Free onboarding when you're ready</li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-500">
              Keep an eye on your inbox for updates and exclusive previews.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#B3A369]/10 px-4 py-2 rounded-full border border-[#B3A369]/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#B3A369]" />
            <span className="text-sm font-medium text-[#003057]">Limited Early Access</span>
          </div>
          
          <h1 className="text-6xl font-bold text-[#003057] mb-8">
            Get Early Access
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the waitlist and be among the first to experience the future of team communication. 
            Transform how your team collaborates, starting today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B3A369] to-[#C4B47A]"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-4 rounded-xl text-lg focus:ring-2 focus:ring-[#B3A369] focus:border-transparent transition-all duration-200"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-4 rounded-xl text-lg focus:ring-2 focus:ring-[#B3A369] focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-3">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-4 rounded-xl text-lg focus:ring-2 focus:ring-[#B3A369] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select your role</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="engineering-manager">Engineering Manager</option>
                    <option value="software-engineer">Software Engineer</option>
                    <option value="product-manager">Product Manager</option>
                    <option value="cto">CTO</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-sm font-semibold text-gray-700 mb-3">
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-4 rounded-xl text-lg focus:ring-2 focus:ring-[#B3A369] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5 people</option>
                    <option value="6-15">6-15 people</option>
                    <option value="16-50">16-50 people</option>
                    <option value="51-200">51-200 people</option>
                    <option value="200+">200+ people</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Tell us about your team's communication challenges (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-4 rounded-xl text-lg focus:ring-2 focus:ring-[#B3A369] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="What communication pain points does your team face? How much time do you spend in meetings vs. building?"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary text-white py-5 px-6 rounded-xl font-bold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="loading-dots">Joining waitlist</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    <span>Join the Waitlist</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#003057] to-[#004080] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#B3A369]/30 rounded-full blur-xl"></div>
              
              <div className="relative">
                <h3 className="text-3xl font-bold mb-8">What You'll Get</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#B3A369] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <benefit.icon className="w-6 h-6 text-[#003057]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-8 h-8 text-[#003057]" />
                <h3 className="text-2xl font-bold text-[#003057]">Join the Community</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with other forward-thinking teams who are transforming their communication workflows. 
                Share insights, best practices, and shape the future of team collaboration.
              </p>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#B3A369]/10 to-[#C4B47A]/10 rounded-xl border border-[#B3A369]/20">
                <div>
                  <div className="text-2xl font-bold text-[#003057]">500+</div>
                  <div className="text-sm text-gray-600">Teams already joined</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#003057]">50+</div>
                  <div className="text-sm text-gray-600">Companies interested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;