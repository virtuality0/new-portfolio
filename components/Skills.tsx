import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Server, Database, Code } from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiGraphql,
  SiBun,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiPrisma,
  SiSupabase,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiGit,
  SiJest,
  SiFigma
} from "react-icons/si";

const TechIcon = ({ name }: { name: string }) => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "TypeScript": SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "Vue.js": SiVuedotjs,
    "Node.js": SiNodedotjs,
    "Python": SiPython,
    "Express": SiExpress,
    "FastAPI": SiFastapi,
    "Django": SiDjango,
    "GraphQL": SiGraphql,
    "Bun.js": SiBun,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
    "Redis": SiRedis,
    "MySQL": SiMysql,
    "Prisma": SiPrisma,
    "Supabase": SiSupabase,
    "Docker": SiDocker,
    "AWS": SiAmazon,
    "Vercel": SiVercel,
    "Git": SiGit,
    "Jest": SiJest,
    "Figma": SiFigma
  };
  
  const IconComponent = iconMap[name] || Code;
  return (
    <IconComponent className="mr-1 text-sm w-4 h-4" />
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="modern-card hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-card-foreground">
                <Globe className="mr-2 h-5 w-5 text-primary" />
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary"><TechIcon name="React" />React</Badge>
                <Badge variant="secondary"><TechIcon name="Next.js" />Next.js</Badge>
                <Badge variant="secondary"><TechIcon name="TypeScript" />TypeScript</Badge>
                <Badge variant="secondary"><TechIcon name="Tailwind CSS" />Tailwind CSS</Badge>
                <Badge variant="secondary"><TechIcon name="Vue.js" />Vue.js</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-card-foreground">
                <Server className="mr-2 h-5 w-5 text-primary" />
                Backend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary"><TechIcon name="Node.js" />Node.js</Badge>
                <Badge variant="secondary"><TechIcon name="Python" />Python</Badge>
                <Badge variant="secondary"><TechIcon name="Express" />Express</Badge>
                <Badge variant="secondary"><TechIcon name="FastAPI" />FastAPI</Badge>
                <Badge variant="secondary"><TechIcon name="Django" />Django</Badge>
                <Badge variant="secondary"><TechIcon name="GraphQL" />GraphQL</Badge>
                <Badge variant="secondary"><TechIcon name="Bun.js" />Bun.js</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-card-foreground">
                <Database className="mr-2 h-5 w-5 text-primary" />
                Database
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary"><TechIcon name="PostgreSQL" />PostgreSQL</Badge>
                <Badge variant="secondary"><TechIcon name="MongoDB" />MongoDB</Badge>
                <Badge variant="secondary"><TechIcon name="Redis" />Redis</Badge>
                <Badge variant="secondary"><TechIcon name="MySQL" />MySQL</Badge>
                <Badge variant="secondary"><TechIcon name="Prisma" />Prisma</Badge>
                <Badge variant="secondary"><TechIcon name="Supabase" />Supabase</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-card-foreground">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Tools & Others
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary"><TechIcon name="Docker" />Docker</Badge>
                <Badge variant="secondary"><TechIcon name="AWS" />AWS</Badge>
                <Badge variant="secondary"><TechIcon name="Vercel" />Vercel</Badge>
                <Badge variant="secondary"><TechIcon name="Git" />Git</Badge>
                <Badge variant="secondary"><TechIcon name="Jest" />Jest</Badge>
                <Badge variant="secondary"><TechIcon name="Figma" />Figma</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
