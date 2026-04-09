"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import Image from "next/image";
import profilePhoto from "@/public/photo.jpg";

export default function AboutPage() {
  const quickFacts = [
    { label: "Degree", value: "B.Tech.Ed.IT" },
    { label: "Semester", value: "7th" },
    { label: "Role", value: "Teaching Intern" },
    { label: "Focus", value: "IT Education" },
  ];

  const strengths = ["Lesson planning", "Hands-on lab guidance", "Clear explanations", "Student engagement", "Practical assessment", "Reflective improvement"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1 text-sm text-gray-700 shadow-sm">
            <Sparkles className="text-indigo-600" size={16} />
            <span>B.Tech.Ed.IT • Teaching Intern</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-4">About Me</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I focus on making IT concepts practical, clear, and engaging through demonstrations, guided practice, and real-world problem solving.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[360px_1fr] gap-6 items-start">
          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} />
                <span className="font-semibold">Kritigya Katwal</span>
              </div>
              <p className="text-sm text-white/80 mt-1">Teaching Intern • IT Educator</p>
            </div>
            <CardContent className="p-6">
              <div className="w-44 h-44 mx-auto rounded-full p-1 bg-gradient-to-r from-indigo-500 to-blue-500 shadow-xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src={profilePhoto}
                    alt="Kritigya Katwal"
                    fill
                    className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition duration-300"
                    priority
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-xl border bg-gray-50 px-3 py-2">
                    <div className="text-gray-500">{fact.label}</div>
                    <div className="font-semibold text-gray-900">{fact.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-indigo-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Teaching Profile</h2>
                </div>

                <div className="space-y-5 text-gray-700 leading-relaxed">
                  <p>
                    I am a B.Tech.Ed.IT student and aspiring IT educator passionate about combining technology and teaching. I focus on making complex concepts
                    simple, practical, and engaging for students.
                  </p>

                  <p>
                    During my teaching internship, I gained hands-on experience in computer hardware, software installation, and programming fundamentals. This helped
                    me build strong communication skills and effective classroom engagement strategies.
                  </p>

                  <p>
                    I aim to create interactive learning environments where students can confidently apply their knowledge to real-world problems and develop critical
                    thinking skills.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900">Key Strengths</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {strengths.map((s) => (
                      <Badge key={s} variant="secondary" className="rounded-full">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-xl font-bold text-gray-900">What I Value</h2>
                <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="font-semibold text-gray-900">Clarity</div>
                    <div className="text-gray-600 mt-1">Step-by-step explanations with examples and demos.</div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="font-semibold text-gray-900">Practice</div>
                    <div className="text-gray-600 mt-1">Hands-on labs that build confidence and real skills.</div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="font-semibold text-gray-900">Feedback</div>
                    <div className="text-gray-600 mt-1">Quick checks and guidance to support steady progress.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

