"use client";

import CaseLayout from "@/components/case/CaseLayout";
import { SectionTitle } from "@/components/case/sections/SectionTitle";
import { SectionText } from "@/components/case/sections/SectionText";
import { BulletPoints } from "@/components/case/sections/BulletPoints";

export default function EcoTrackPage() {
    return (
        <CaseLayout
            title="EcoTrack"
            subtitle="A community-first waste reporting and environmental visibility system built for my hometown — Hazaribagh, Jharkhand."
        >

            {/* STORY BEGINNING */}
            <div>
                <SectionTitle>Where EcoTrack Really Began</SectionTitle>
                <SectionText>
                    EcoTrack didn’t start as a product idea.
                    It started as frustration.
                    <br /><br />
                    I grew up in <b>Hazaribagh, Jharkhand</b> — a city full of potential,
                    but struggling with one visible problem:
                    <br />
                    <i>waste everywhere, no system to manage it.</i>
                    <br /><br />
                    People threw garbage on roads, drains, empty spots.
                    Some waste stayed untouched for an entire week.
                    Mosquitos, smell, pollution — it became part of daily life.
                    <br /><br />
                    And the worst part?
                    <b> There was no proper system for citizens to report it, </b>
                    and no platform for staff or government to coordinate.
                    <br /><br />
                    That’s when EcoTrack was born — not as a startup,
                    but as something I wanted to <b>donate back to my city.</b>
                </SectionText>
            </div>

            {/* THE REAL PROBLEM */}
            <div>
                <SectionTitle>The Problem in My City</SectionTitle>
                <SectionText>
                    Hazaribagh has cleaners, officers, and government staff —
                    but <b>no digital system that connects everyone together. </b>
                    After observing the problem closely, I found major gaps:
                </SectionText>

                <BulletPoints
                    items={[
                        "Waste piles stayed in the same spot for days or weeks",
                        "Citizens had no structured way to report any issue",
                        "Cleaning staff never received real-time location-based tasks",
                        "Government had zero visibility into what’s happening on the ground",
                        "Communication between citizens → staff → admin was completely broken",
                    ]}
                />

                <SectionText>
                    EcoTrack became my attempt to build a platform
                    that simplifies reporting and accelerates response.
                </SectionText>
            </div>

            {/* THE IDEA */}
            <div>
                <SectionTitle>Why I Built EcoTrack</SectionTitle>
                <SectionText>
                    I kept asking myself:
                    <br />
                    <i>“If we can track food delivery in real time, why not garbage pickup?”</i>
                    <br /><br />
                    EcoTrack was designed with a simple mission:
                    <b> give citizens a voice and give staff visibility.</b>
                    <br /><br />
                    At its core, the platform revolves around two things:
                </SectionText>

                <BulletPoints
                    items={[
                        "Simple reporting for citizens (photo + location)",
                        "Clear action flow for staff and admin to resolve issues quickly",
                    ]}
                />

                <SectionText>
                    A small complaint can trigger real action —
                    if the system connects the right people at the right time.
                </SectionText>
            </div>

            {/* WHAT IT DOES */}
            <div>
                <SectionTitle>What EcoTrack Enables</SectionTitle>
                <SectionText>
                    EcoTrack connects four types of users:
                    <br />
                    <b>Citizens, Organizations (NGOs), Cleaning Staff, and Admin.</b>
                    <br /><br />
                    Each one gets a tailored experience:
                </SectionText>

                <BulletPoints
                    items={[
                        "Citizens report waste instantly with photos and pinned locations",
                        "Staff receive assigned tasks with accurate map directions",
                        "Organizations manage their staff and view task updates",
                        "Admins monitor the entire city from a single dashboard",
                        "Every report moves through a clean workflow: Submitted → Assigned → Resolved",
                    ]}
                />

                <SectionText>
                    EcoTrack is designed to make cleaning the city
                    faster, transparent, and well-coordinated.
                </SectionText>
            </div>

            {/* HOW I BUILT IT */}
            <div>
                <SectionTitle>How I Built EcoTrack</SectionTitle>
                <SectionText>
                    I built EcoTrack with a <b>clear intention — donate it to my city. </b>
                    No commercial motive. Just impact.
                    <br /><br />
                    My work included:
                </SectionText>

                <BulletPoints
                    items={[
                        "Researching how waste management currently works in Hazaribagh",
                        "Designing flows for four different user roles",
                        "Architecting simple reporting + assignment + verification workflows",
                        "Building the core system using Next.js and Firebase",
                        "Using AI to accelerate development without compromising quality",
                    ]}
                />

                <SectionText>
                    EcoTrack was designed for people who aren’t tech-savvy,
                    so everything had to be as simple as possible.
                </SectionText>
            </div>

            {/* FEEL */}
            <div>
                <SectionTitle>How the System Feels</SectionTitle>
                <SectionText>
                    EcoTrack feels like a “cleanliness control room”
                    rather than a traditional app.
                </SectionText>

                <BulletPoints
                    items={[
                        "A structured, friendly interface for citizens",
                        "Staff dashboard that shows tasks clearly",
                        "Admin controls that give full visibility",
                        "Smooth map-based reporting and tracking",
                        "A flow that reduces delay and removes confusion",
                    ]}
                />

                <SectionText>
                    The system makes reporting easier than complaining.
                </SectionText>
            </div>

            {/* IMPACT */}
            <div>
                <SectionTitle>Impact (Even Before Launch)</SectionTitle>
                <SectionText>
                    Even in its prototype form, EcoTrack showed how a city
                    like Hazaribagh could function better:
                </SectionText>

                <BulletPoints
                    items={[
                        "Faster cleaning because tasks reach staff instantly",
                        "Reduced pollution hotspots through consistent reporting",
                        "Better accountability for cleaning teams",
                        "Structured communication between citizens and authorities",
                        "A model that other small cities could adopt",
                    ]}
                />

                <SectionText>
                    EcoTrack isn’t just a tool.
                    It’s a small step toward a cleaner city.
                </SectionText>
            </div>

            {/* WHAT I LEARNED */}
            <div>
                <SectionTitle>What I Learned</SectionTitle>
                <SectionText>
                    EcoTrack taught me that meaningful products can come
                    from something as simple as observing your own environment.
                </SectionText>

                <BulletPoints
                    items={[
                        "How to design civic-tech workflows",
                        "How to build systems for four different user types",
                        "How to blend community needs with product clarity",
                        "How to use AI to accelerate complex prototyping",
                    ]}
                />

                <SectionText>
                    EcoTrack will always be one of my most personal projects —
                    because it was built for the streets I grew up walking on.
                </SectionText>
            </div>

        </CaseLayout>
    );
}
