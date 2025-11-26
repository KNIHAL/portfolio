"use client";

import CaseLayout from "@/components/case/CaseLayout";
import { SectionTitle } from "@/components/case/sections/SectionTitle";
import { SectionText } from "@/components/case/sections/SectionText";
import { BulletPoints } from "@/components/case/sections/BulletPoints";

export default function EcoTrackPage() {
    return (
        <CaseLayout
            title="EcoTrack"
            subtitle="A smart environment monitoring and reporting system designed for modern smart-city needs."
        >

            {/* STORY: BEGINNING */}
            <div>
                <SectionTitle>Where EcoTrack Started</SectionTitle>
                <SectionText>
                    EcoTrack began as a simple question:
                    *If cities can have cameras everywhere, why can’t they have environmental visibility too?*
                    <br /><br />
                    Pollution levels spike without warning.
                    Waste collection gets delayed.
                    Noise and air quality vary hour to hour.
                    And yet — most cities still track these things manually.
                    <br /><br />
                    EcoTrack was built to change that.
                </SectionText>
            </div>

            {/* PROBLEM */}
            <div>
                <SectionTitle>The Problem</SectionTitle>
                <SectionText>
                    After studying how municipalities handle environmental tracking,
                    we found three major gaps:
                </SectionText>

                <BulletPoints
                    items={[
                        "No real-time data about air, noise, or waste conditions",
                        "Residents have no structured way to report environmental issues",
                        "City officers make decisions reactively, not proactively",
                    ]}
                />

                <SectionText>
                    EcoTrack tries to shift cities from *reaction* to *readiness*.
                </SectionText>
            </div>

            {/* THE IDEA */}
            <div>
                <SectionTitle>The Core Idea</SectionTitle>
                <SectionText>
                    EcoTrack works like a digital nervous system for a city.
                    Instead of waiting for issues to escalate,
                    it identifies them early and helps officers act quickly.
                    <br /><br />
                    The system is designed around two pillars:
                </SectionText>

                <BulletPoints
                    items={[
                        "Real-time environmental data from sensors",
                        "Structured issue reporting from citizens",
                    ]}
                />

                <SectionText>
                    When combined, these two signals create a powerful feedback loop.
                </SectionText>
            </div>

            {/* WHAT IT DOES */}
            <div>
                <SectionTitle>What EcoTrack Does</SectionTitle>
                <SectionText>
                    EcoTrack provides a single dashboard where environment officers,
                    municipal staff, and citizens all interact with clarity.
                </SectionText>

                <BulletPoints
                    items={[
                        "Real-time air, noise, and temperature readings",
                        "Smart alerts for pollution spikes",
                        "Citizen reports about waste, contamination, leakage, or hazards",
                        "Issue resolution tracking (assigned → verified → resolved)",
                        "City-level analytics showing trends and hotspots",
                    ]}
                />

                <SectionText>
                    Cities get visibility.
                    Residents get a voice.
                    Officers get control.
                </SectionText>
            </div>

            {/* MY ROLE */}
            <div>
                <SectionTitle>How I Built It</SectionTitle>
                <SectionText>
                    I built EcoTrack as a rapid prototyping project —
                    focusing on clarity, data flow, and fast execution.
                    <br /><br />
                    My responsibilities included:
                </SectionText>

                <BulletPoints
                    items={[
                        "Designing the entire system layout & workflows",
                        "Creating the dashboard structure for officers",
                        "Designing report flows for citizens",
                        "Setting up modules for sensors, alerts, and issue tracking",
                        "Using AI to speed up implementation without losing precision",
                    ]}
                />

                <SectionText>
                    Every screen was designed with the same principle:
                    *show only what matters right now.*
                </SectionText>
            </div>

            {/* SYSTEM FEEL */}
            <div>
                <SectionTitle>How the System Feels</SectionTitle>
                <SectionText>
                    EcoTrack feels fast, clear, and informative —
                    like a “weather report for the environment,”
                    but with actionable controls.
                </SectionText>

                <BulletPoints
                    items={[
                        "Real-time cards and indicators",
                        "Simple reporting flow for citizens",
                        "Analytics that reveal patterns and hotspots",
                        "Clean maps with pollution levels",
                        "A dashboard that reduces chaos instead of adding to it",
                    ]}
                />

                <SectionText>
                    Officers get information that’s organized, not overwhelming.
                </SectionText>
            </div>

            {/* IMPACT */}
            <div>
                <SectionTitle>Impact</SectionTitle>
                <SectionText>
                    EcoTrack creates value in three layers:
                </SectionText>

                <BulletPoints
                    items={[
                        "Citizens report issues instead of complaining on social media",
                        "Municipal teams respond faster with real visibility",
                        "City-level data improves planning and decision-making",
                    ]}
                />

                <SectionText>
                    Even as a prototype, EcoTrack shows how a city can
                    feel healthier, more transparent, and more efficient.
                </SectionText>
            </div>

            {/* LEARNING */}
            <div>
                <SectionTitle>What I Learned</SectionTitle>
                <SectionText>
                    EcoTrack taught me how to build systems where multiple roles
                    interact with the same data but in different ways.
                </SectionText>

                <BulletPoints
                    items={[
                        "How to structure real-time dashboards",
                        "How to design systems that blend sensors + humans",
                        "How to simplify reporting flows for non-technical users",
                        "How to combine clarity with speed using AI assistance",
                    ]}
                />

                <SectionText>
                    For me, EcoTrack is a reminder that great products often start
                    with a simple question — *“Why doesn’t this exist already?”*
                </SectionText>
            </div>

        </CaseLayout>
    );
}
