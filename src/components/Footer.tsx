import React from "react";
import {
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Home,
  BookOpen,
  HelpCircle,
  FileText,
  Users,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Star Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Large Stars */}
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-48 left-1/2 w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-64 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-80 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>

        {/* Medium Stars */}
        <div className="absolute top-16 right-1/2 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-40 left-3/4 w-0.5 h-0.5 bg-orange-200 rounded-full animate-pulse delay-800"></div>
        <div className="absolute top-56 right-1/5 w-0.5 h-0.5 bg-green-200 rounded-full animate-pulse delay-1300"></div>
        <div className="absolute top-72 left-1/5 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1800"></div>
        <div className="absolute bottom-32 right-1/3 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-2300"></div>

        {/* Small Stars */}
        <div className="absolute top-24 left-1/6 w-px h-px bg-white rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-36 right-1/6 w-px h-px bg-orange-100 rounded-full animate-pulse delay-600"></div>
        <div className="absolute top-52 left-2/3 w-px h-px bg-blue-100 rounded-full animate-pulse delay-1100"></div>
        <div className="absolute top-68 right-2/3 w-px h-px bg-green-100 rounded-full animate-pulse delay-1600"></div>
        <div className="absolute bottom-48 left-1/2 w-px h-px bg-white rounded-full animate-pulse delay-2100"></div>
        <div className="absolute bottom-36 right-1/4 w-px h-px bg-blue-100 rounded-full animate-pulse delay-2600"></div>

        {/* Twinkling Stars */}
        <div className="absolute top-28 right-1/5 w-0.5 h-0.5 bg-yellow-200 rounded-full animate-ping"></div>
        <div className="absolute top-44 left-4/5 w-0.5 h-0.5 bg-cyan-200 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-0.5 h-0.5 bg-purple-200 rounded-full animate-ping delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                <span className="text-lg sm:text-xl font-bold text-white">
                  PL
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 flex items-center gap-2.5 to-orange-600 bg-clip-text text-transparent">
                About{" "}
                <div className="flex items-center">
                  <Image
                    src="/image/logo.png" // make sure it's in the public folder
                    alt="Price Lesson Logo"
                    width={128} // your logo width
                    height={48} // your logo height
                  />
                </div>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              At Price Lesson, we believe financial education should be simple,
              practical, and affordable. Our mission is to help every student,
              professional, and family learn trading, investing, and personal
              finance — so they can build true financial freedom.
            </p>

            {/* Success Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                <div className="text-lg sm:text-2xl font-bold text-blue-400">
                  10K+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Students</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                <div className="text-lg sm:text-2xl font-bold text-green-400">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Courses</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm border border-orange-500/20 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                <div className="text-lg sm:text-2xl font-bold text-orange-400">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Success Rate
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 flex items-center space-x-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Quick Links</span>
            </h3>
            <nav className="space-y-2 sm:space-y-3">
              {[
                { icon: Home, text: "Home", href: "/" },
                { icon: BookOpen, text: "Courses", href: "/courses" },
                { icon: HelpCircle, text: "FAQs", href: "/faqs" },
                { icon: FileText, text: "Blog / Resources", href: "/blog" },
                { icon: MessageCircle, text: "Contact Us", href: "/contact" },
                { icon: Users, text: "About Us", href: "/about" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 group text-sm sm:text-base"
                >
                  <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                  <span className="group-hover:text-white">{item.text}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Connect & Contact */}
          <div className="space-y-6 sm:space-y-8">
            {/* Social Media */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-3 sm:mb-4">
                Connect With Us
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  {
                    icon: Youtube,
                    text: "Price Lesson Hindi",
                    color: "hover:text-red-400",
                    url: "https://www.youtube.com/@Pricelessonhindi",
                  },
                  {
                    icon: Instagram,
                    text: "@pricelesson",
                    color: "hover:text-pink-400",
                    url: "https://www.instagram.com/wealthlesson500/?utm_source=qr&r=nametag",
                  },
                  {
                    icon: Facebook,
                    text: "Price Lesson",
                    color: "hover:text-blue-400",
                    url: "https://www.facebook.com/share/1Esirow823/",
                  },
                  {
                    icon: Linkedin,
                    text: "Price Lesson",
                    color: "hover:text-blue-600",
                    url: "https://www.linkedin.com/company/price-lesson/",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 sm:space-x-3 text-gray-300 ${social.color} transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 text-sm sm:text-base`}
                  >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">{social.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3 sm:mb-4">
                Contact
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <a
                  href="mailto:support@pricelesson.com"
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 text-sm sm:text-base"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                  <span className="break-all">contact@pricelesson.in</span>
                </a>
                <a
                  href="tel:+91-8578064265"
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 text-sm sm:text-base"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                  <span>+91-8578064265</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-6 bg-gradient-to-r from-yellow-500/10 via-orange-500/5 to-red-500/10 border border-yellow-500/20 rounded-lg sm:rounded-xl">
          <h4 className="text-yellow-400 font-semibold mb-2 flex items-center text-sm sm:text-base">
            <span className="mr-2">⚠️</span>
            Disclaimer
          </h4>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Price Lesson provides educational content related to the stock
            market, investing, and trading. We are not SEBI registered advisors.
            All information shared is for learning purposes only. Trading and
            investing involve risk — please consult your financial advisor
            before making investment decisions.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © Copyright 2025 Price Lesson. All Rights Reserved.
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms&conditions"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500"></div>
    </footer>
  );
};

export default Footer;
