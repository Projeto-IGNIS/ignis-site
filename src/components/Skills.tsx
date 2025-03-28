import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof items>('backend');
  const [backendIndex, setBackendIndex] = useState(0);
  const [basicIndex, setBasicIndex] = useState(0);
  const [learningIndex, setLearningIndex] = useState(0);
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

  const basicSkills = [
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Haskell', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg' },
    { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Django', logo: 'https://img.icons8.com/?size=100&id=IuuVVwsdTi2v&format=png&color=000000' },
    { name: 'RabbitMQ', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg' },
    { name: 'AWS', logo: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ];

  const learningSkills = [
    { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Ruby', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Nest.js', logo: 'https://devicon-website.vercel.app/api/nestjs/plain.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  const useCarousel = (itemsLength: number, setIndex: React.Dispatch<React.SetStateAction<number>>) => {
    useEffect(() => {
      const interval = setInterval(() => {
        if (!isDragging) {
          updateIndex();
        }
      }, 4000);
      return () => clearInterval(interval);
    }, [itemsLength, isDragging, setIndex]);

    const updateIndex = () => {
      setIndex((prevIndex) => (prevIndex + 1) % itemsLength);
    };

    const handleManualNavigation = (direction: 'prev' | 'next') => {
      setIndex((prevIndex) => {
        return direction === 'prev'
          ? (prevIndex - 1 + itemsLength) % itemsLength
          : (prevIndex + 1) % itemsLength;
      });
    };

    return { handleManualNavigation };
  };

  const backendCarousel = useCarousel(items[activeTab].length, setBackendIndex);
  const basicCarousel = useCarousel(basicSkills.length, setBasicIndex);
  const learningCarousel = useCarousel(learningSkills.length, setLearningIndex);

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent, handleManualNavigation: (direction: 'prev' | 'next') => void) => {
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
      <div className="bg-[#242938] rounded-lg overflow-hidden mb-8">
        {/* Backend/Ferramentas Carrossel */}
        <div className="flex border-b border-gray-700">
          <button className={`py-2 px-6 ${activeTab === 'backend' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('backend')}>Tecnologias</button>
          <button className={`py-2 px-6 ${activeTab === 'ferramentas' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('ferramentas')}>Ferramentas</button>
        </div>
        <div
          className="p-6 flex items-center justify-center relative select-none overflow-hidden"
          onMouseDown={handleDragStart}
          onMouseUp={(e) => handleDragEnd(e, backendCarousel.handleManualNavigation)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={(e) => handleDragEnd(e, backendCarousel.handleManualNavigation)}
        >
          <button
            className="absolute left-2 bg-gray-700 p-2 rounded-full text-white z-10 hover:bg-gray-600 transition"
            onClick={() => backendCarousel.handleManualNavigation('prev')}
          >
            <img src="https://icongr.am/fontawesome/angle-left.svg?size=128&color=currentColor" alt="Previous" className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4 overflow-x-clip">
            {items[activeTab].map((item, index) => {
              const isCurrent = index === backendIndex;

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
            onClick={() => backendCarousel.handleManualNavigation('next')}
          >
            <img src="https://icongr.am/fontawesome/angle-right.svg?size=128&color=currentColor" alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Basic Skills Carrossel */}
      <div className="bg-[#242938] rounded-lg overflow-hidden mb-8">
        <h3 className="text-2xl font-bold mb-4 text-white">Sei o básico</h3>
        <div
          className="p-6 flex items-center justify-center relative select-none overflow-hidden"
          onMouseDown={handleDragStart}
          onMouseUp={(e) => handleDragEnd(e, basicCarousel.handleManualNavigation)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={(e) => handleDragEnd(e, basicCarousel.handleManualNavigation)}
        >
          <button
            className="absolute left-2 bg-gray-700 p-2 rounded-full text-white z-10 hover:bg-gray-600 transition"
            onClick={() => basicCarousel.handleManualNavigation('prev')}
          >
            <img src="https://icongr.am/fontawesome/angle-left.svg?size=128&color=currentColor" alt="Previous" className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4 overflow-x-clip">
            {basicSkills.map((skill, index) => {
              const isCurrent = index === basicIndex;

              return (
                <motion.div
                  key={skill.name}
                  className={`p-4 rounded-lg text-center flex-shrink-0 transition-transform ${
                    isCurrent ? 'bg-[#1a1f2e] scale-110 opacity-100' : 'opacity-50 scale-90'
                  }`}
                  style={{ width: isCurrent ? '140px' : '100px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 40 }}
                >
                  <img src={skill.logo} height={isCurrent ? 70 : 50} width={isCurrent ? 140 : 100} alt={skill.name} className="mx-auto mb-2" />
                  <p className={`text-sm ${isCurrent ? 'font-medium text-white' : 'text-gray-400'}`}>{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
          <button
            className="absolute right-2 bg-gray-700 p-2 rounded-full text-white z-10 hover:bg-gray-600 transition"
            onClick={() => basicCarousel.handleManualNavigation('next')}
          >
            <img src="https://icongr.am/fontawesome/angle-right.svg?size=128&color=currentColor" alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Learning Skills Carrossel */}
      <div className="bg-[#242938] rounded-lg overflow-hidden">
        <h3 className="text-2xl font-bold mb-4 text-white">Quero aprender</h3>
        <div
          className="p-6 flex items-center justify-center relative select-none overflow-hidden"
          onMouseDown={handleDragStart}
          onMouseUp={(e) => handleDragEnd(e, learningCarousel.handleManualNavigation)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={(e) => handleDragEnd(e, learningCarousel.handleManualNavigation)}
        >
          <button
            className="absolute left-2 bg-gray-700 p-2 rounded-full text-white z-10 hover:bg-gray-600 transition"
            onClick={() => learningCarousel.handleManualNavigation('prev')}
          >
            <img src="https://icongr.am/fontawesome/angle-left.svg?size=128&color=currentColor" alt="Previous" className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4 overflow-x-clip">
            {learningSkills.map((skill, index) => {
              const isCurrent = index === learningIndex;

              return (
                <motion.div
                  key={skill.name}
                  className={`p-4 rounded-lg text-center flex-shrink-0 transition-transform ${
                    isCurrent ? 'bg-[#1a1f2e] scale-110 opacity-100' : 'opacity-50 scale-90'
                  }`}
                  style={{ width: isCurrent ? '140px' : '100px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 40 }}
                >
                  <img src={skill.logo} height={isCurrent ? 70 : 50} width={isCurrent ? 140 : 100} alt={skill.name} className="mx-auto mb-2" />
                  <p className={`text-sm ${isCurrent ? 'font-medium text-white' : 'text-gray-400'}`}>{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
          <button
            className="absolute right-2 bg-gray-700 p-2 rounded-full text-white z-10 hover:bg-gray-600 transition"
            onClick={() => learningCarousel.handleManualNavigation('next')}
          >
            <img src="https://icongr.am/fontawesome/angle-right.svg?size=128&color=currentColor" alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
