"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Image as ImageIcon,
  Video,
  Plus,
  BookOpen,
  FileText,
  ClipboardList,
  LayoutGrid,
  Download,
  GraduationCap,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MediaItem {
  id: string;
  type: "image" | "video";
  title: string;
  description: string;
  src: string;
}

export default function MaterialsPage() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: "1",
      type: "image",
      title: "Computer Hardware Lab",
      description:
        "Students learning about hardware components and assembly",
      src: "/media/hardware.jpg",
    },
    {
      id: "2",
      type: "image",
      title: "Programming Session",
      description:
        "Hands-on programming practice with students",
      src: "/media/programming.jpg",
    },
    {
      id: "3",
      type: "image",
      title: "Software Installation Workshop",
      description:
        "Teaching software installation and configuration",
      src: "/media/software.jpg",
    },
    {
      id: "4",
      type: "image",
      title: "Student Engagement Activity",
      description:
        "Students collaborating on IT troubleshooting task",
      src: "/media/engagement.jpg",
    },
    {
      id: "5",
      type: "image",
      title: "Classroom Demonstration",
      description:
        "Interactive lesson demonstration with visual aids",
      src: "/media/demo.jpg",
    },
    {
      id: "6",
      type: "video",
      title: "Lesson Demo: Software Installation",
      description:
        "Tutorial video on software installation process",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "6b",
      type: "video",
      title: "Student Case Study Demonstration",
      description:
        "Student case study and practical demonstration video",
      src: "https://drive.google.com/file/d/1Rlc9iV89Uw187za03f8IoAhNW1rTQ7cI/preview",
    },
    {
      id: "6c",
      type: "video",
      title: "Student Case Study Demonstration 2",
      description:
        "Additional student case study and demonstration",
      src: "https://drive.google.com/file/d/1lCSkgWMrgCme-sPa7yLpyxuuTyQUxn0V/preview",
    },
    {
      id: "6d",
      type: "video",
      title: "Regular Class Session",
      description:
        "Regular classroom teaching session with students",
      src: "https://drive.google.com/file/d/1fAS2cKW3-wo2eI8bdISVzSd9s7so0T9M/preview",
    },
    {
      id: "7",
      type: "image",
      title: "Lab Setup and Equipment",
      description:
        "IT lab setup with various hardware components",
      src: "/media/lab-setup.jpg",
    },
    {
      id: "8",
      type: "image",
      title: "Student Assessment",
      description:
        "Students completing practical assessment tasks",
      src: "/media/assessment.jpg",
    },
  ]);

  const resources = [
    {
      href: "https://drive.google.com/drive/folders/1vI3ZIjTOVJPkwQ56lshXn7oneJ8bG12j?usp=drive_link",
      icon: BookOpen,
      title: "Lesson Plans",
      description:
        "Structured lesson plans for IT courses including hardware, software, and programming topics.",
    },
    {
      href: "https://drive.google.com/file/d/1Mlw5tGv2OZag4Odrt4VpUuWq9-EbM5HN/view?usp=sharing",
      icon: FileText,
      title: "Syllabus",
      description:
        "Course syllabus, learning objectives, and curriculum outlines for IT education.",
    },
    {
      href: "https://drive.google.com/drive/folders/1CrQyqzAi0g2WwAx-i8-yeewwsEVla2HU?usp=drive_link",
      icon: ClipboardList,
      title: "Log Sheets",
      description:
        "Weekly reflections, observations, and progress notes from internship sessions.",
    },
    {
      href: "https://drive.google.com/drive/folders/1gtdbC8XiZMSNwn5p7dj6rCV5CQKvThOj?usp=drive_link",
      icon: LayoutGrid,
      title: "Learning Resources",
      description:
        "Additional teaching materials, worksheets, and reference documents.",
    },
    {
      href: "https://drive.google.com/drive/folders/10oqZ3-2ehk6yC4hzN9kv7kCDFdOgvjR1?usp=drive_link",
      icon: Video,
      title: "Videos & Photos",
      description:
        "Demonstration videos, tutorials, classroom photos, and lab documentation.",
    },
    {
      href: "https://drive.google.com/drive/folders/1ZpNqHV-f8wRCkVIyrETKGzrVQFJaSVjA?usp=drive_link",
      icon: GraduationCap,
      title: "Signed Teaching Logs",
      description:
        "Official signed teaching logs and documentation from internship period.",
    },
    {
      href: "https://drive.google.com/drive/folders/1W-wk6SrTAhna9fCpkekEqJCzZKt1e9s1?usp=drive_link",
      icon: User,
      title: "Mentor Evaluation",
      description:
        "Mentor feedback, evaluations, and assessment reports from internship.",
    },
  ];

  const cardStyle =
    "bg-white border-gray-200 hover:bg-gray-50 text-gray-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <ImageIcon className="text-indigo-600" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Teaching Materials
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Complete collection of lesson plans, resources, and photos/videos from my internship
          </p>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            📚 Teaching Resources & Documents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <a
                  key={index}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-xl border transition-all duration-300 group cursor-pointer ${cardStyle}
                  hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]`}
                >
                  <Icon
                    className="mb-3 text-indigo-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    size={26}
                  />

                  <h3 className="font-semibold mb-1 text-lg">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {resource.description}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1gtdbC8XiZMSNwn5p7dj6rCV5CQKvThOj?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-md">
                <Download className="mr-2" size={16} />
                Access All Materials
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}