import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activePanel, setActivePanel] = useState<null | 'backend' | 'basic' | 'learning'>(null);

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

  const useSmoothCarousel = (itemsLength: number, direction: 'left' | 'right') => {
    const [translateX, setTranslateX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);

    useEffect(() => {
      if (!isDragging) {
        const interval = setInterval(() => {
          setTranslateX((prev) => {
            const newTranslateX =
              direction === 'left'
                ? prev - 1
                : prev + 1;

            return newTranslateX <= -itemsLength * 150
              ? 0
              : newTranslateX >= 0
              ? -itemsLength * 150
              : newTranslateX;
          });
        }, 20); // Adjust speed
        return () => clearInterval(interval);
      }
    }, [itemsLength, direction, isDragging]);

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault(); // Prevent text/image selection
      setIsDragging(true);
      setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
      if (isDragging) {
        const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragOffset(currentX - startX);
      }
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      setTranslateX((prev) => prev + dragOffset);
      setDragOffset(0);
    };

    return { translateX, handleDragStart, handleDragMove, handleDragEnd, dragOffset };
  };

  const backendCarousel = useSmoothCarousel(items.backend.length, 'left');
  const basicCarousel = useSmoothCarousel(basicSkills.length, 'left');
  const learningCarousel = useSmoothCarousel(learningSkills.length, 'left');

  const renderCarousel = (type: 'backend' | 'basic' | 'learning', carousel: ReturnType<typeof useSmoothCarousel>, isPreview: boolean) => {
    const data =
      type === 'backend'
        ? items.backend.concat(items.backend)
        : type === 'basic'
        ? basicSkills.concat(basicSkills)
        : learningSkills.concat(learningSkills);

    const panelText =
      type === 'backend'
        ? { title: 'Tecnologias e Ferramentas', description: 'As tecnologias e ferramentas que mais utilizo no meu dia a dia.' }
        : type === 'basic'
        ? { title: 'Sei o básico', description: 'Tecnologias que já usei e possuo conhecimento básico.' }
        : { title: 'Quero aprender', description: 'Tecnologias que desejo aprender no futuro.' };

    return (
      <div
        className="p-6 relative overflow-hidden transition-all select-none" // Prevent text selection
        onMouseDown={carousel.handleDragStart}
        onMouseMove={carousel.handleDragMove}
        onMouseUp={carousel.handleDragEnd}
        onMouseLeave={carousel.handleDragEnd}
        onTouchStart={carousel.handleDragStart}
        onTouchMove={carousel.handleDragMove}
        onTouchEnd={carousel.handleDragEnd}
      >
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white">{panelText.title}</h3>
          <p className="text-gray-300">{panelText.description}</p>
        </div>
        <div
          className={`flex items-center space-x-4 ${isPreview ? 'opacity-50 scale-90' : 'opacity-100 scale-100'}`}
          style={{ transform: `translateX(${carousel.translateX + carousel.dragOffset}px)` }}
        >
          {data.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              className={`p-4 rounded-lg text-center flex-shrink-0 transition-transform ${
                isPreview ? 'bg-transparent' : 'bg-[#1a1f2e]'
              } hover:scale-110 hover:opacity-100`}
              style={{ width: '140px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 40 }}
            >
              <img
                src={item.logo}
                height={isPreview ? 50 : 70}
                width={isPreview ? 100 : 140}
                alt={item.name}
                className="mx-auto mb-2"
              />
              <p
                className={`text-sm ${
                  isPreview ? 'text-gray-400' : 'font-medium text-white'
                }`}
              >
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16" id="skills">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p className="text-gray-400 mb-8">Linguagens e Ferramentas que utilizo no meu dia a dia.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {/* Tecnologias e Ferramentas */}
        <motion.div
          className="bg-[#242938] rounded-lg p-6 cursor-pointer"
          onMouseEnter={() => setActivePanel('backend')}
          onMouseLeave={() => setActivePanel(null)}
          animate={{ scale: activePanel === 'backend' ? 1.05 : 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        >
          {renderCarousel('backend', backendCarousel, activePanel !== 'backend')}
        </motion.div>

        {/* Sei o básico */}
        <motion.div
          className="bg-[#242938] rounded-lg p-6 cursor-pointer"
          onMouseEnter={() => setActivePanel('basic')}
          onMouseLeave={() => setActivePanel(null)}
          animate={{ scale: activePanel === 'basic' ? 1.05 : 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        >
          {renderCarousel('basic', basicCarousel, activePanel !== 'basic')}
        </motion.div>

        {/* Quero aprender */}
        <motion.div
          className="bg-[#242938] rounded-lg p-6 cursor-pointer"
          onMouseEnter={() => setActivePanel('learning')}
          onMouseLeave={() => setActivePanel(null)}
          animate={{ scale: activePanel === 'learning' ? 1.05 : 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        >
          {renderCarousel('learning', learningCarousel, activePanel !== 'learning')}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
