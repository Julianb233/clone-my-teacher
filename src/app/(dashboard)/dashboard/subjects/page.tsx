"use client";

import { ChevronRight, Plus, Check } from "lucide-react";

const allSubjects = [
  { id: 1, name: "Mathematics", icon: "📐", description: "Algebra, Geometry, Fractions, and more", enrolled: true, lessons: 24 },
  { id: 2, name: "English", icon: "📚", description: "Grammar, Vocabulary, Writing", enrolled: true, lessons: 18 },
  { id: 3, name: "Science", icon: "🔬", description: "Biology, Chemistry, Physics basics", enrolled: true, lessons: 20 },
  { id: 4, name: "History", icon: "🏛️", description: "World History, US History, Civics", enrolled: true, lessons: 16 },
  { id: 5, name: "Reading", icon: "📖", description: "Comprehension, Analysis, Speed Reading", enrolled: true, lessons: 12 },
  { id: 6, name: "Geography", icon: "🌍", description: "Maps, Countries, Cultures", enrolled: false, lessons: 14 },
  { id: 7, name: "Art", icon: "🎨", description: "Drawing, Art History, Creativity", enrolled: false, lessons: 10 },
  { id: 8, name: "Music", icon: "🎵", description: "Theory, Instruments, Appreciation", enrolled: false, lessons: 12 },
  { id: 9, name: "Computer Science", icon: "💻", description: "Coding basics, Digital literacy", enrolled: false, lessons: 16 },
];

export default function SubjectsPage() {
  const enrolledSubjects = allSubjects.filter(s => s.enrolled);
  const availableSubjects = allSubjects.filter(s => !s.enrolled);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Subjects</h1>
        <p className="text-muted mt-1">Manage your enrolled subjects</p>
      </div>

      {/* Enrolled Subjects */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Your Subjects ({enrolledSubjects.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {enrolledSubjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-surface rounded-xl p-5 border-2 border-primary/30 hover:border-primary transition cursor-pointer group relative"
            >
              <div className="absolute top-3 right-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl mb-4">
                {subject.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{subject.name}</h3>
              <p className="text-sm text-muted mb-3">{subject.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">{subject.lessons} lessons</span>
                <ChevronRight className="w-5 h-5 text-muted group-hover:text-primary transition" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Subjects */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Available Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableSubjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-surface rounded-xl p-5 border border-border hover:border-primary/50 transition cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-muted/10 flex items-center justify-center text-3xl mb-4 opacity-70 group-hover:opacity-100 transition">
                {subject.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{subject.name}</h3>
              <p className="text-sm text-muted mb-3">{subject.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">{subject.lessons} lessons</span>
                <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline">
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
