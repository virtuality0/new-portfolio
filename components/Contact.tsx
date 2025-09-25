"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Ayush Juyal',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      let errorMessage = 'Failed to send message. Please try again or contact me directly.';
      
      if (error instanceof Error) {
        if (error.message.includes('configuration is missing')) {
          errorMessage = 'Email service is not configured. Please contact me directly.';
        } else if (error.message.includes('Invalid service ID')) {
          errorMessage = 'Email service configuration error. Please contact me directly.';
        } else if (error.message.includes('Invalid template ID')) {
          errorMessage = 'Email template configuration error. Please contact me directly.';
        }
      }
      
      setStatus({ 
        type: 'error', 
        message: errorMessage
      });
    }
  };
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Let&apos;s discuss your next project or opportunity
          </p>
        </div>

        <Card className="modern-card hover:scale-105 transition-all duration-300">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-card-foreground">Let&apos;s Connect</h3>
                <p className="text-muted-foreground">
                  I&apos;m always interested in hearing about new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-red-400" />
                    <span className="text-card-foreground">ayushjuyal246@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-gray-600" />
                    <span className="text-card-foreground">github.com/virtuality0</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-blue-500" />
                    <span className="text-card-foreground">linkedin.com/in/ayush-juyal-5401b5180</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                    placeholder="Your name"
                    disabled={status.type === 'loading'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                    placeholder="your.email@example.com"
                    disabled={status.type === 'loading'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none text-black"
                    placeholder="Your message..."
                    disabled={status.type === 'loading'}
                  />
                </div>
                
                {/* Status Message */}
                {status.message && (
                  <div className={`flex items-center space-x-2 p-3 rounded-md ${
                    status.type === 'success' ? 'bg-green-100 text-green-800' :
                    status.type === 'error' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {status.type === 'success' && <CheckCircle className="h-4 w-4" />}
                    {status.type === 'error' && <AlertCircle className="h-4 w-4" />}
                    {status.type === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                    <span className="text-sm">{status.message}</span>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
