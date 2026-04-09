"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Lightbulb, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "@/public/photo.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">

        {/* Hero Section */}
        <div className="text-center mb-20">

          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            IT Educator • Teaching Intern
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              I&apos;m Kritigya Katwal
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about transforming IT education through practical learning,
            interactive teaching, and real-world application.
          </p>

          {/* Profile Image (ONLY ONE IMAGE) */}
          <div className="flex justify-center">
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-indigo-400 shadow-xl">
              <Image
                src={profilePhoto}
                alt="Kritigya Katwal"
                fill
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </div>
        </div>

        {/* About Me */}
        <Card className="mb-16 shadow-lg rounded-2xl border-0 hover:shadow-xl transition">
          <CardContent className="p-8 md:p-10">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-start">

              {/* Text */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I am a B.Tech.Ed.IT student and aspiring IT educator passionate 
                  about combining technology and teaching. I focus on making 
                  complex concepts simple, practical, and engaging.
                </p>

                <p>
                  Through my teaching internship, I gained hands-on experience in 
                  hardware, software, and programming fundamentals while improving 
                  my classroom engagement and communication skills.
                </p>

                <p>
                  My goal is to create interactive learning environments that build 
                  confidence, critical thinking, and real-world problem-solving skills.
                </p>
              </div>

              {/* Skills Box */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-inner border">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                  Core Skills
                </h3>

                <ul className="space-y-3 text-gray-600 text-sm">
                  <li>• Teaching & Lesson Planning</li>
                  <li>• Computer Hardware & Software</li>
                  <li>• Programming Fundamentals</li>
                  <li>• Classroom Management</li>
                  <li>• Problem Solving</li>
                  <li>• Student Engagement</li>
                </ul>
              </div>

            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-sm text-gray-600">
              <div><strong>Degree:</strong> B.Tech.Ed.IT</div>
              <div><strong>Semester:</strong> 7th</div>
              <div><strong>Role:</strong> Intern</div>
              <div><strong>Focus:</strong> IT Education</div>
            </div>

          </CardContent>
        </Card>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            What I Bring
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <BookOpen className="text-indigo-600" size={28} />,
                title: "Effective Teaching",
                desc: "Engaging lessons with structured planning and clarity."
              },
              {
                icon: <Lightbulb className="text-indigo-600" size={28} />,
                title: "Practical Skills",
                desc: "Hands-on knowledge in hardware, software, and programming."
              },
              {
                icon: <Users className="text-indigo-600" size={28} />,
                title: "Student Engagement",
                desc: "Interactive teaching with focus on collaboration."
              },
              {
                icon: <Award className="text-indigo-600" size={28} />,
                title: "Continuous Growth",
                desc: "Always improving teaching techniques."
              }
            ].map((item, i) => (
              <Card
                key={i}
                className="rounded-2xl border-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Explore My Work
          </h2>

          <p className="mb-6 text-indigo-100 max-w-xl mx-auto">
            Discover my teaching materials, learning journey, and internship experience.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/materials">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-6">
                View Materials
              </Button>
            </Link>

            <Link href="/journey">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-6">
                My Journey
              </Button>
            </Link>

            <Link href="/essay">
              <Button className="border border-white text-white hover:bg-white/10 px-6">
                Read Essay
              </Button>
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
