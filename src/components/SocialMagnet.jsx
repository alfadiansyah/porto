"use client"

import React from "react"
import { HomeIcon, MessageSquare, Linkedin, Github, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/components/ui/dock"
import { portfolioData } from "../data/portfolioData"

export default function SocialMagnet() {
  const { personalInfo } = portfolioData;

  const SOCIALS = [
    { 
      name: 'LinkedIn', 
      url: personalInfo.linkedin, 
      icon: (props) => <Linkedin {...props} /> 
    },
    { 
      name: 'GitHub', 
      url: personalInfo.github, 
      icon: (props) => <Github {...props} /> 
    },
    { 
      name: 'WhatsApp', 
      url: personalInfo.whatsapp, 
      icon: (props) => <MessageSquare {...props} /> 
    },
    { 
      name: 'Mail', 
      url: `mailto:${personalInfo.email}`, 
      icon: (props) => <Mail {...props} /> 
    },
  ];

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <TooltipProvider>
        <Dock className="bg-white/80 dark:bg-[#161922]/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-2xl rounded-full px-3 py-1.5">
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  onClick={handleHomeClick}
                  aria-label="Home"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200"
                  )}
                >
                  <HomeIcon className="size-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs font-bold">Home</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          
          <Separator orientation="vertical" className="h-6 mx-1 bg-gray-200 dark:bg-gray-700" />
          
          {SOCIALS.map((social) => (
            <DockIcon key={social.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200"
                    )}
                  >
                    <social.icon className="size-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs font-bold">{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
