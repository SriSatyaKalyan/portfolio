import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function ProjectsSection() {
  const projects = [{
    title: 'UI Testing Framework',
    description: 'A comprehensive UI Testing Framework built using Selenium WebDriver, TestNG, and Java. Features include page object models, data-driven testing, and detailed HTML reporting.',
    technologies: ['Selenium', 'Java', 'TestNG', 'Maven', 'Jenkins'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com/SriSatyaKalyan/UITestingFramework-IntelliJ',
    demo: null
  }, {
    title: 'REST API Testing Framework',
    description: 'An API Testing Framework utilizing REST Assured and TestNG. Includes comprehensive test cases for REST APIs with authentication, request/response validation, and JSON schema validation.',
    technologies: ['REST Assured', 'TestNG', 'Java', 'Maven', 'JSON Schema'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com/SriSatyaKalyan/RESTAPITestingFramework',
    demo: null
  }, {
    title: 'Selenium-Docker',
    description: 'A containerized Selenium testing solution that runs tests in Docker containers. Enables parallel test execution and seamless integration with CI/CD pipelines.',
    technologies: ['Docker', 'Selenium Grid', 'Java', 'TestNG', 'Jenkins'],
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com/SriSatyaKalyan/Selenium-Docker',
    demo: null
  }, {
    title: 'Playwright-JavaScript',
    description: 'Modern web testing framework using Playwright with JavaScript. Implements best practices for web automation testing with cross-browser support.',
    technologies: ['Playwright', 'JavaScript', 'Node.js', 'Jest', 'GitHub Actions'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com/SriSatyaKalyan/playwright-javascript',
    demo: null
  }];
  return <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Notable Projects
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          A selection of test automation frameworks and tools I've developed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>)}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-700 hover:text-blue-600 transition-colors">
                    <GithubIcon size={18} className="mr-1" />
                    <span>GitHub</span>
                  </a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-700 hover:text-blue-600 transition-colors">
                      <ExternalLinkIcon size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}