"use client";

import { User, Bell, Shield, Palette, Globe, HelpCircle, LogOut } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    reminders: true,
    progress: false,
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted mt-1">Manage your account preferences</p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Profile Section */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Profile</h2>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
              S
            </div>
            <div>
              <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition">
                Change Photo
              </button>
              <p className="text-sm text-muted mt-2">JPG, PNG or GIF. Max 2MB.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Display Name</label>
              <input
                type="text"
                defaultValue="Student Name"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Grade Level</label>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition">
                <option>3rd Grade</option>
                <option>4th Grade</option>
                <option selected>5th Grade</option>
                <option>6th Grade</option>
                <option>7th Grade</option>
                <option>8th Grade</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              { key: "email", label: "Email Notifications", description: "Receive updates via email" },
              { key: "push", label: "Push Notifications", description: "Browser notifications" },
              { key: "reminders", label: "Study Reminders", description: "Daily learning reminders" },
              { key: "progress", label: "Weekly Progress", description: "Weekly progress reports" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
                <button
                  onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key as keyof typeof notifications] })}
                  className={`relative w-12 h-6 rounded-full transition ${
                    notifications[item.key as keyof typeof notifications] ? "bg-primary" : "bg-muted/30"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                      notifications[item.key as keyof typeof notifications] ? "left-7" : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Appearance Section */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Appearance</h2>
          </div>
          <div className="flex gap-4">
            {["Light", "Dark", "System"].map((theme) => (
              <button
                key={theme}
                className={`flex-1 py-3 px-4 rounded-lg border-2 text-sm font-medium transition ${
                  theme === "Light"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted hover:border-muted"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Other Settings */}
        <div className="bg-surface rounded-xl border border-border divide-y divide-border">
          {[
            { icon: Globe, label: "Language", value: "English (US)" },
            { icon: Shield, label: "Privacy & Security", value: "" },
            { icon: HelpCircle, label: "Help & Support", value: "" },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between p-4 hover:bg-primary/5 transition"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-muted" />
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
              <span className="text-sm text-muted">{item.value}</span>
            </button>
          ))}
        </div>

        {/* Danger Zone */}
        <div className="bg-surface rounded-xl p-6 border border-red-200">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
