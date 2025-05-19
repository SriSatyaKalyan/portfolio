import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kalyan Kallepalli
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">Software Test Engineer</h2>
          <p className="text-lg mb-8 max-w-lg">
            Test Automation Engineer with expertise in Selenium, Appium, and
            CI/CD integration. Passionate about building robust test frameworks
            and ensuring software quality.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
              Get in Touch
            </a>
            <a href="#projects" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
              View Projects
            </a>
          </div>
          <div className="flex mt-8 space-x-4">
            <a href="https://github.com/SriSatyaKalyan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-200 transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kalyan-kallepalli/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-200 transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:alex@example.com" aria-label="Email" className="hover:text-blue-200 transition-colors">
              <MailIcon size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center">
            <img src="/0D501AB6-E773-46BB-A636-DA58CE5E225B_1_101_o.jpg" alt="Alex Chen" className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
}