"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  from: "bot" | "user";
  text: string;
};

type Option = {
  label: string;
  key: string;
};

const INITIAL_MESSAGE: Message = {
  from: "bot",
  text: "Hi! 👋 I'm the KC10 assistant. How can I help you today?",
};

const MAIN_OPTIONS: Option[] = [
  { label: "What services do you offer?", key: "services" },
  { label: "What areas do you serve?", key: "area" },
  { label: "How do I get a quote?", key: "quote" },
  { label: "How long does a job take?", key: "timeline" },
  { label: "Are you licensed & insured?", key: "licensed" },
  { label: "What are your hours?", key: "hours" },
  { label: "How do I contact you?", key: "contact" },
];

const RESPONSES: Record<string, string> = {
  services:
    "We offer: Interior Painting, Exterior Painting, Drywall Repairs, Water Damage Restoration, and Apartment Turns & Make-Ready services. Every job comes with a free estimate!",
  area:
    "We serve the entire DFW Metroplex — including Dallas, Fort Worth, Irving, Arlington, Garland, Mesquite, Richardson, Lewisville, Addison, Coppell, Rowlett, Rockwall, Balch Springs, and Plano.",
  quote:
    "Getting a quote is easy and free! You can fill out our contact form, call or text us at (469) 798-9325, or email kc10remodels@gmail.com. We'll get back to you within 16 hours to schedule your estimate.",
  timeline:
    "It depends on the scope of work. A single room typically takes 1 day, while a full interior can take 2–4 days. Exterior jobs vary by home size. We'll give you a clear timeline upfront with every estimate.",
  licensed:
    "Yes! KC10 is fully insured and we stand behind every project with a satisfaction guarantee. We're a locally owned family business — your home is in good hands.",
  hours:
    "We're available Monday through Saturday, 8am to 6pm. Give us a call or text anytime at (469) 798-9325.",
  contact:
    "You can reach us at:\n📞 (469) 798-9325 (call or text)\n📧 kc10remodels@gmail.com\n\nOr visit our contact page to request a free estimate online!",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [showOptions, setShowOptions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function handleOption(key: string, label: string) {
    const reply = RESPONSES[key];
    setMessages((prev) => [
      ...prev,
      { from: "user", text: label },
      { from: "bot", text: reply },
      { from: "bot", text: "Is there anything else I can help you with?" },
    ]);
    setShowOptions(true);
  }

  function resetChat() {
    setMessages([INITIAL_MESSAGE]);
    setShowOptions(true);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-[#fdb822] shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200"
        style={{ boxShadow: "0 8px 30px rgba(253,184,34,0.5)" }}
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden flex flex-col"
          style={{
            boxShadow: "0 20px 60px rgba(13,30,71,0.25), 0 4px 16px rgba(0,0,0,0.15)",
            maxHeight: "min(520px, calc(100vh - 120px))",
          }}
        >
          {/* Header */}
          <div className="bg-[#0d1e47] px-5 py-4 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#fdb822] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">KC10 Painting</p>
              <p className="text-white/50 text-xs">Typically replies same day</p>
            </div>
            <button
              onClick={resetChat}
              title="Start over"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-[#2324cc] text-white rounded-br-sm"
                      : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick reply options */}
            {showOptions && (
              <div className="space-y-2 pt-1">
                {MAIN_OPTIONS.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      setShowOptions(false);
                      handleOption(opt.key, opt.label);
                    }}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-[#2324cc]/20 bg-white text-[#2324cc] text-sm font-medium hover:bg-[#2324cc] hover:text-white transition-colors duration-150 shadow-sm"
                  >
                    {opt.label}
                  </button>
                ))}
                <a
                  href="/contact"
                  className="block w-full text-center px-4 py-2.5 rounded-xl bg-[#fdb822] text-white text-sm font-bold hover:bg-[#e5a800] transition-colors duration-150 shadow-sm"
                >
                  Get a Free Estimate →
                </a>
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>
      )}
    </>
  );
}
