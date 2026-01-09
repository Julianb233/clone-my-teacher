"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/dashboard/header";
import {
  BookOpen,
  ClipboardList,
  BarChart3,
  Flame,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stats = [
  { label: "Math Practice", progress: 60, target: "3/5 done", icon: BookOpen, color: "bg-blue-500" },
  { label: "Reading", progress: 67, target: "2/3 chapters", icon: BookOpen, color: "bg-purple-500" },
  { label: "Learning Streak", progress: 100, target: "12 days", icon: Flame, color: "bg-orange-500" },
];

const quickActions = [
  { label: "Start Learning Session", icon: BookOpen, href: "/dashboard/learn", gradient: true },
  { label: "Get Homework Help", icon: ClipboardList, href: "/dashboard/homework" },
  { label: "View Progress", icon: BarChart3, href: "/dashboard/progress" },
];

const recentActivity = [
  { action: "Completed Algebra Quiz", result: "85%", icon: CheckCircle2, color: "text-green-500" },
  { action: "Asked 3 questions about photosynthesis", result: "", icon: Clock, color: "text-blue-500" },
  { action: "Finished Chapter 4 reading", result: "", icon: CheckCircle2, color: "text-green-500" },
];

const achievements = [
  { label: "Math Whiz", icon: Trophy, earned: true },
  { label: "Quick Learner", icon: Star, earned: true },
  { label: "Bookworm", icon: BookOpen, earned: false },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header title="Welcome back, Student!" subtitle="Ready to learn something new today?" />

      <div className="p-6 space-y-6">
        {/* Today's Learning Goals */}
        <motion.section {...fadeInUp}>
          <h2 className="text-lg font-semibold text-foreground mb-4">Today&apos;s Learning Goals</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.color}/10`}>
                    <stat.icon className={`h-5 w-5 ${stat.color.replace('bg-', 'text-')}`} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{stat.target}</span>
                </div>
                <p className="text-sm text-muted mb-2">{stat.label}</p>
                <div className="h-2 rounded-full bg-border overflow-hidden">
                  <motion.div
                    className={`h-full ${stat.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.progress}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-between rounded-xl p-5 transition-colors ${
                  action.gradient
                    ? "gradient-bg text-white"
                    : "border border-border bg-surface hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <action.icon className={`h-5 w-5 ${action.gradient ? "text-white" : "text-primary"}`} />
                  <span className={`font-medium ${action.gradient ? "text-white" : "text-foreground"}`}>
                    {action.label}
                  </span>
                </div>
                <ArrowRight className={`h-5 w-5 ${action.gradient ? "text-white/80" : "text-muted"}`} />
              </motion.a>
            ))}
          </div>
        </motion.section>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
            <div className="rounded-xl border border-border bg-surface">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 ${
                    index !== recentActivity.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <activity.icon className={`h-5 w-5 ${activity.color}`} />
                  <span className="flex-1 text-sm text-foreground">{activity.action}</span>
                  {activity.result && (
                    <span className="text-sm font-medium text-primary">{activity.result}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Achievements</h2>
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-2 rounded-lg p-4 ${
                      achievement.earned
                        ? "bg-primary/10"
                        : "bg-border/50 opacity-50"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        achievement.earned ? "bg-primary/20" : "bg-border"
                      }`}
                    >
                      <achievement.icon
                        className={`h-6 w-6 ${
                          achievement.earned ? "text-primary" : "text-muted"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs font-medium text-center ${
                        achievement.earned ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {achievement.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
