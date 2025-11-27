"use client";

import CaseLayout from "@/components/case/CaseLayout";
import { SectionTitle } from "@/components/case/sections/SectionTitle";
import { SectionText } from "@/components/case/sections/SectionText";
import { BulletPoints } from "@/components/case/sections/BulletPoints";

export default function SamparkPage() {
    return (
        <CaseLayout
            title="Sampark"
            subtitle="A community-first platform that connects housing, people, services, and everyday needs into one unified ecosystem."
        >

            {/* ORIGIN STORY */}
            <div>
                <SectionTitle>Where Sampark Really Began</SectionTitle>
                <SectionText>
                    Sampark didn’t start as a startup idea.
                    It started from observing how disconnected people are when they move, live, or try to settle in a new place.
                    <br /><br />
                    Whether it’s students shifting cities, employees relocating for jobs,
                    society heads struggling to fill flats, or people searching for plumbers or tutors —
                    <b>everyone faces the same confusion:</b>
                    <br />
                    <i>“Where do I find the right person or the right place?”</i>
                    <br /><br />
                    I’m a community-driven person.
                    I believe people feel safe when they know their surroundings,
                    their neighbors, their services, their support system.
                    <br /><br />
                    But our cities don’t have a single platform for all of this.
                    So Sampark became my answer.
                </SectionText>
            </div>

            {/* CORE PROBLEM */}
            <div>
                <SectionTitle>The Problem</SectionTitle>
                <SectionText>
                    The problems in housing and community life look different,
                    but they all come from one root issue — <b>disconnection.</b>
                    <br /><br />
                    After studying how people actually live and move,
                    I found these major gaps:
                </SectionText>

                <BulletPoints
                    items={[
                        "Students don’t know where to find rooms or reliable roommates",
                        "Employees relocating for work feel lost about societies and safety",
                        "Society heads struggle to fill empty flats efficiently",
                        "Residents have no quick way to find plumbers, tutors, electricians inside society",
                        "Builders and flat owners have no proper place to list their spaces",
                        "People can’t sell items or services within their own community easily",
                        "Finding trustworthy help, friends, or local guides is very difficult",
                    ]}
                />

                <SectionText>
                    Sampark is my attempt to bring order, clarity,
                    and connection into a space that’s usually full of confusion.
                </SectionText>
            </div>

            {/* THE IDEA */}
            <div>
                <SectionTitle>The Vision Behind Sampark</SectionTitle>
                <SectionText>
                    I wanted to build something that solves not just one problem —
                    but the entire ecosystem around living, shifting, and connecting.
                    <br /><br />
                    Sampark is designed around one simple idea:
                    <br />
                    <b>“Everything you need around your home and community should live in one platform.”</b>
                    <br /><br />
                    Whether it's finding a room, a roommate, a neighbor you can trust,
                    a tutor for your brother, a plumber, a society to move into,
                    or even a place to sell your old table —
                    Sampark brings everything together.
                </SectionText>
            </div>

            {/* SYSTEM */}
            <div>
                <SectionTitle>Who Uses Sampark</SectionTitle>
                <SectionText>
                    The platform is built for an entire community ecosystem:
                </SectionText>

                <BulletPoints
                    items={[
                        "Members (normal residents)",
                        "Society Heads",
                        "Vendors / Service Providers",
                        "Flat Owners & Builders",
                        "Roommate Seekers",
                        "Local Stores",
                        "Admins managing the entire system",
                    ]}
                />

                <SectionText>
                    Each role sees the platform differently —
                    but everyone shares the same environment.
                </SectionText>
            </div>

            {/* FEATURES NOW */}
            <div>
                <SectionTitle>What I’ve Built So Far (MVP)</SectionTitle>
                <SectionText>
                    Sampark’s MVP is already functional,
                    designed with modular structure and rapid iteration.
                </SectionText>

                <BulletPoints
                    items={[
                        "Full authentication system",
                        "Role-based dashboards for every user type",
                        "Society module with flats, blocks, posting",
                        "Posting system for selling, buying, services, and community needs",
                        "Chat interface for communication",
                        "Roommate + room listing flows",
                        "Basic vendor and service directory",
                        "Database structures for scalable modules",
                    ]}
                />

                <SectionText>
                    The core foundation is solid — now it needs polish, testing, and scaling.
                </SectionText>
            </div>

            {/* FUTURE FEATURES */}
            <div>
                <SectionTitle>What’s Coming Next</SectionTitle>
                <SectionText>
                    Sampark is not a small app.
                    It’s a future community network —
                    and some of the upcoming modules include:
                </SectionText>

                <BulletPoints
                    items={[
                        "Online payment integration",
                        "AI-powered recommendations for rooms, societies, jobs, and services",
                        "Analytics for society admins and builders",
                        "Neighborhood insights and trust profiles",
                        "Advanced service marketplace",
                        "Community events, notices, and announcements",
                    ]}
                />

                <SectionText>
                    These features turn Sampark from a tool into a living ecosystem.
                </SectionText>
            </div>

            {/* MY ROLE */}
            <div>
                <SectionTitle>How I Built It</SectionTitle>
                <SectionText>
                    I designed and built Sampark from scratch —
                    not just as a developer, but as a product builder.
                </SectionText>

                <BulletPoints
                    items={[
                        "Designed flows for housing, communication, and community services",
                        "Mapped modules like societies, rooms, roommate search, stores, posts",
                        "Structured database and role-based logic",
                        "Built dashboards and core UI foundations",
                        "Used AI to accelerate coding and remove friction",
                        "Iterated fast using rapid prototyping cycles",
                    ]}
                />

                <SectionText>
                    Sampark reflects my ability to design complex multi-role systems
                    and execute them with clarity.
                </SectionText>
            </div>

            {/* IMPACT */}
            <div>
                <SectionTitle>Why Sampark Matters</SectionTitle>
                <SectionText>
                    Sampark isn’t just a project —
                    it’s a platform that solves real human problems.
                </SectionText>

                <BulletPoints
                    items={[
                        "Helps students and workers find homes without stress",
                        "Connects residents to helpful neighbors and services",
                        "Gives society heads and builders visibility and reach",
                        "Creates a trusted community network inside each society",
                        "Makes shifting cities feel less lonely and confusing",
                        "Builds connections between people who share the same environment",
                    ]}
                />

                <SectionText>
                    In a country where millions move between cities every year,
                    a platform like Sampark can completely transform how communities form.
                </SectionText>
            </div>

            {/* LEARNING */}
            <div>
                <SectionTitle>What I Learned</SectionTitle>
                <SectionText>
                    Sampark taught me how to handle large-scale, multi-module systems
                    and design flows that work for many user types at once.
                </SectionText>

                <BulletPoints
                    items={[
                        "How to build a multi-role system from scratch",
                        "How to design a community-driven product",
                        "How to think in terms of ecosystems, not features",
                        "How to use AI to speed up execution",
                        "How to align product design with real human behavior",
                    ]}
                />

                <SectionText>
                    For me, Sampark is not just a product —
                    it’s the foundation of my future startup.
                </SectionText>
            </div>

        </CaseLayout>
    );
}
