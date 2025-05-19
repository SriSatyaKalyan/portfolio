import React from 'react';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
export function ExperienceSection() {
  const experiences = [{
    title: 'Software Development Engineer in Test',
    company: 'Federal Reserve Bank',
    type: '(Contract)',
    period: 'Jul 2024 - Present',
    description: ['Currently building & maintaining automation framework using Cypress, JavaScript and GitLab for an Angular application', 'Leading testing efforts (interface and performance) to shift to back-end focused testing', 'Working with developers on improving and enhancing unit testing methodologies for reducing bug leakage']
  }, {
    title: 'Software Engineer in Test',
    company: 'TEKsystems',
    type: '(Contract)',
    period: 'Nov 2020 - June 2024',
    projects: [{
      name: 'FedEx',
      achievements: ['Built end-to-end framework from ground up using Selenium, and Rest Assured for enterprise shipment flows', 'Designed edge case scenarios, increasing test coverage by 8% and improved release testing efficiency', 'Led the team (on and off-shore) in efficient migration of the automation framework from LeanFT to Selenium']
    }, {
      name: 'UHG',
      achievements: ['Automated data creation process and reduced testing time by 73%, from 15 to 4 minutes', 'Built a mobile/tablet automation testing framework using Playwright and increased testing coverage by 70%']
    }, {
      name: 'BestBuy',
      achievements: ['Automated GUI and API tests using Java, Maven, Cucumber and JUnit for the Core-HR portfolio', 'Built Postman collections for testing REST APIs reducing the regression time by 85%, from 2.5 to 0.5 hours', 'Initiated and led Performance testing of portfolio using JMeter and Splunk, improving response times by 1.5 seconds']
    }]
  }, {
    title: 'Test Engineer',
    company: 'Qualitest',
    type: '(Full-time)',
    period: 'Jul 2018 - Sep 2020',
    description: ['Integrated automation frameworks with CI/CD pipelines (Jenkins) and enabled daily regression testing', 'Provided technical support to the offshore team with automation using BUnit, Java, MongoDB, AWS, MySQL etc.', 'Performed verification & regression testing on radio devices and automated log-scraping optimizing testing for manual test engineers']
  }, {
    title: 'Software Engineer Intern',
    company: 'Four Winds Interactive',
    type: '',
    period: 'May - Dec 2017',
    description: ['Gained hands-on experience with test automation and quality assurance practices', 'Contributed to improving testing processes and methodologies']
  }];
  return <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Work Experience</h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          My professional journey in software testing and quality assurance.
        </p>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => <div key={index} className={`mb-12 ${index !== experiences.length - 1 ? 'border-b border-slate-200 pb-12' : ''}`}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-semibold text-blue-700">
                      {exp.title}
                    </h3>
                    <div className="mt-2 text-slate-800 font-medium">
                      {exp.company}{' '}
                      <span className="text-slate-600">{exp.type}</span>
                    </div>
                    <div className="mt-1 flex items-center text-slate-600">
                      <CalendarIcon size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  {exp.description && <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => <li key={itemIndex} className="flex items-start">
                          <BriefcaseIcon size={20} className="text-blue-600 mt-1 mr-3 shrink-0" />
                          <span>{item}</span>
                        </li>)}
                    </ul>}
                  {exp.projects && <div className="space-y-6">
                      {exp.projects.map((project, projectIndex) => <div key={projectIndex} className="bg-slate-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-lg mb-3 text-blue-700">
                            {project.name}
                          </h4>
                          <ul className="space-y-3">
                            {project.achievements.map((achievement, achievementIndex) => <li key={achievementIndex} className="flex items-start">
                                  <BriefcaseIcon size={20} className="text-blue-600 mt-1 mr-3 shrink-0" />
                                  <span>{achievement}</span>
                                </li>)}
                          </ul>
                        </div>)}
                    </div>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}