import ExperienceCard from "./ExperienceCard";
import Divider from "./Divider";
import moths from '../assets/moths.png';
import star4 from '../assets/star-4.png';

const jobs = [
  {
    company: "Westfield Insurance",
    dates: "Jan 23 - Now",
    role: "Software Engineer",
    bullets: [
        <>Delivered ~20 story points per sprint on average, roughly double the team average of ~10, while maintaining high code quality and low defect rates.</>,
        <>Selected for a competitive <strong className="font-bold">Technical Leadership Growth Group</strong>, one of a small group chosen by leadership based on performance and work ethic.</>,
        <>Built a  police report AI summarization tool through <strong className="font-bold">prompt engineering</strong> within ClaimCenter</>,
        <><strong className="font-bold">Mentored</strong> a summer intern on development best practices, code review standards, and project execution.</>,
        <>Migrated core integration infrastructure from <strong className="font-bold">MuleSoft</strong> to <strong className="font-bold">Java Spring Boot</strong> and <strong className="font-bold">Gravitee,</strong> improving system reliability and maintainability.</>,
        <>Built an event-driven <strong className="font-bold">GenAI</strong> pipeline <strong className="font-bold">(Python, ChatGPT API, Kafka, Spring Boot/Gravitee)</strong> that automatically summarizes claims documents from FileNet and displays them in ClaimCenter, reducing manual review time for adjusters.</>,
        <>Designed and implemented new <strong className="font-bold">RESTful API integrations,</strong> using <strong className="font-bold">Postman</strong> for testing and validation.</>,
        <>Collaborated within a 7-developer team on a large <strong className="font-bold">Agile Release Train (ART),</strong> using <strong className="font-bold">Jira</strong> for sprint planning and tracking, <strong className="font-bold">Git</strong> for version control, and full participation in <strong className="font-bold">Scrum</strong> ceremonies.</>,
    ],
    variant: "light"
  },
  {
    company: "Qwickly",
    dates: "July 21 - Jan 23",
    role: "Software Engineer & Designer",
    bullets: [
      <>Built backend features in <strong className="font-bold">Django/Python</strong> to integrate with third-party LMS platforms, calling external <strong className="font-bold">APIs</strong> and persisting data into a <strong className="font-bold">SQL</strong> database.</>,
      "Implemented customer feedback to enhance product features, resulting in a 3x increase in sales within one year.",
      <>Worked with <strong className="font-bold">AWS</strong> storage services to support data handling for these integrations.</>,
      <>Led the redesign of user interfaces using <strong className="font-bold">Figma</strong>, ensuring full ADA accessibility and mobile responsiveness.</>,
      "Managed design files and contributed to a cohesive design system used across all company products.",
      <>Collaborated with front-end developers to build reusable components using <strong className="font-bold">JavaScript, JQuery, HTML, CSS</strong>, streamlining development.</>,
    ],
    variant: "dark"
  },
];

export default function WorkExperience() {
  return (
    <div className="relative">
      <img alt="" className="max-h-[100px] absolute top-12 right-2" src={moths}/>
      <div className="flex flex-col gap-2">
        <Divider />
        <h2 className="text-h2 text-gold mb-1 text-center">Work Experience</h2>
        {jobs.map((job) => (
          <ExperienceCard key={job.company} {...job} />
        ))}
      </div>
    </div>
  );
}