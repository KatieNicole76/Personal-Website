import ExperienceCard from "./ExperienceCard";
import divider from '../assets/divider.png';
import star5 from '../assets/star-5.png';


const jobs = [
  {
    company: "Baldwin Wallace University",
    dates: "2017 - 2021",
    role: <>Software Engineering Major<br />Studio Art Minor</>,
    bullets: [],
    variant: "light"
  }
];

export default function Education() {
  return (
    <div className="relative mb-10">
      <div className="flex flex-col gap-2">
        <img alt="" className="max-h-[40px] mt-6 px-2" src={divider} />
        <img alt="" className="max-h-[150px] absolute top-10 left-3" src={star5}/>
        <h2 className="text-h2 text-gold mb-1 text-center">Education</h2>
        {jobs.map((job) => (
          <ExperienceCard key={job.company} {...job} />
        ))}
      </div>
    </div>
  );
}