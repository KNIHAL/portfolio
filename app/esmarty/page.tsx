"use client";

import CaseLayout from "@/components/case/CaseLayout";
import { SectionTitle } from "@/components/case/sections/SectionTitle";
import { SectionText } from "@/components/case/sections/SectionText";
import { BulletPoints } from "@/components/case/sections/BulletPoints";

export default function ESmartyPage() {
    return (
        <CaseLayout
            title="eSmarty"
            subtitle="A Gemini-powered AI browser extension built to remove context-switching and accelerate learning, debugging, and comprehension directly inside the same tab."
        >

            {/* STORY: START */}
            <div>
                <SectionTitle>Where eSmarty Started</SectionTitle>
                <SectionText>
                    eSmarty started from a simple frustration —
                    developers and learners switch between tabs **way too often**.
                    <br /><br />
                    One moment you're reading documentation,
                    the next you're on ChatGPT asking for explanation,
                    then back to VS Code to fix the issue,
                    then back again to copy the next error.
                    <br /><br />
                    Every switch breaks focus.
                    Every switch slows you down.
                    I wanted to remove that friction completely.
                </SectionText>
            </div>

            {/* PROBLEM */}
            <div>
                <SectionTitle>The Problem</SectionTitle>
                <SectionText>
                    Real productivity doesn’t come from speed —
                    it comes from reducing friction.
                    <br /><br />
                    While building projects like Sampark,
                    I realized most of my time wasn’t spent coding —
                    it was spent **switching tabs**:
                </SectionText>

                <BulletPoints
                    items={[
                        "See an error → copy → open AI tab → paste → wait → read → return",
                        "See a blog → don’t understand → switch to AI → ask → come back",
                        "Debug something → need explanation → switch again",
                        "Search something → lose track of where I was",
                    ]}
                />

                <SectionText>
                    This process kills momentum.
                    And when you lose momentum, you lose clarity.
                </SectionText>
            </div>

            {/* IDEA */}
            <div>
                <SectionTitle>The Core Idea</SectionTitle>
                <SectionText>
                    I designed eSmarty as a tool that keeps you **inside the same tab,**
                    no matter what you need — summarization, explanation, debugging, or guidance.
                    <br /><br />
                    Instead of taking your mind out of the problem,
                    eSmarty brings AI **into your current context**.
                    <br /><br />
                    The extension lives quietly in the browser,
                    and reveals itself only when needed.
                </SectionText>
            </div>

            {/* WHAT IT DOES */}
            <div>
                <SectionTitle>What eSmarty Does</SectionTitle>
                <SectionText>
                    eSmarty adds intelligence to your browser instantly:
                </SectionText>

                <BulletPoints
                    items={[
                        "Select code → click → get explanation instantly",
                        "Select error → get exact reason + fix",
                        "Highlight a paragraph → get summary",
                        "Ask AI anything without leaving the tab",
                        "Debug issues while staying on the same webpage",
                        "Use Gemini inside the browser — not in a separate window"
                    ]}
                />

                <SectionText>
                    It feels less like a tool,
                    and more like a **smart assistant living inside the page itself.**
                </SectionText>
            </div>

            {/* PERSONAL VALUE */}
            <div>
                <SectionTitle>How It Helped Me</SectionTitle>
                <SectionText>
                    eSmarty wasn’t just a product —
                    it became part of my daily workflow.
                    <br /><br />
                    While building Sampark, I used eSmarty to:
                </SectionText>

                <BulletPoints
                    items={[
                        "Understand complex error messages instantly",
                        "Debug faster without breaking focus",
                        "Extract meaning from long blogs",
                        "Generate small snippets quickly",
                        "Validate logic without leaving the editor",
                    ]}
                />

                <SectionText>
                    This is the kind of tool you never realize you need
                    until you use it once — and then you can’t work without it.
                </SectionText>
            </div>

            {/* HOW I BUILT IT */}
            <div>
                <SectionTitle>How I Built eSmarty</SectionTitle>
                <SectionText>
                    I approached eSmarty like a product builder —
                    not a random extension developer.
                </SectionText>

                <BulletPoints
                    items={[
                        "Designed the interaction model around *zero context-switching*",
                        "Built Gemini API integration for fast explanations",
                        "Designed a floating modal that works on any tab",
                        "Created smart triggers (select → explain / debug)",
                        "Optimized UI for speed, clarity, and minimalism",
                    ]}
                />

                <SectionText>
                    Every feature was designed around the same goal:
                    **How can I reduce the steps it takes to get clarity?**
                </SectionText>
            </div>

            {/* SYSTEM FEEL */}
            <div>
                <SectionTitle>How the Experience Feels</SectionTitle>
                <SectionText>
                    eSmarty gives a sense of flow —
                    the feeling that the answers are already there,
                    waiting to be revealed inside the page.
                </SectionText>

                <BulletPoints
                    items={[
                        "The UI feels light and instant",
                        "Never blocks your screen",
                        "Adapts to whatever text/code you highlight",
                        "Feels like a small AI window attached to your task",
                        "Creates momentum instead of breaking it",
                    ]}
                />

                <SectionText>
                    It blends into your workflow, not interrupts it.
                </SectionText>
            </div>

            {/* IMPACT */}
            <div>
                <SectionTitle>Impact</SectionTitle>
                <SectionText>
                    For developers, students, and product builders,
                    eSmarty offers a simple but powerful value:
                </SectionText>

                <BulletPoints
                    items={[
                        "Less time switching tabs",
                        "More time actually thinking and building",
                        "Better focus and continuity",
                        "Faster debugging and understanding",
                        "A smoother, calmer workflow",
                    ]}
                />

                <SectionText>
                    It turns the browser into a smarter workspace.
                </SectionText>
            </div>

            {/* LEARNING */}
            <div>
                <SectionTitle>What I Learned</SectionTitle>
                <SectionText>
                    eSmarty taught me the power of building tools
                    that reduce invisible friction.
                </SectionText>

                <BulletPoints
                    items={[
                        "Small tools can create huge productivity gains",
                        "AI works best when it blends into the environment",
                        "Context-switching is the biggest enemy of focus",
                        "Extensions must feel invisible yet powerful",
                        "Fast execution + clarity > fancy UI",
                    ]}
                />

                <SectionText>
                    For me, eSmarty represents the future of personal tooling —
                    where AI becomes a natural part of your workflow,
                    not a separate destination.
                </SectionText>
            </div>

        </CaseLayout>
    );
}
