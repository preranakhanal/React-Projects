import { Button, Card, Badge, Section, ExternalLinkIcon, HeartIcon, GitHubIcon } from './ui';

const Projects = () => {
    const projectData = [
      {
        title: "Email Phishing Detection",
        description: "A machine learning model that detects phishing emails using NLP techniques and Random Forest.",
        link: "#", // replace with actual link later
        tags: ["Python", "ML", "Security"]
      },
      {
        title: "Secure Chat Application",
        description: "A Python-based chat app using sockets and custom cryptographic algorithms for message encryption.",
        link: "#",
        tags: ["Python", "Sockets", "Encryption"]
      },
      {
        title: "Phishing Awareness Chatbot",
        description: "An educational chatbot that teaches users to identify phishing using interactive quizzes.",
        link: "#",
        tags: ["Python", "AI", "Education"]
      },
    ];
  
  return (
    <Section
      id="projects"
      background="gradient"
      badge="My Work"
      title={<>Featured <span className="text-indigo-600">Projects</span></>}
      subtitle="A showcase of my work in cybersecurity, web development, and machine learning"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {projectData.map((project, index) => (
          <Card key={index} className="group">
            <Card.Header>
              <Card.Title className="group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </Card.Title>
            </Card.Header>
            
            <Card.Content className="mb-6">
              {project.description}
            </Card.Content>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <Badge 
                  key={tagIndex} 
                  variant={tagIndex % 3 === 0 ? 'primary' : tagIndex % 3 === 1 ? 'secondary' : 'info'}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Card.Footer>
              <div className="flex gap-3">
                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  className="flex-1"
                  icon={<ExternalLinkIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />}
                >
                  View Project
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  icon={<HeartIcon />}
                  iconPosition="left"
                />
              </div>
            </Card.Footer>
          </Card>
        ))}
      </div>
      
      {/* View All Projects CTA */}
      <div className="mt-16 text-center">
        <Button
          href="https://github.com/preranakhanal"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="xl"
          icon={<GitHubIcon className="w-5 h-5" />}
        >
          View All Projects on GitHub
        </Button>
      </div>
    </Section>
  );
  };
  
  export default Projects;
