/**
 * projects.js
 * Verified project data for Tawhid Khan Arnob's portfolio.
 * Includes live demos, GitHub repositories, and actual captured previews.
 */

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack / E-Commerce" },
  { id: "frontend", label: "Frontend / Web Apps" },
];

export const projects = [
  {
    id: "suncart",
    title: "SunCart – Summer Essentials Store",
    category: "fullstack",
    shortDescription:
      "A modern summer-themed e-commerce web application with product listings, filtering, dynamic cart management, and seamless responsive shopping workflows.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projects/suncart-preview.png",
    liveUrl: "https://sun-cart-summer-essentials-store-five.vercel.app/",
    repoUrl: "https://github.com/Arnob-450/SunCart-Summer-Essentials-Store",
    featured: true,
  },
  {
    id: "dragon-news",
    title: "Dragon News",
    category: "frontend",
    shortDescription:
      "An interactive online news portal featuring categorized news feeds, breaking highlights, article details, and responsive editorial reading layouts.",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    image: "/images/projects/dragon-news-preview.png",
    liveUrl: "https://dragon-news-eta-eight.vercel.app/category/01",
    repoUrl: "https://github.com/Arnob-450/dragon-news",
    featured: true,
  },
  {
    id: "books-vibe",
    title: "Books Vibe",
    category: "frontend",
    shortDescription:
      "A book discovery and library tracking application allowing readers to browse curated book collections, explore ratings, and manage reading lists.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: "/images/projects/books-vibe-preview.png",
    liveUrl: "https://book-vibe-beta.netlify.app/",
    repoUrl: "https://github.com/Arnob-450/Books-Vibe",
    featured: false,
  },
  {
    id: "digitools-platform",
    title: "Digitools Platform",
    category: "fullstack",
    shortDescription:
      "A consolidated suite of practical web utilities and everyday digital tools engineered for speed, convenience, and productivity.",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    image: "/images/projects/digitools-preview.png",
    liveUrl: "https://digitools-platform-beta.netlify.app/",
    repoUrl: "https://github.com/Arnob-450/Digitools-Platform",
    featured: false,
  },
];

export default projects;
