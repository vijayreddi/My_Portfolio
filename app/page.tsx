'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  const skills = {
    'Programming Languages': ['JavaScript (JS)', 'C', 'Python'],
    'Frontend Development': ['React.js', 'HTML', 'CSS', 'SCSS', 'Bootstrap'],
    'Database Management': ['SQL', 'PostgreSQL', 'MongoDB', 'DBMS'],
    'Tools and Platforms': ['VS Code', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Vercel', 'Firebase'],
    'Soft Skills': ['Effective Communication', 'Teamwork', 'Problem-Solving'],
  };

  const projects = [
    {
      name: 'Avery (SurgeVentures)',
      domain: 'Business Regulation',
      description: 'Built a system that provides rules and regulations for newly established organizations, impacting over 50 organizations by ensuring compliance based on their size and rules.',
      achievements: [
        'Led the frontend development team, coordinating feature discussions and guiding implementation, which improved overall team productivity by 15%',
        'Executed end-to-end tasks including client interactions, user story creation, and feature discussions, leading to a 30% improvement in project delivery time',
      ],
    },
    {
      name: 'B2B2C MVP',
      domain: 'Travel',
      description: 'Developed an MVP that enabled over 200 customers to browse and select flight and hotel options, which are then processed by an agent to complete the booking.',
      achievements: [
        'The MVP was pivotal in evaluating the feasibility of scaling into a fully-developed product, leading to a 20% increase in user engagement during the testing phase',
      ],
    },
    {
      name: 'Jackeye',
      domain: 'Travel',
      description: 'Created a portal for agents to securely store and manage credentials for multiple airline and hotel sites, reducing login time by 40%.',
      achievements: [
        'Streamlined the login process for over 100 agents by providing a single interface for accessing all necessary platforms, leading to a 25% increase in booking efficiency',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background p-8">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold">Vijay Reddy</h1>
            <p className="text-xl text-muted-foreground">Frontend Developer</p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <ThemeToggle />
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <a href="https://github.com/vijayreddy" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://linkedin.com/in/vijayreddy" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="mailto:padegapativijay@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground">
          <p>📍 Pune, India | 📱 +91 9010498408</p>
        </div>

        {/* Summary */}
        <Card className="p-6 border-primary/20">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p className="text-muted-foreground">
            Frontend Developer with 2.5+ Years of Experience specialized in developing dynamic and user-friendly web applications 
            with expertise in React.js, JavaScript, HTML, and CSS. Experienced in delivering real-time projects across various 
            domains, including travel, hotel booking, employee management systems, and compliance platforms.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="p-6 border-primary/20">
              <h3 className="font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary hover:bg-secondary/80">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <Card key={project.name} className="p-6 border-primary/20">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <Badge className="bg-primary text-primary-foreground">{project.domain}</Badge>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="text-muted-foreground">
                    {achievement}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}