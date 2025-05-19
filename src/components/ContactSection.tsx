import React from 'react';
import { MailIcon } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Interested in discussing test automation or quality assurance? Feel
          free to reach out!
        </p>
        <div className="max-w-md mx-auto bg-blue-50 p-8 rounded-lg">
          <div className="flex items-start">
            <MailIcon size={24} className="text-blue-600 mt-1 mr-4" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:satyakalyan5@gmail.com" className="text-blue-600 hover:underline">
                satyakalyan5@gmail.com
              </a>
            </div>
          </div>
          {/* <div className="mt-8 text-center">
            <p className="text-slate-600">
              You can also connect with me on{' '}
              <a href="https://www.linkedin.com/in/kalyan-kallepalli/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </section>;
}