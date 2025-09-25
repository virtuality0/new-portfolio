import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "RemoteState",
    position: "Software Development Engineer",
    location: "Noida, Uttar Pradesh",
    startDate: "Dec 2023",
    endDate: "Mar 2025",
    current: false,
    description: [
      "Developed and maintained robust backend services using .NET and Node.js technology stacks, ensuring high performance and scalability of critical applications." ,
      "Designed and integrated database solutions utilizing both MongoDB (NoSQL) and relational databases such as PostgreSQL , optimising for data integrity and complex query eﬃciency .",
      "Collaborated with front-end teams and contributed to the development of user-facing features , providing full-stack support where necessary .",
      "Implemented background jobs and task scheduling using Hangfire , and leveraged Redis for eﬃcient caching and real-time data processing .",
      "Employed version control and team collaboration practices using Git , maintaining code quality and deployment workflows"
    ],
    technologies: ["React", "Nest.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Hangfire", "Redis", "MongoDB", ".NET Core"]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and key achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="modern-card hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-card-foreground flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      {exp.position}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.startDate} - {exp.endDate}
                      {exp.current && (
                        <Badge variant="secondary" className="ml-2">Current</Badge>
                      )}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
