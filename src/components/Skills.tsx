import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof items>('backend');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const items = {
    backend: [
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Robust and versatile programming language for backend development.' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', description: 'Ideal for building scalable and efficient backend systems.' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Widely used for server-side development with Node.js.' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'Widely used for server-side development with TypeScript.' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'Widely used for server-side development with TypeScript.' },
      { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', description: 'Framework for building enterprise-level Java applications.' },
      { name: 'JUnit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg', description: 'Unit testing framework for Java applications.' },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', description: 'Framework for building dynamic web applications.' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Library for building user interfaces.' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Reliable relational database management system.' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', description: 'Advanced open-source relational database system.' },
      { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', description: 'Enterprise-grade relational database management system.' },
    ],
    ferramentas: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: 'Containerization platform for consistent development environments.' },
      { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', description: 'API testing and development tool.' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', description: 'Version control system for tracking changes in source code.' },
      { name: 'Visual Studio Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', description: 'Lightweight code editor with powerful features.' },
      { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', description: 'Git repository management and CI/CD tool.' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', description: 'Platform for hosting and collaborating on Git repositories.' },
      { name: 'Swagger', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg', description: 'Tool for API design and documentation.' },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items[activeTab].length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTab, items, isDragging]);

  const handleManualNavigation = (direction: 'prev' | 'next') => {
    setCurrentIndex((prevIndex) => {
      return direction === 'prev'
        ? (prevIndex - 1 + items[activeTab].length) % items[activeTab].length
        : (prevIndex + 1) % items[activeTab].length;
    });
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(false);
    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    if (startX - endX > 50) {
      handleManualNavigation('next');
    } else if (endX - startX > 50) {
      handleManualNavigation('prev');
    }
  };
  
  return (
    <section className="py-16" id="skills">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p className="text-gray-400 mb-8">Linguagens e Ferramentas que utilizo no meu dia a dia.</p>
      <div className="bg-[#242938] rounded-lg overflow-hidden">
        <div className="flex border-b border-gray-700">
          <button className={`py-2 px-6 ${activeTab === 'backend' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('backend')}>Tecnologias</button>
          <button className={`py-2 px-6 ${activeTab === 'ferramentas' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('ferramentas')}>Ferramentas</button>
        </div>
        <div
          className="p-10 flex items-center justify-center relative select-none overflow-hidden"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <button
            className="absolute left-2 bg-gray-700 p-2 rounded-full text-white z-10 hover:bg-gray-600 transition"
            onClick={() => handleManualNavigation('prev')}
          >
            <img src="https://icongr.am/fontawesome/angle-left.svg?size=128&color=currentColor" alt="Previous" className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4 overflow-x-clip">
            {items[activeTab].map((item, index) => {
              const isCurrent = index === currentIndex;

              return (
                <motion.div
                  key={item.name}
                  className={`p-4 rounded-lg text-center flex-shrink-0 transition-transform ${
                    isCurrent ? 'bg-[#1a1f2e] scale-110 opacity-100' : 'opacity-50 scale-90'
                  }`}
                  style={{ width: isCurrent ? '140px' : '100px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 40 }}
                >
                  <img src={item.logo} height={isCurrent ? 70 : 50} width={isCurrent ? 140 : 100} alt={item.name} className="mx-auto mb-2" />
                  <p className={`text-sm ${isCurrent ? 'font-medium text-white' : 'text-gray-400'}`}>{item.name}</p>
                </motion.div>
              );
            })}
          </div>
          <button
            className="absolute right-2 bg-gray-700 p-2 rounded-full text-white z-10 hover:bg-gray-600 transition"
            onClick={() => handleManualNavigation('next')}
          >
            <img src="https://icongr.am/fontawesome/angle-right.svg?size=128&color=currentColor" alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
