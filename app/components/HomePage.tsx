"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Lightbulb, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "@/public/photo.jpg";
import { useState } from "react";

export default function HomePage() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 w-full space-y-14">
        <section className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-indigo-700 text-sm font-medium">
              VPED 441 • Teaching Internship
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mt-4">
              Hi,{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                I&apos;m Tushar Ganesh
              </span>
            </h1>

            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              B.Tech.Ed.IT (7th Semester) student at Aspire College, Kathmandu University — currently completing a teaching internship at Adarsh Secondary School.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/about">
                <Button className="bg-indigo-600 hover:bg-indigo-700 px-6">About Me</Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="px-6">
                  Internship Goals
                </Button>
              </Link>
              <Link href="/materials">
                <Button variant="ghost" className="px-6">
                  Materials
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {[
                { label: "College", value: "Aspire College" },
                { label: "Semester", value: "7th" },
                { label: "Internship Site", value: "Adarsh School" },
                { label: "Course Code", value: "VPED 441" },
              ].map((fact) => (
                <div key={fact.label} className="rounded-2xl border bg-white/70 px-4 py-3 shadow-sm">
                  <div className="text-gray-500">{fact.label}</div>
                  <div className="font-semibold text-gray-900">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex flex-col items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[360px] lg:h-[360px]">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-indigo-600 to-blue-600 blur-2xl opacity-20" />
              <div className="relative w-full h-full rounded-[36px] p-1 bg-gradient-to-br from-indigo-500 to-blue-500 shadow-2xl">
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-white">
                  {!photoError && (
                    <Image
                      src={profilePhoto}
                      alt="Tushar Ganesh"
                      fill
                      className="object-cover object-[center_20%]"
                      priority
                      onError={() => setPhotoError(true)}
                    />
                  )}
                  {photoError && (
                    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
                      <div className="text-center">
                        <div className="text-4xl font-extrabold tracking-tight">TG</div>
                        <div className="text-xs text-white/80 mt-1">Add your photo</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 w-full max-w-[360px]">
              <Card className="rounded-2xl border-0 shadow-lg">
                <CardContent className="p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500">Internship</div>
                    <div className="font-semibold text-gray-900 truncate">Teaching & Training</div>
                  </div>
                  <div className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">VPED 441</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section>
          <Card className="shadow-lg rounded-2xl border-0 hover:shadow-xl transition">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction</h2>
                <Link href="/about" className="text-sm text-indigo-700 hover:underline">
                  Read more
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start mt-6">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I&apos;m Tushar Ganesh, a seventh-semester B.Tech.Ed.IT student at Aspire College, Kathmandu University. I&apos;m doing a teaching internship at
                    Adarsh Secondary School as part of my academic journey.
                  </p>
                  <p>
                    Through teaching and mentoring students in topics like computer foundations, networking, and programming, this internship helps me understand the
                    real-world setting of IT education.
                  </p>
                </div>

                <div className="rounded-2xl border bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-900">Internship Goals</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
                    <li>Lesson planning and structured instruction</li>
                    <li>Classroom management and engagement</li>
                    <li>Assessment and constructive feedback</li>
                    <li>Presentation and communication skills</li>
                    <li>Reflective practice for continuous improvement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">What I Bring</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="text-indigo-600" size={28} />, title: "Lesson Planning", desc: "Clear, structured lessons linked to real activities." },
              { icon: <Users className="text-indigo-600" size={28} />, title: "Classroom Management", desc: "Engaging, supportive learning environment in labs." },
              { icon: <Lightbulb className="text-indigo-600" size={28} />, title: "Communication", desc: "Simple explanations, visuals, and practical examples." },
              { icon: <Award className="text-indigo-600" size={28} />, title: "Reflection", desc: "Continuous improvement through feedback and journaling." },
            ].map((item) => (
              <Card key={item.title} className="rounded-2xl border-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
