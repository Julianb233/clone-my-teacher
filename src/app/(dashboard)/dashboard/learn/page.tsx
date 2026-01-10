"use client";

import { BookOpen, Play, Clock, Star, ChevronRight } from "lucide-react";

const subjects = [
  { name: "Mathematics", icon: "📐", progress: 75, lessons: 24, color: "blue" },
  { name: "English", icon: "📚", progress: 60, lessons: 18, color: "purple" },
  { name: "Science", icon: "🔬", progress: 45, lessons: 20, color: "green" },
  { name: "History", icon: "🏛️", progress: 30, lessons: 16, color: "amber" },
  { name: "Reading", icon: "📖", progress: 80, lessons: 12, color: "rose" },
];

const recentLessons = [
  { title: "Fractions & Decimals", subject: "Math", duration: "15 min", completed: true },
  { title: "Parts of Speech", subject: "English", duration: "12 min", completed: true },
  { title: "The Solar System", subject: "Science", duration: "18 min", completed: false },
];

export default function LearnPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Learn</h1>
        <p className="text-muted mt-1">Choose a subject to start learning</p>
      </div>

      {/* Continue Learning */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Continue Learning</h2>
          <button className="text-primary text-sm font-medium hover:underline">View All</button>
        </div>
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6 border border-primary/20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/80 flex items-center justify-center text-3xl">
              📐
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted">Mathematics</p>
              <h3 className="text-xl font-bold text-foreground">Fractions & Decimals</h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm text-muted flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 15 min left
                </span>
                <span className="text-sm text-muted flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" /> 4.8
                </span>
              </div>
            </div>
            <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition">
              <Play className="w-6 h-6 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Subject Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">All Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-surface rounded-xl p-5 border border-border hover:border-primary/50 transition cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  {subject.icon}
                </div>
                <ChevronRight className="w-5 h-5 text-muted group-hover:text-primary transition" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{subject.name}</h3>
              <p className="text-sm text-muted mb-3">{subject.lessons} lessons</p>
              <div className="w-full bg-border rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted mt-2">{subject.progress}% complete</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Lessons</h2>
        <div className="bg-surface rounded-xl border border-border divide-y divide-border">
          {recentLessons.map((lesson, index) => (
            <div key={index} className="p-4 flex items-center justify-between hover:bg-primary/5 transition">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  lesson.completed ? "bg-green-100 text-green-600" : "bg-primary/10 text-primary"
                }`}>
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{lesson.title}</h4>
                  <p className="text-sm text-muted">{lesson.subject} • {lesson.duration}</p>
                </div>
              </div>
              <button className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                lesson.completed
                  ? "bg-green-100 text-green-600"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}>
                {lesson.completed ? "Review" : "Continue"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
