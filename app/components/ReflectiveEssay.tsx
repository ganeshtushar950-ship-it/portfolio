"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function ReflectiveEssay() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="text-indigo-600" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Reflective Essay
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Reflection on my 40-hour teaching internship experience
          </p>
        </div>

        {/* Essay Content */}
        <Card className="shadow-xl rounded-2xl border-0">
          <CardContent className="p-8 md:p-10 space-y-6">

            {/* Paragraph 1 */}
            <p className="text-gray-700 leading-relaxed text-[17px]">
              My 40-hour teaching internship was a meaningful and enriching experience that played an important role in shaping my journey as an aspiring IT educator. At the beginning, I felt both excited and slightly nervous, as it was my first opportunity to teach in a real classroom environment. I entered this experience with the goal of applying my theoretical knowledge into practice, improving my communication skills, and building confidence in front of students. During the internship, I taught various topics such as computer hardware, software installation, programming basics, and troubleshooting to students with different levels of understanding. This helped me realize that teaching is not just about delivering content, but about ensuring that every student understands and stays engaged. I learned the importance of proper lesson planning, clear explanation, and using simple examples to make complex topics easier to understand.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-700 leading-relaxed text-[17px]">
              At the same time, I faced challenges such as managing the classroom, maintaining student attention, and adapting to different learning speeds. Some students required more support, while others learned quickly, so I had to adjust my teaching methods accordingly. I overcame these challenges by being patient, interactive, and supportive, and by creating a positive learning environment. Through this experience, I developed important skills such as classroom management, communication, and student engagement, and I became more confident in my ability to teach. Most importantly, my mindset towards teaching changed, as I began to understand that a good teacher not only shares knowledge but also motivates and supports students. Looking ahead, I aim to continue improving my teaching skills and gain more experience in IT education, and I hope to become a skilled educator who can inspire students and contribute to modern learning approaches.
            </p>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}