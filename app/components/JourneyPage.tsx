"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Lightbulb } from "lucide-react";

export default function JourneyPage() {
  const journey = [
    {
      title: "Effective Lesson Planning",
      desc: "Develop instructional design skills combining theory with practical IT exercises and hands-on activities.",
      icon: "📚",
    },
    {
      title: "Classroom Management",
      desc: "Create engaging learning environment, promote teamwork, and maintain safety awareness in practical IT labs.",
      icon: "👥",
    },
    {
      title: "Assessment & Feedback",
      desc: "Master formative and summative assessment techniques to evaluate student learning and provide constructive feedback.",
      icon: "✅",
    },
    {
      title: "Technical Communication",
      desc: "Explain complex IT concepts using visual aids, demonstrations, and analogies for diverse learning styles.",
      icon: "💬",
    },
    {
      title: "Reflective Practice",
      desc: "Maintain teaching logs, reflect on sessions, and seek mentor feedback to continuously improve instructional methods.",
      icon: "🔍",
    },
    {
      title: "Student Engagement",
      desc: "Foster active participation through interactive exercises, group discussions, and practical problem-solving activities.",
      icon: "🎯",
    },
  ];

  const milestones = [
    { week: "Week 1-2", title: "Orientation & Planning", desc: "School orientation, curriculum review, and lesson planning" },
    { week: "Week 3-5", title: "First Teaching Experiences", desc: "Initial classroom sessions with mentor support" },
    { week: "Week 6-8", title: "Independent Teaching", desc: "Solo teaching sessions and managing diverse student groups" },
    { week: "Week 9-10", title: "Reflection & Evaluation", desc: "Final review, assessment, and professional development documentation" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="text-indigo-600" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">My Teaching Journey</h1>
          </div>
          <p className="text-gray-600 text-lg">
            40 hours of learning, growth, and professional development through teaching
          </p>
        </div>

        {/* Learning Journey Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">🎓 Key Learning Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {journey.map((item, index) => (
              <Card key={index} className="shadow-lg rounded-2xl border-0 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Developed */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">💡 Skills & Competencies Developed</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Instructional Design",
              "Lesson Planning",
              "Student Assessment",
              "Classroom Management",
              "Communication Skills",
              "Technical Proficiency",
              "Problem Solving",
              "Adaptability",
              "Professional Ethics",
              "Time Management",
              "Mentoring Ability",
              "Continuous Learning",
            ].map((skill, index) => (
              <Card key={index} className="shadow-md rounded-xl border-0 overflow-hidden">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="font-medium text-gray-900">{skill}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">40</div>
              <p className="text-indigo-100">Hours of Teaching</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20</div>
              <p className="text-indigo-100">Students Engaged</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <p className="text-indigo-100">Key Learning Areas</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <p className="text-indigo-100">Growth Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
