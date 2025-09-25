import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © 2025 Ayush.dev All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://github.com/virtuality0" target="_blank">
              <Button variant="ghost" size="sm" className="hover:bg-gray-800 transition-colors">
                <Github className="h-5 w-5 text-gray-600 hover:text-white transition-colors" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/ayush-juyal-5401b5180/" target="_blank">
              <Button variant="ghost" size="sm" className="hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5 text-blue-500 hover:text-white transition-colors" />
              </Button>
            </Link>
            <Link href="mailto:ayushjuyal246@gmail.com">
              <Button variant="ghost" size="sm" className="hover:bg-red-500 transition-colors">
                <Mail className="h-5 w-5 text-red-400 hover:text-white transition-colors" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
