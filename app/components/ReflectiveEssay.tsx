"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function ReflectiveEssay() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1 text-sm text-gray-700 shadow-sm">
            <BookOpen className="text-indigo-600" size={16} />
            <span>Individual Assignment • VPED 441</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-4">Teaching Internship Goals</h1>
          <p className="text-gray-600 text-lg mt-3">VPED 441 Internship – Teaching/Training (Aspire College)</p>
        </div>

        <Card className="shadow-xl rounded-2xl border-0">
          <CardContent className="p-8 md:p-10 space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="text-gray-500">Submitted by</div>
                <div className="font-semibold text-gray-900">Tushar Ganesh</div>
              </div>
              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="text-gray-500">Date</div>
                <div className="font-semibold text-gray-900">9th November 2025</div>
              </div>
              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="text-gray-500">Department</div>
                <div className="font-semibold text-gray-900">B.Tech.Ed.IT, Aspire College</div>
              </div>
              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="text-gray-500">Academic Year</div>
                <div className="font-semibold text-gray-900">2025</div>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              <p className="text-gray-700 leading-relaxed text-[17px]">
                I&apos;m Tushar Ganesh, a seventh-semester B.Tech.Ed.IT student at Aspire College, Kathmandu University. I&apos;m doing a teaching internship at Adarsh
                Secondary School as part of my academic career. Through teaching and mentoring students in topics like computer foundations, networking, and
                programming, this internship will enable me to investigate the real-world setting of IT education.
              </p>
              <p className="text-gray-700 leading-relaxed text-[17px]">
                My passion for teaching stems from my desire to impart knowledge, make difficult technological concepts understandable, and pique students&apos;
                curiosity. This internship will operate as a link between theory and practice, providing me with the opportunity to hone the pedagogical, technical,
                and interpersonal abilities necessary to become a successful IT educator.
              </p>
              <p className="text-gray-700 leading-relaxed text-[17px]">
                I hope to learn more about classroom dynamics, student diversity, and the teaching-learning process in a contemporary educational environment through
                this experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Teaching and Learning Goals</h2>
              <p className="text-gray-700 leading-relaxed text-[17px]">
                My main goal throughout my internship is to become a capable and thoughtful instructor who can make IT education engaging, understandable, and
                significant. Throughout this experience, I have established objectives to direct my professional development:
              </p>
              <div className="space-y-3 text-gray-700 leading-relaxed text-[17px]">
                <p>
                  <span className="font-semibold text-gray-900">1) Lesson planning and classroom instruction:</span> Deliver lessons that are easy to follow,
                  well-structured, and connected to real-world activities, helping students of different learning levels understand technical subjects.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">2) Classroom management:</span> Improve time management, uphold discipline, and promote student
                  engagement—especially during hands-on IT sessions—so students feel free to experiment, ask questions, and learn by doing.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">3) Assessment and feedback:</span> Use written and practical exams to understand how students learn,
                  what support they need, and provide constructive feedback that motivates improvement.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">4) Presentation and communication:</span> Communicate complex technological concepts in an approachable
                  and interesting manner using interactive tools, real-life examples, and visual aids.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">5) Reflective practice:</span> Keep a teaching journal, discuss challenges with my mentor, and assess
                  my lessons to identify strengths and areas for growth.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed text-[17px]">
                In addition to being a necessary academic requirement, this internship is a great chance for both professional and personal development. By
                concentrating on lesson design, classroom management, evaluation, communication, and reflection, I aim to grow into a competent and self-assured IT
                teacher.
              </p>
              <p className="text-gray-700 leading-relaxed text-[17px]">
                Through this experience, I hope to lay the groundwork for my future profession as a committed IT instructor and encourage students to explore the
                world of technology with interest and confidence.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
