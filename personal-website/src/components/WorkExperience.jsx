import ExperienceCard from "./ExperienceCard";
import divider from '../assets/divider.png';

const jobs = [
  {
    company: "Westfield Insurance",
    dates: "Jan 23 - Now",
    role: "Software Engineer",
    bullets: [
        "Delivered ~20 story points per sprint on average, roughly double the team average of ~10, while maintaining high code quality and low defect rates.",
        "Selected for a competitive Technical Leadership Growth Group, one of a small group chosen by leadership based on performance and work ethic.", 
        "Mentored a summer intern on development best practices, code review standards, and project execution.", 
        "Played a key role in migrating core integration infrastructure from MuleSoft to Java Spring Boot and Gravitee, improving system reliability and maintainability.",
        "Designed and implemented new RESTful API integrations, using Postman for testing and validation.",
        "Collaborated within a 7-developer team on a large Agile Release Train (ART), using Jira for sprint planning and tracking, Git for version control, and full participation in Scrum ceremonies.", 
        "Built an event-driven GenAI pipeline (Python, ChatGPT API, Kafka, Spring Boot/Gravitee) that automatically summarizes claims documents from FileNet and displays them in ClaimCenter, reducing manual review time for adjusters." 
    ],
    variant: "light"
  },
  {
    company: "Qwickly",
    dates: "July 21 - Jan 23",
    role: "Software Engineer & Designer",
    bullets: [
        "Built backend features in Django to integrate with third-party LMS platforms (Blackboard, Canvas, D2L), calling external APIs and persisting data into a SQL database.",
        "Implemented customer feedback to enhance product features, resulting in a 3x increase in sales within one year.",
        "Worked with AWS storage services to support data handling for these integrations.",
        "Led the redesign of user interfaces using Figma, ensuring full  ADA accessibility and mobile responsiveness.",
        "Managed design files and contributed to a cohesive design system used across all company products.",
        "Collaborated with front-end developers to build reusable components, streamlining development."
    ],
    variant: "dark"
  },
];

export default function WorkExperience() {
  return (
    <div className="flex flex-col items-center">
    <img alt="" className="max-h-[40px] mt-4 mb-2 px-2" src={divider} />
    <h2 className="text-h2 text-gold mb-1">Work Experience</h2>
      {jobs.map((job) => (
        <ExperienceCard key={job.company} {...job} />
      ))}
    </div>
  );
}