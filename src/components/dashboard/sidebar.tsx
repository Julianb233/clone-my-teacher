"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  ClipboardList,
  BarChart3,
  BookMarked,
  Users,
  FileText,
  Settings,
  LogOut,
  Lock,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Overview" },
  { href: "/dashboard/learn", icon: BookOpen, label: "Learn" },
  { href: "/dashboard/homework", icon: ClipboardList, label: "Homework Help" },
  { href: "/dashboard/progress", icon: BarChart3, label: "Progress" },
  { href: "/dashboard/subjects", icon: BookMarked, label: "Subjects" },
  { href: "/dashboard/parent", icon: Users, label: "Parent Dashboard", comingSoon: true },
  { href: "/dashboard/reports", icon: FileText, label: "Reports", comingSoon: true },
];

const bottomItems = [
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-surface">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-border px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-bg">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-foreground">Clone My Teacher</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.comingSoon ? "#" : item.href}
                className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : item.comingSoon
                    ? "cursor-not-allowed text-muted"
                    : "text-foreground/70 hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
                {item.comingSoon && (
                  <span className="ml-auto flex items-center gap-1 rounded-full bg-muted/20 px-2 py-0.5 text-xs text-muted">
                    <Lock className="h-3 w-3" />
                    Soon
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-border px-3 py-4">
          {bottomItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <button className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-red-500/10 hover:text-red-500">
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </button>
        </div>

        {/* User Profile */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary font-semibold">
              S
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-foreground">Student Name</p>
              <p className="truncate text-xs text-muted">5th Grade</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
