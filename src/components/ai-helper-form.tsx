'use client';

import React, { useState } from "react";

export default function AiHelperForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setAnswer("");
    try {
      const res = await fetch("/api/ai-helper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!res.ok) throw new Error("Failed to get answer");
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-lg font-semibold mb-2">Ask the AI Helper anything about German:</label>
      <textarea
        className="w-full p-2 border rounded min-h-[80px] text-base resize-none bg-white text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:placeholder-zinc-500"
        rows={3}
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="How do I say 'good morning' in German? Explain the dative case..."
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50 w-full text-lg font-semibold"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>
      {answer && (
        <div className="mt-4 p-3 bg-green-100 border rounded text-green-900 whitespace-pre-line">
          <strong>AI Helper:</strong> {answer}
        </div>
      )}
      {error && <div className="text-red-600">{error}</div>}
    </form>
  );
} 