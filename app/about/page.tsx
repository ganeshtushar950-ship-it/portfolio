"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import profilePhoto from "@/public/photo.jpg";

export default function AboutPage() {
  const quickFacts = [
    { label: "Name", value: "Tushar Ganesh" },
    { label: "Course", value: "B.Tech.Ed.IT (7th Semester)" },
    { label: "College", value: "Aspire College (Kathmandu University)" },
    { label: "Internship Site", value: "Adarsh Secondary School" },
    { label: "Course Code", value: "VPED 441" },
    { label: "Academic Year", value: "2025" },
  ];

  const goals = ["Lesson planning", "Classroom management", "Assessment & feedback", "Presentation & communication", "Reflective practice"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 space-y-10">
        <section className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">
          <div className="pt-1">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1 text-sm text-gray-700 shadow-sm">
              <Sparkles className="text-indigo-600" size={16} />
              <span>VPED 441 • Internship Goals</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-4">About</h1>
            <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
              I&apos;m a seventh-semester B.Tech.Ed.IT student at Aspire College, Kathmandu University, completing my teaching internship at Adarsh Secondary School.
            </p>

            <div className="mt-7">
              <h2 className="font-semibold text-gray-900">Internship Goals</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {goals.map((g) => (
                  <Badge key={g} variant="secondary" className="rounded-full">
                    {g}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} />
                <span className="font-semibold">Tushar Ganesh</span>
              </div>
              <p className="text-sm text-white/80 mt-1">B.Tech.Ed.IT • Teaching Internship</p>
            </div>
            <CardContent className="p-6">
              <div className="w-44 h-44 mx-auto rounded-full p-1 bg-gradient-to-r from-indigo-500 to-blue-500 shadow-xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src={profilePhoto}
                    alt="Tushar Ganesh"
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

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-indigo-600" />
                <span>Adarsh Secondary School</span>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="rounded-2xl border-0 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              <div className="mt-5 space-y-5 text-gray-700 leading-relaxed">
                <p>
                  I&apos;m Tushar Ganesh, a seventh-semester B.Tech.Ed.IT student at Aspire College, Kathmandu University. I&apos;m doing a teaching internship at
                  Adarsh Secondary School as part of my academic career.
                </p>
                <p>
                  Through teaching and mentoring students in topics like computer foundations, networking, and programming, this internship enables me to investigate
                  the real-world setting of IT education.
                </p>
                <p>
                  My passion for teaching stems from my desire to impart knowledge, make difficult technological concepts understandable, and pique students&apos;
                  curiosity. This internship operates as a link between theory and practice, helping me hone pedagogical, technical, and interpersonal skills.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
