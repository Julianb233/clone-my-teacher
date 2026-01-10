"use client";

import { Camera, Send, Clock, CheckCircle, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";

const recentHelp = [
  { question: "How do I solve 3x + 7 = 22?", subject: "Math", time: "2 hours ago", solved: true },
  { question: "What is photosynthesis?", subject: "Science", time: "Yesterday", solved: true },
  { question: "Explain the American Revolution", subject: "History", time: "2 days ago", solved: true },
];

export default function HomeworkPage() {
  const [question, setQuestion] = useState("");

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Homework Help</h1>
        <p className="text-muted mt-1">Get instant help with any homework question</p>
      </div>

      {/* Ask Question */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Ask Your AI Tutor</h2>
            <p className="text-sm text-muted">Type your question or upload a photo</p>
          </div>
        </div>

        <div className="relative">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your homework question here..."
            className="w-full h-32 p-4 rounded-xl border border-border bg-surface resize-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button className="p-2 rounded-lg bg-muted/20 hover:bg-muted/30 transition text-muted">
              <Camera className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition flex items-center gap-2">
              <Send className="w-4 h-4" />
              Ask
            </button>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          {["Math", "Science", "English", "History"].map((subject) => (
            <button
              key={subject}
              className="px-3 py-1.5 rounded-full bg-surface border border-border text-sm text-muted hover:border-primary hover:text-primary transition"
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button className="p-5 rounded-xl bg-surface border border-border hover:border-primary transition text-left group">
          <Camera className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-semibold text-foreground mb-1">Scan Homework</h3>
          <p className="text-sm text-muted">Upload a photo of your assignment</p>
        </button>
        <button className="p-5 rounded-xl bg-surface border border-border hover:border-primary transition text-left group">
          <BookOpen className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-semibold text-foreground mb-1">Practice Problems</h3>
          <p className="text-sm text-muted">Get similar problems to practice</p>
        </button>
        <button className="p-5 rounded-xl bg-surface border border-border hover:border-primary transition text-left group">
          <Clock className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-semibold text-foreground mb-1">Step-by-Step</h3>
          <p className="text-sm text-muted">Learn the solution process</p>
        </button>
      </div>

      {/* Recent Help */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Questions</h2>
        <div className="bg-surface rounded-xl border border-border divide-y divide-border">
          {recentHelp.map((item, index) => (
            <div key={index} className="p-4 flex items-center justify-between hover:bg-primary/5 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{item.question}</h4>
                  <p className="text-sm text-muted">{item.subject} • {item.time}</p>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg bg-muted/10 text-muted hover:bg-primary/10 hover:text-primary transition text-sm font-medium">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
