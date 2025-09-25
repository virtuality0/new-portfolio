"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Code, Database, Server, Download, GitGraph } from "lucide-react";
import Image from "next/image";
import avatar from "@/public/my_ai.png"
import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {/* Avatar and Name */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
                <Image src={avatar} alt="Ayush Juyal - Full Stack Developer" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                Ayush Juyal
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-card-foreground">
                Full Stack Developer
              </h2>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative web solutions with modern technologies. 
              I build scalable applications that deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="mailto:ayushjuyal246@gmail.com" target="_blank">
            <Button size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            </Link>
            <Link href="https://github.com/virtuality0" target="_blank">
            <Button variant="outline" size="lg">
              <GitGraph className="mr-2 h-5 w-5" />
              View Work
            </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1lEAupicHCJ5cqT_aZCe22g6e1qi7CclK/view?usp=sharing" target="_blank">
            <Button variant="secondary" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="modern-card hover:scale-105 transition-all duration-300">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mx-auto" />
                <CardTitle className="text-card-foreground">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300">
              <CardHeader>
                <Server className="h-12 w-12 text-primary mx-auto" />
                <CardTitle className="text-card-foreground">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building robust APIs and server-side applications with Node.js, Python, and cloud technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300">
              <CardHeader>
                <Database className="h-12 w-12 text-primary mx-auto" />
                <CardTitle className="text-card-foreground">Database Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Designing efficient database schemas and optimizing queries for both SQL and NoSQL databases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
