"use client";

import { Bell, Search, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4">
        <button className="lg:hidden rounded-lg p-2 hover:bg-primary/5">
          <Menu className="h-5 w-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
          <Search className="h-4 w-4 text-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="w-48 bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
        </div>

        {/* Notifications */}
        <button className="relative rounded-lg p-2 hover:bg-primary/5 transition-colors">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-secondary" />
        </button>
      </div>
    </header>
  );
}
