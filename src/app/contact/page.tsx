"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  User,
  MessageCircle,
  Globe,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";
import Footer from "@/components/Footer";

// Define form data interface
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden pt-28">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-green-500/10 to-blue-500/10"></div>
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        <div className="relative z-10 container mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight">
              Contact Us
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              At{" "}
              <span className="text-orange-400 font-semibold">
                Price Lesson
              </span>
              , we believe financial education should be simple, practical, and
              accessible to everyone. Let&apos;s connect and build your
              financial freedom together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 min-w-[2rem] min-h-[2rem] flex-shrink-0 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  Get In Touch
                </h2>

                <div className="space-y-5 sm:space-y-6">
                  {/* Email Support */}
                  <div className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 min-w-[2.5rem] min-h-[2.5rem] flex-shrink-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                        Email Support
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base mb-1.5 sm:mb-2">
                        Have queries about courses, pricing, or learning
                        journey?
                      </p>
                      <a
                        href="mailto:contact@pricelesson.in"
                        className="text-orange-400 hover:text-orange-300 transition-colors text-sm sm:text-base break-all"
                      >
                        contact@pricelesson.in
                      </a>
                    </div>
                  </div>

                  {/* Call / WhatsApp */}
                  <div className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 min-w-[2.5rem] min-h-[2.5rem] flex-shrink-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                        Call / WhatsApp
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base mb-1.5 sm:mb-2">
                        Prefer speaking directly?
                      </p>
                      <a
                        href="tel:+91-8578064265"
                        className="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
                      >
                        +91-8578064265
                      </a>
                    </div>
                  </div>

                  {/* Support Hours */}
                  <div className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 min-w-[2.5rem] min-h-[2.5rem] flex-shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                        Support Hours
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base">
                        Monday – Saturday: 10:00 AM – 7:00 PM (IST)
                      </p>
                      <p className="text-white/60 text-sm sm:text-base">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  {/* Head Office */}
                  <div className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 min-w-[2.5rem] min-h-[2.5rem] flex-shrink-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                        Head Office
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base">
                        Price Lesson (Head Office)
                      </p>
                      <p className="text-white/60 text-sm sm:text-base">
                        [Add your full address here]
                      </p>
                      <p className="text-white/60 text-sm sm:text-base">
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/80 font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your name"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/80 font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white/80 font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/80 font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:via-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                >
                  <Send
                    className={`w-5 h-5 ${isSubmitting ? "animate-spin" : ""}`}
                  />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Social Media */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 max-w-7xl mx-auto mt-8 overflow-hidden">
            {/* Spotlight effect */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>

            {/* Heading & Subheading */}
            <div className="text-center relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
                Stay Connected
              </h3>
              <p className="text-white/60 text-lg md:text-xl drop-shadow-md">
                Join our community of 2,00,000+ learners
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 relative z-10">
              <a
                href="https://www.pricelesson.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-orange-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Globe className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Website</span>
              </a>

              <a
                href="https://www.youtube.com/@Pricelessonhindi"
                className="group flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-red-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Youtube className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">YouTube</span>
              </a>

              <a
                href="https://www.instagram.com/pricelesson0/?utm_source=qr"
                className="group flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-pink-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Instagram className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/share/1Esirow823/"
                className="group flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Facebook className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Facebook</span>
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative mt-20 z-10 bg-slate-900/40 border-t border-slate-700/50 overflow-hidden rounded-2xl">
            {/* Point/Dotted Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:20px_20px]"></div>

            {/* Soft spotlight in center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>

            <div className="relative z-10 container mx-auto px-6 py-16 text-center">
              <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
                  <span className="bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                    Your Financial Freedom Starts Here
                  </span>
                </h3>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-gray-300 mb-10">
                  Your financial freedom starts with the right education.
                  Let&apos;s build it together!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:contact@pricelesson.in"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-orange-500/40 hover:-translate-y-1"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email Us Now</span>
                  </a>

                  <a
                    href="https://wa.me/918578064265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-green-500/40 hover:-translate-y-1"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
