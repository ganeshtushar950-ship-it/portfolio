"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ClipboardCheck, Lightbulb, MessageSquare, RefreshCcw, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function JourneyPage() {
  const goals: { title: string; desc: string; Icon: LucideIcon; iconClassName: string }[] = [
    {
      title: "Lesson Planning & Instruction",
      desc: "Prepare clear, well-structured lessons that are easy to follow and connected to real classroom activities.",
      Icon: ClipboardCheck,
      iconClassName: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    },
    {
      title: "Classroom Management",
      desc: "Manage time, maintain discipline, and promote student engagement—especially during hands-on IT sessions.",
      Icon: Users,
      iconClassName: "bg-blue-50 text-blue-700 ring-blue-100",
    },
    {
      title: "Assessment & Feedback",
      desc: "Use written and practical assessments to understand student learning and provide constructive feedback for improvement.",
      Icon: CheckCircle,
      iconClassName: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    },
    {
      title: "Presentation & Communication",
      desc: "Explain complex IT concepts in an approachable, interesting way using examples, visual aids, and interactive tools.",
      Icon: MessageSquare,
      iconClassName: "bg-purple-50 text-purple-700 ring-purple-100",
    },
    {
      title: "Reflective Practice",
      desc: "Reflect through a teaching journal and mentor discussions to identify strengths, address challenges, and improve continuously.",
      Icon: RefreshCcw,
      iconClassName: "bg-amber-50 text-amber-800 ring-amber-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1 text-sm text-gray-700 shadow-sm">
            <Lightbulb className="text-indigo-600" size={16} />
            <span>Internship Goals • VPED 441</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-4">Teaching & Learning Goals</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3 leading-relaxed">
            My main goal is to become a capable and thoughtful instructor who can make IT education engaging, understandable, and meaningful.
          </p>
        </div>

        <Card className="rounded-2xl border-0 shadow-lg">
          <CardContent className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">My Goals</h2>
            <p className="text-gray-600 mt-2">
              These objectives guide my professional development throughout the internship.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-7">
              {goals.map((g) => (
                <Card key={g.title} className="rounded-2xl border-0 shadow-md hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl ring-1 flex items-center justify-center ${g.iconClassName}`}>
                        <g.Icon size={22} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="font-bold text-lg text-gray-900">{g.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">{g.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
