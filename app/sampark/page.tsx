"use client";

import CaseLayout from "@/components/case/CaseLayout";
import { SectionTitle } from "@/components/case/sections/SectionTitle";
import { SectionText } from "@/components/case/sections/SectionText";
import { BulletPoints } from "@/components/case/sections/BulletPoints";

export default function SamparkPage() {
    return (
        <CaseLayout
            title="Sampark"
            subtitle="A modern community operating system built to bring clarity, coordination, and structure into everyday society life."
        >

            {/* STORY: BEGINNING */}
            <div>
                <SectionTitle>Where Sampark Started</SectionTitle>
                <SectionText>
                    Sampark began with a simple observation:
                    almost every society runs on scattered WhatsApp groups,
                    manual lists, verbal updates, and random screenshots.
                    <br /><br />
                    Residents feel unheard.
                    Society heads feel overloaded.
                    Providers don’t know what’s happening.
                    And everything feels… messy.
                    <br /><br />
                    I wanted to design something that made all of this effortless —
                    without making people adopt ten new tools.
                </SectionText>
            </div>

            {/* STORY: PROBLEM */}
            <div>
                <SectionTitle>The Real Problem</SectionTitle>
                <SectionText>
                    When we studied how societies operate,
                    we found three big pain points:
                </SectionText>

                <BulletPoints
                    items={[
                        "Important updates get lost in chat noise",
                        "Residents raise issues but don't know what happened next",
                        "Society heads manage too many people without visibility",
                    ]}
                />

                <SectionText>
                    Nothing was built specifically for community life.
                    So we built Sampark.
                </SectionText>
            </div>

            {/* STORY: THE IDEA */}
            <div>
                <SectionTitle>The Core Idea</SectionTitle>
                <SectionText>
                    Instead of creating a giant monolithic app,
                    I broke the system into simple modules —
                    each solving one real problem at a time.
                    <br /><br />
                    And all modules quietly stitched together into
                    one clean, consistent experience.
                </SectionText>
            </div>

            {/* STORY: WHAT IT DOES */}
            <div>
                <SectionTitle>What Sampark Does</SectionTitle>
                <SectionText>
                    Sampark feels like a control center for a society.
                </SectionText>

                <BulletPoints
                    items={[
                        "Announcements reach every resident instantly",
                        "Help requests move through a clear lifecycle (raised → assigned → resolved)",
                        "Providers & stores have their own space inside the society",
                        "Chat becomes structured and real-time",
                        "Residents know exactly what’s happening around them",
                    ]}
                />

                <SectionText>
                    No chaos. No confusion. Everything in one place.
                </SectionText>
            </div>

            {/* STORY: MY ROLE */}
            <div>
                <SectionTitle>How I Built It</SectionTitle>
                <SectionText>
                    I approached Sampark like a product builder —
                    not a coder writing 1000s of lines of code.
                    <br /><br />
                    My focus was:
                </SectionText>

                <BulletPoints
                    items={[
                        "Designing clean, modular workflows",
                        "Creating a simple mental model for how society operations should feel",
                        "Breaking the system into understandable modules",
                        "Designing predictable flows for every user role",
                        "Using AI to speed up implementation, not to replace decision-making",
                    ]}
                />

                <SectionText>
                    Every module was crafted based on reasoning:
                    *What do people actually do inside a society?*
                </SectionText>
            </div>

            {/* STORY: SYSTEM FEEL */}
            <div>
                <SectionTitle>How the System Feels</SectionTitle>
                <SectionText>
                    Sampark is structured but never feels heavy.
                    It feels like:
                </SectionText>

                <BulletPoints
                    items={[
                        "One clean dashboard",
                        "Clear sections for each module",
                        "Instant feedback on every action",
                        "Real-time updates when something changes",
                        "Predictable behaviour across the entire system",
                    ]}
                />

                <SectionText>
                    The goal was to make the system feel like it always knows
                    exactly what you want to do next.
                </SectionText>
            </div>

            {/* STORY: IMPACT */}
            <div>
                <SectionTitle>Impact</SectionTitle>
                <SectionText>
                    For the first time, societies get:
                </SectionText>

                <BulletPoints
                    items={[
                        "Structured communication instead of noisy groups",
                        "A clear system to track issues and resolutions",
                        "A place for providers to operate professionally",
                        "Real-time visibility for critical updates",
                        "A calm digital environment that brings clarity",
                    ]}
                />

                <SectionText>
                    Residents feel heard.
                    Heads feel organized.
                    Providers feel informed.
                    <br /><br />
                    Sampark brings order where there was only noise.
                </SectionText>
            </div>

            {/* STORY: LEARNING */}
            <div>
                <SectionTitle>What I Learned</SectionTitle>
                <SectionText>
                    Sampark taught me something important:
                    great systems aren’t built with complexity —
                    they’re built with clarity.
                </SectionText>

                <BulletPoints
                    items={[
                        "Designing around real human behavior",
                        "Keeping modules clean and independent",
                        "Making flows predictable, not fancy",
                        "Balancing system design with fast execution",
                        "Using AI to accelerate but using my mind to architect",
                    ]}
                />

                <SectionText>
                    For me, Sampark isn’t just a project.
                    It’s proof that one person can build
                    structured, calm, scalable systems —
                    with the right thinking and the right tools.
                </SectionText>
            </div>

        </CaseLayout>
    );
}
