"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, Sparkles, LayoutGrid, GraduationCap, FileText, Video, ClipboardList, Download } from "lucide-react";
import { useState } from "react";

export default function InternshipPortfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const profile = {
    name: "Tushar Ganesh",
    college: "Aspire College (Kathmandu University)",
    institution: "Adarsh Secondary School",
    course: "B.Tech.Ed.IT, 7th Semester",
    academicYear: "2025",
    role: "Teaching Intern",
    courseCode: "VPED 441",
  };

  const drivePhotosFolderId = "10oqZ3-2ehk6yC4hzN9kv7kCDFdOgvjR1";
  const drivePhotosFolderUrl = `https://drive.google.com/drive/folders/${drivePhotosFolderId}?usp=drive_link`;

  const journey = [
    { title: "Lesson Planning & Instruction", desc: "Prepare clear, structured lessons connected to real classroom activities for students of different learning levels." },
    { title: "Classroom Management", desc: "Manage time, maintain discipline, and promote student engagement—especially during hands-on IT sessions." },
    { title: "Assessment & Feedback", desc: "Use written and practical assessments to understand student progress and provide constructive feedback for improvement." },
    { title: "Presentation & Communication", desc: "Explain complex IT concepts in an approachable, interesting way using examples, visual aids, and interactive tools." },
    { title: "Reflective Practice", desc: "Reflect regularly through teaching logs and mentor discussions to identify strengths and areas for growth." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Top Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white p-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="hover:animate-spin transition-all duration-300" />
              <span className="text-sm opacity-80">Internship Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mt-2">{profile.name}</h1>
            <p className="opacity-90 mt-1">{profile.college} • {profile.institution}</p>

            <div className="flex gap-2 mt-4 flex-wrap">
              <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">B.Tech.Ed.IT</Badge>
              <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">{profile.courseCode}</Badge>
              <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">Academic Year {profile.academicYear}</Badge>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <p className="text-sm opacity-90">Role</p>
            <p className="text-xl font-semibold">{profile.role}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-6">

        {/* Tabs Section */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 bg-gray-100 rounded-xl p-1">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
          </TabsList>

          {/* About */}
          <TabsContent value="about">
            <div className="space-y-6">
              <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <User />
                    <h2 className="text-xl font-semibold">About Me</h2>
                  </div>
                  <p className="text-gray-600">
                    I&apos;m {profile.name}, a seventh-semester B.Tech.Ed.IT student at {profile.college}. I&apos;m doing a teaching internship at {profile.institution} as part of my academic journey. Through teaching and mentoring students in topics like computer foundations, networking, and programming, this internship enables me to explore the real-world setting of IT education. My passion for teaching comes from the desire to share knowledge, make difficult technological concepts understandable, and spark students&apos; curiosity. This internship serves as a link between theory and practice, helping me develop the pedagogical, technical, and interpersonal skills needed to become a successful IT educator.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
                    <div className="p-3 bg-gray-50 rounded-xl"><b>College:</b><br />{profile.college}</div>
                    <div className="p-3 bg-gray-50 rounded-xl"><b>Course:</b><br />{profile.course}</div>
                    <div className="p-3 bg-gray-50 rounded-xl"><b>Internship Site:</b><br />{profile.institution}</div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-5">
                    <LayoutGrid className="mb-2 hover:animate-spin transition-all duration-300" />
                    <h3 className="font-semibold">Teaching Scope</h3>
                    <p className="text-sm text-gray-600">
                      Computer hardware, software installation, programming fundamentals, and practical IT troubleshooting activities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-5">
                    <BookOpen className="mb-2 hover:animate-spin transition-all duration-300" />
                    <h3 className="font-semibold">Teaching Approach</h3>
                    <p className="text-sm text-gray-600">
                      Theory + Demonstrations + Practical Activities + Assessment for comprehensive learning.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-5">
                    <Sparkles className="mb-2 hover:animate-spin transition-all duration-300" />
                    <h3 className="font-semibold">Key Goals</h3>
                    <p className="text-sm text-gray-600">
                      Develop into a competent, confident, and reflective IT educator with strong classroom management.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Journey */}
          <TabsContent value="goals">
            <div className="space-y-4 mt-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-2">Teaching & Learning Goals</h3>
                <p className="text-sm text-blue-800">My main goal is to become a capable and thoughtful instructor who can make IT education engaging, understandable, and meaningful.</p>
              </div>
              {journey.map((j, i) => (
                <Card key={i} className="rounded-2xl hover:shadow-lg group transition">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="text-indigo-600 group-hover:animate-bounce" />
                      <h3 className="font-semibold text-lg">{j.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{j.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Materials */}
          <TabsContent value="materials">
            <div className="space-y-4 mt-4">
              <Card className="rounded-2xl">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Teaching Resources & Materials</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a
                      href="https://drive.google.com/drive/folders/1vI3ZIjTOVJPkwQ56lshXn7oneJ8bG12j?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-indigo-50 rounded-lg border border-indigo-200 hover:shadow-md hover:bg-indigo-100 group transition cursor-pointer"
                    >
                      <BookOpen className="text-indigo-600 mb-2 group-hover:animate-bounce" size={24} />
                      <h3 className="font-semibold text-indigo-900 mb-1">Lesson Plans</h3>
                      <p className="text-sm text-indigo-700">Structured lesson plans for IT courses including hardware, software, and programming topics.</p>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1Mlw5tGv2OZag4Odrt4VpUuWq9-EbM5HN/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-purple-50 rounded-lg border border-purple-200 hover:shadow-md hover:bg-purple-100 group transition cursor-pointer"
                    >
                      <FileText className="text-purple-600 mb-2 group-hover:animate-bounce" size={24} />
                      <h3 className="font-semibold text-purple-900 mb-1">Syllabus</h3>
                      <p className="text-sm text-purple-700">Course syllabus, learning objectives, and curriculum outlines for IT education.</p>
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1CrQyqzAi0g2WwAx-i8-yeewwsEVla2HU?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-green-50 rounded-lg border border-green-200 hover:shadow-md hover:bg-green-100 group transition cursor-pointer"
                    >
                      <ClipboardList className="text-green-600 mb-2 group-hover:animate-bounce" size={24} />
                      <h3 className="font-semibold text-green-900 mb-1">Log Sheets</h3>
                      <p className="text-sm text-green-700">Weekly reflections, observations, and progress notes from internship sessions.</p>
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1gtdbC8XiZMSNwn5p7dj6rCV5CQKvThOj?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-md hover:bg-blue-100 group transition cursor-pointer"
                    >
                      <LayoutGrid className="text-blue-600 mb-2 group-hover:animate-bounce" size={24} />
                      <h3 className="font-semibold text-blue-900 mb-1">Learning Resources</h3>
                      <p className="text-sm text-blue-700">Additional teaching materials, worksheets, and reference documents.</p>
                    </a>
                    <a
                      href={drivePhotosFolderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-red-50 rounded-lg border border-red-200 hover:shadow-md hover:bg-red-100 group transition cursor-pointer"
                    >
                      <Video className="text-red-600 mb-2 group-hover:animate-bounce" size={24} />
                      <h3 className="font-semibold text-red-900 mb-1">Videos & Photos</h3>
                      <p className="text-sm text-red-700">Demonstration videos, tutorials, classroom photos, and lab documentation.</p>
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1ZpNqHV-f8wRCkVIyrETKGzrVQFJaSVjA?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg border border-yellow-200 hover:shadow-md hover:bg-yellow-100 group transition cursor-pointer"
                    >
                      <GraduationCap className="text-yellow-600 mb-2 group-hover:animate-bounce" size={24} />
                      <h3 className="font-semibold text-yellow-900 mb-1">Signed Teaching Logs</h3>
                      <p className="text-sm text-yellow-700">Official signed teaching logs and documentation from internship period.</p>
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1W-wk6SrTAhna9fCpkekEqJCzZKt1e9s1?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:shadow-md hover:bg-pink-100 group transition cursor-pointer"
                    >
                      <User className="text-pink-600 mb-2 group-hover:animate-bounce" size={24} />
                      <h3 className="font-semibold text-pink-900 mb-1">Mentor Evaluation</h3>
                      <p className="text-sm text-pink-700">Mentor feedback, evaluations, and assessment reports from internship.</p>
                    </a>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <a
                      href="https://drive.google.com/drive/folders/1gtdbC8XiZMSNwn5p7dj6rCV5CQKvThOj?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        <Download className="mr-2" size={16} /> Access All Materials
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
