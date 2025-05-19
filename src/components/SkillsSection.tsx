import React from 'react';
export function SkillsSection() {
  const skills = [{
    category: 'Test Automation',
    items: ['Selenium', 'Cypress', 'Playwright', 'REST Assured', 'TestNG', 'JUnit', 'Cucumber']
  }, {
    category: 'Programming & Databases',
    items: ['Java', 'JavaScript', 'Python', 'MongoDB', 'MySQL', 'Oracle']
  }, {
    category: 'CI/CD & Tools',
    items: ['Jenkins', 'GitLab', 'GitHub Actions', 'Docker', 'AWS', 'Selenium Grid']
  }, {
    category: 'Monitoring & Analytics',
    items: ['Splunk', 'Grafana', 'Elasticsearch', 'JMeter', 'Shell Scripting']
  }];
  return <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Technical Skills
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          My technical toolkit for ensuring software quality across different
          platforms and technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    {skill}
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
}