/**
 * certifications.js
 * Verified certificates and academic achievements for Tawhid Khan Arnob.
 * Stored in /public/certificates/ with actual original PDFs and rendered previews.
 */

export const certifications = [
  {
    id: 1,
    title: "Free SQL Certification Course",
    credentialType: "Certificate of Completion",
    organization: "Intellipaat Academy",
    issueDate: "April 8, 2026",
    credentialId: "31679-619-332712",
    description:
      "Successfully completed all curriculum requirements stipulated by Intellipaat for the Free SQL Certification Course to achieve database querying and management excellence.",
    image: "/certificates/intellipaat-sql-preview.png",
    pdf: "/certificates/intellipaat-sql-certification.pdf",
    verificationUrl:
      "https://intellipaat.com/academy/certificate-link/?Yz02MTkmdT0zMzI3MTImZXh0PTE=",
    skills: ["SQL", "Relational Databases", "Data Querying"],
  },
  {
    id: 2,
    title: "DIU Mathematics Olympiad – Summer 2025",
    credentialType: "Certificate of Participation (Preliminary Round)",
    organization: "DIU Mathematical Society (DIUMS) & Faculty of SIT, DIU",
    issueDate: "July 26, 2025",
    credentialId: "Participant ID: 251-35-450",
    description:
      "Participated in the DIU Mathematics Olympiad – Summer 2025 (Preliminary Round), organized by the Faculty of Science & Information Technology in association with DIUMS at Daffodil International University.",
    image: "/certificates/diums-math-olympiad-preview.png",
    pdf: "/certificates/diums-math-olympiad-2025.pdf",
    skills: ["Mathematics", "Problem Solving", "Analytical Thinking"],
  },
  {
    id: 3,
    title: "Day Long Seminar on Career Planning Roadmap",
    credentialType: "Certificate of Achievement",
    organization: "Department of Software Engineering (SWE), Daffodil International University",
    issueDate: "April 16, 2026",
    credentialId: "",
    description:
      "Awarded for active participation and engagement in the 'Day Long Seminar on Career Planning Roadmap' held at Daffodil International University.",
    image: "/certificates/diu-career-achievement-preview.png",
    pdf: "/certificates/diu-career-planning-roadmap-achievement.pdf",
    skills: ["Career Planning", "Software Engineering", "Professional Growth"],
  },
  {
    id: 4,
    title: "Day Long Seminar on Career Planning Roadmap",
    credentialType: "Certificate of Appreciation (Event Volunteer)",
    organization: "Department of Software Engineering (SWE), Daffodil International University",
    issueDate: "April 16, 2026",
    credentialId: "",
    description:
      "Recognized for valuable support and dedication as an event volunteer in the 'Day Long Seminar on Career Planning Roadmap', ensuring the smooth organization and execution of the seminar.",
    image: "/certificates/diu-career-appreciation-preview.png",
    pdf: "/certificates/diu-career-planning-roadmap-appreciation.pdf",
    skills: ["Volunteering", "Team Collaboration", "Event Coordination"],
  },
];

export default certifications;
