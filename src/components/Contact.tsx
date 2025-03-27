import React from 'react';
import { LinkedinIcon, ExternalLinkIcon, MailIcon } from 'lucide-react';
const Contact = () => {
  return <section className="py-16" id="contact">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-blue-400 mb-8">I would like to work with you —</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#242938] rounded-lg p-4 flex items-center">
          <div className="bg-[#0077B5] p-2 rounded-full mr-4">
            <LinkedinIcon size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium mb-1">LinkedIn</h3>
            <p className="text-sm text-gray-400">
              Click here to send me a message on LinkedIn.
            </p>
          </div>
          <ExternalLinkIcon size={16} className="text-gray-400" />
        </div>
        <div className="bg-[#242938] rounded-lg p-4 flex items-center">
          <div className="bg-red-600 p-2 rounded-full mr-4">
            <MailIcon size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-sm text-gray-400">
              Click here to send me an email.
            </p>
          </div>
          <ExternalLinkIcon size={16} className="text-gray-400" />
        </div>
      </div>
    </section>;
};
export default Contact;