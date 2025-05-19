import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              Hello! I'm Kalyan Kallepalli, a Software Development Engineer in Test with
              a passion for building robust test automation frameworks and
              ensuring software quality.
            </p>
            <p className="text-lg mb-6">
              Currently working at Federal Reserve Bank of Kansas City, I specialize in
              developing automated testing solutions using Selenium, Cypress, Java, Python and
              various CI/CD tools. I'm dedicated to improving software quality
              through strategic test automation and comprehensive quality
              assurance processes.
            </p>
            {/* <p className="text-lg">
              I hold a Master's degree in Computer Science from the University
              of Louisiana at Lafayette, where I developed a strong foundation
              in software engineering principles and testing methodologies.
            </p> */}
            {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center">
                <CheckCircleIcon size={20} className="text-blue-600 mr-2" />
                <span>Test Automation</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon size={20} className="text-blue-600 mr-2" />
                <span>CI/CD Integration</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon size={20} className="text-blue-600 mr-2" />
                <span>Performance Testing</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon size={20} className="text-blue-600 mr-2" />
                <span>Security Testing</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon size={20} className="text-blue-600 mr-2" />
                <span>API Testing</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon size={20} className="text-blue-600 mr-2" />
                <span>Test Strategy Development</span>
              </div>
            </div> */}
          </div>
          <div className="md:w-1/2">
            <div className="bg-slate-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Education & Certifications
              </h3>
              <div className="mb-6">
                <h4 className="font-medium">
                  Master's in Computer Engineering
                </h4>
                <p className="text-slate-600">
                  Colorado State University, Fort Collins
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-medium">
                  Bachelor's in Electrical Engineering
                </h4>
                <p className="text-slate-600">Andhra University</p>
              </div>
              {/* <div>
                <h4 className="font-medium">Professional Certifications</h4>
                <p className="text-slate-600">
                  Test Automation & Quality Assurance
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>;
}