/**
 * skills.js
 * Technical skills for Tawhid Khan Arnob's portfolio.
 * Categorized cleanly without fake percentages or progress bars.
 */

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "HTML", tag: "Markup" },
      { name: "CSS", tag: "Styling" },
      { name: "JavaScript", tag: "Core" },
      { name: "TypeScript", tag: "Typed" },
      { name: "React", tag: "Library" },
      { name: "Next.js", tag: "Framework" },
      { name: "Tailwind CSS", tag: "Utility CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Creating server-side logic, REST APIs, and application services.",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "Framework" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Data modeling, storage, and persistence management.",
    skills: [
      { name: "MongoDB", tag: "NoSQL Database" },
    ],
  },
];

export const allSkillsList = skillCategories.flatMap((cat) => cat.skills);

export default skillCategories;
