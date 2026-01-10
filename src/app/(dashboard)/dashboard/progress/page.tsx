"use client";

import { TrendingUp, Award, Clock, Target, Calendar, ChevronRight } from "lucide-react";

const weeklyProgress = [
  { day: "Mon", hours: 1.5, lessons: 3 },
  { day: "Tue", hours: 2, lessons: 4 },
  { day: "Wed", hours: 1, lessons: 2 },
  { day: "Thu", hours: 2.5, lessons: 5 },
  { day: "Fri", hours: 1.5, lessons: 3 },
  { day: "Sat", hours: 0.5, lessons: 1 },
  { day: "Sun", hours: 0, lessons: 0 },
];

const subjectProgress = [
  { name: "Mathematics", score: 85, change: +5, color: "blue" },
  { name: "English", score: 78, change: +3, color: "purple" },
  { name: "Science", score: 72, change: +8, color: "green" },
  { name: "History", score: 68, change: +2, color: "amber" },
  { name: "Reading", score: 90, change: +4, color: "rose" },
];

const achievements = [
  { name: "7 Day Streak", icon: "🔥", earned: true },
  { name: "Math Master", icon: "📐", earned: true },
  { name: "Quick Learner", icon: "⚡", earned: true },
  { name: "Perfect Score", icon: "🎯", earned: false },
  { name: "Bookworm", icon: "📚", earned: false },
];

export default function ProgressPage() {
  const maxHours = Math.max(...weeklyProgress.map(d => d.hours));

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Progress</h1>
        <p className="text-muted mt-1">Track your learning journey</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted">Overall Score</span>
          </div>
          <p className="text-3xl font-bold text-foreground">78%</p>
          <p className="text-sm text-green-500 mt-1">+5% this week</p>
        </div>

        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-sm text-muted">Study Time</span>
          </div>
          <p className="text-3xl font-bold text-foreground">9h</p>
          <p className="text-sm text-muted mt-1">This week</p>
        </div>

        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-500" />
            </div>
            <span className="text-sm text-muted">Lessons Done</span>
          </div>
          <p className="text-3xl font-bold text-foreground">18</p>
          <p className="text-sm text-muted mt-1">This week</p>
        </div>

        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-rose-500" />
            </div>
            <span className="text-sm text-muted">Current Streak</span>
          </div>
          <p className="text-3xl font-bold text-foreground">🔥 12</p>
          <p className="text-sm text-muted mt-1">Days</p>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="bg-surface rounded-xl p-6 border border-border mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Weekly Activity</h2>
          <button className="flex items-center gap-1 text-sm text-primary hover:underline">
            <Calendar className="w-4 h-4" />
            View Calendar
          </button>
        </div>
        <div className="flex items-end justify-between gap-2 h-40">
          {weeklyProgress.map((day) => (
            <div key={day.day} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary/30"
                style={{ height: `${(day.hours / maxHours) * 100}%`, minHeight: day.hours > 0 ? "8px" : "0" }}
              >
                <div
                  className="w-full bg-primary rounded-t-lg"
                  style={{ height: "100%" }}
                />
              </div>
              <p className="text-sm text-muted mt-2">{day.day}</p>
              <p className="text-xs text-muted">{day.hours}h</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subject Progress */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Subject Progress</h2>
          <div className="space-y-4">
            {subjectProgress.map((subject) => (
              <div key={subject.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{subject.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-green-500">+{subject.change}%</span>
                    <span className="font-semibold text-foreground">{subject.score}%</span>
                  </div>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${subject.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Achievements</h2>
            <button className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.name}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center p-2 transition ${
                  achievement.earned
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-muted/10 border-2 border-transparent opacity-50"
                }`}
              >
                <span className="text-2xl mb-1">{achievement.icon}</span>
                <span className="text-xs text-center text-muted">{achievement.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
