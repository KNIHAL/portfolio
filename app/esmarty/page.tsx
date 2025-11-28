"use client";
import { motion } from "framer-motion";

import CaseLayout from "@/components/case/CaseLayout";
import { SectionTitle } from "@/components/case/sections/SectionTitle";
import { SectionText } from "@/components/case/sections/SectionText";
import { BulletPoints } from "@/components/case/sections/BulletPoints";

export default function ESmartyPage() {
    return (
        <CaseLayout
            title="eSmarty"
            subtitle="A Gemini-powered Chrome extension built to solve my own developer pain — switching tabs constantly just to debug, understand, or read anything."
        >

            {/* STORY BEGINNING */}
            <div>
                <SectionTitle>Where eSmarty Started</SectionTitle>
                <SectionText>
                    eSmarty didn’t begin as a side project.
                    It began as a <b>pain point</b>.
                    <br /><br />
                    When I started learning <b>AI agent development</b>
                    (specifically using CrewAI’s backend framework),
                    I faced a huge challenge:
                    <br />
                    <i>AI agents were backend-only… but I didn’t know web development yet.</i>
                    <br /><br />
                    Every time I needed a UI, I used AI tools to generate it.
                    But when I tried to connect my frontend with my agent backend,
                    I kept hitting errors — and I had no idea what caused them.
                    <br /><br />
                    So my workflow became:
                    <br /><br />
                    **Chrome → DevTools → ChatGPT tab → VSCode → Chrome → ChatGPT → VSCode**
                    Again. And again. And again.
                    <br /><br />
                    It was exhausting, slow, frustrating, and completely broke my focus.
                </SectionText>
            </div>

            {/* THE REAL PROBLEM */}
            <div>
                <SectionTitle>The Real Problem I Faced</SectionTitle>
                <SectionText>
                    I realized the real issue wasn’t the errors.
                    The problem was the <b>time wasted switching tabs</b>.
                </SectionText>

                <BulletPoints
                    items={[
                        "Every error required copying → pasting into ChatGPT",
                        "Every explanation required switching to a new tab",
                        "Every fix required jumping back into VSCode",
                        "Some errors weren’t real problems — just outdated versions",
                        "I was asking AI questions that didn’t even matter",
                    ]}
                />

                <SectionText>
                    I wasn’t debugging code.
                    I was fighting the workflow itself.
                </SectionText>
            </div>

            {/* WHY I BUILT ESMARTY */}
            <div>
                <SectionTitle>Why I Decided to Build eSmarty</SectionTitle>
                <SectionText>
                    One day, while switching tabs for the hundredth time,
                    I asked myself:
                    <br />
                    <i>“Why can’t AI just stay inside the same tab I’m working on?”</i>
                    <br /><br />
                    That single question gave birth to eSmarty —
                    a <b>Gemini-powered Chrome extension </b>
                    that lives on every tab and helps instantly.
                </SectionText>

                <BulletPoints
                    items={[
                        "Debug errors directly on the page",
                        "Summarize any content without leaving the site",
                        "Ask questions right in the same tab",
                        "No switching between Chrome → ChatGPT → VSCode repeatedly",
                    ]}
                />

                <SectionText>
                    eSmarty is not a chat popup —
                    it’s a <b>productivity layer for the entire browser.</b>
                </SectionText>
            </div>

            {/* HOW IT WORKS */}
            <div>
                <SectionTitle>How eSmarty Works</SectionTitle>
                <SectionText>
                    I designed eSmarty to fit naturally into the browsing flow.
                    Wherever you are, whatever you’re reading,
                    you can highlight content and interact instantly.
                </SectionText>

                <BulletPoints
                    items={[
                        "Select any code / paragraph → tap Summarize",
                        "Get full explanation instantly from Gemini",
                        "Ask follow-up questions right inside the extension",
                        "Use it while coding, debugging, reading, or learning",
                        "Never leave the current page",
                    ]}
                />

                <SectionText>
                    It feels like a mini AI sitting inside your browser,
                    focused only on the task in front of you.
                </SectionText>
            </div>

            {/* WHY GEMINI */}
            <div>
                <SectionTitle>Why I Chose Gemini</SectionTitle>
                <SectionText>
                    I tested multiple models —
                    but Gemini’s free-tier limits were simply better.
                </SectionText>

                <BulletPoints
                    items={[
                        "Bigger free-tier usage window for rapid development",
                        "Stable performance even without paid credits",
                        "Fast responses for technical queries during debugging",
                        "Ideal for prototyping extensions without upfront cost",
                        "No need to buy API credits just to test an idea",
                        "If you hit a rate limit, switching models keeps the flow uninterrupted",
                        "Perfect for developers who want powerful AI without spending money at early stages",

                    ]}
                />

                <SectionText>
                    It made eSmarty fast, affordable, and accessible for anyone.
                </SectionText>
            </div>

            {/* MY ROLE */}
            <div>
                <SectionTitle>How I Built It</SectionTitle>
                <SectionText>
                    eSmarty was built from scratch as a personal productivity tool.
                    I handled everything:
                </SectionText>

                <BulletPoints
                    items={[
                        "Researching how developers actually debug",
                        "Designing a UI that feels light, fast, and always available",
                        "Building the Chrome extension architecture",
                        "Integrating Gemini APIs flawlessly",
                        "Testing real use cases on complex debugging flows",
                    ]}
                />

                <SectionText>
                    The result was an extension that removed friction
                    from every development task.
                </SectionText>
            </div>

            {/* IMPACT */}
            <div>
                <SectionTitle>Impact</SectionTitle>
                <SectionText>
                    eSmarty didn’t just save me a few seconds —
                    it transformed my entire development workflow.
                </SectionText>

                <BulletPoints
                    items={[
                        "Debugging became 2× faster",
                        "No more unnecessary tab switching",
                        "Clarity improved because everything stayed in context",
                        "Reading blogs, docs, or errors became effortless",
                        "My development flow finally felt smooth",
                    ]}
                />

                <SectionText>
                    eSmarty became a natural part of how I think and build.
                </SectionText>
            </div>

            {/* LEARNING */}
            <div>
                <SectionTitle>What I Learned</SectionTitle>
                <SectionText>
                    eSmarty taught me something simple but powerful:
                    <br />
                    <b>Productivity is not about speed — it’s about reducing friction.</b>
                </SectionText>

                <BulletPoints
                    items={[
                        "Building real value often starts with personal pain",
                        "Sometimes the best ideas come from workflow frustration",
                        "Tools don’t need to be huge — they need to be useful",
                        "AI becomes powerful when it stays close to the user’s task",
                    ]}
                />

                <SectionText>
                    eSmarty isn’t just an extension.
                    It’s a reminder of how much smoother development can feel.
                </SectionText>
                <motion.a
                    href="https://github.com/KNIHAL/Esmarty"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                        inline-block mt-16 px-7 py-3 rounded-xl
                        text-white font-medium text-sm
                        bg-purple-600/20 border border-purple-400/40
                        backdrop-blur-xl
                        shadow-[0_0_18px_rgba(180,0,255,0.25)]
                        transition-all duration-300
                        hover:bg-purple-500/30 hover:border-purple-300
                    "
                >
                    ⚡ View eSmarty Repository
                </motion.a>

            </div>

        </CaseLayout>
    );
}
