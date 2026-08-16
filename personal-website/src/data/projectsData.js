import weddingAppImg from '../assets/wedding-website.png';
import uxResearchImg from '../assets/uxgroup.png';
import stemSpotlightImg from '../assets/student-spotlight.png';
import missionGuatemalaImg from '../assets/mission-guatemala.png';


export const projects = [
    {
    slug: "wedding-app",
    title: "Wedding Website and Guest Management App",
    subtitle: null,
    paragraphs: [
        "I got married in 2023 and needed a way to track guest RSVPs and dinner selections. So of course I had to build it myself. Love a good DIY.",
        "I used this as an opportunity to build my first React app, and connected it to MongoDB to store the information. I used Figma for the website design and all of the graphics I needed for the wedding."
    ],
    image: weddingAppImg,
    imageClass: "rounded max-h-[500px] object-contain",
    buttonText: "View Website →",
    buttonHref: "https://katieanddanny.netlify.app"
    },
    {
    slug: "uxui-research-group",
    title: "UX/UI Research Group",
    subtitle: "Founding Member",
    paragraphs: [
        "During my final year at Baldwin Wallace, my favorite professor invited me to help launch the university's UX/UI Research Group. I got our Tobii eye tracking software up and running for the group's first project.",
        "We used the BW Library website as our test case. We recruited students and faculty to complete task scenarios built around the improvements the library wanted to explore. I ran the eye tracking software while a teammate guided participants through each task.",
        "The software captured where people looked and how long each task took, giving us a clear picture of what worked and what didn't. We turned those findings into concrete, data backed recommendations that helped the library make their site more user friendly."
    ],
    image: uxResearchImg,
    imageClass: "rounded max-h-[500px] object-contain",
    buttonText: "More Info →",
    buttonHref: "https://uxcenter.bw.edu/"
    },
    {
    slug: "mission-guatemala",
    title: "Mission Guatemala - Medical Records Software",
    subtitle: null,
    paragraphs: [
        "For my senior capstone project, I was the third team to continue work on a medical records software for the charity Mission Guatemala. I was part of a 4 person group working with C# in Visual Studio and .NET to build a software that allowed the MG nurses to enter patient information and have it store in a database, rather than having to manage paper records. We repeatedly met with the doctors and nurses to show them the software and make changes based on their suggestions.",
        "I was going to be involved in a study abroad group to help the team get up in running in Guatemala and teach them how to use the software but unfortunately Covid had other plans for me. A few years later a new team of seniors was able to go down and deliver the software to them, and I’m happy to know I made an impact on this charity."
    ],  
    image: missionGuatemalaImg,
    imageClass: "rounded max-h-[200px] object-contain",
    buttonText: "More Info →",
    buttonHref: "https://www.bw.edu/news/2023/spring/05-bw-faculty-students-travel-to-guatemala-to-bring-tech-to-medical-records-system"
    },
    {
    slug: "university-recognition",
    title: "University Recognition",
    subtitle: null,
    paragraphs: [
        "I was recommended by a professor to be recognized in Baldwin Wallace's STEM Student Spotlight. It's a simple form of recognition, but having a professor I worked closely with on multiple projects choose to highlight me like that meant a lot, and it helped quiet some of my imposter syndrome along the way."
    ],
    image: stemSpotlightImg,
    imageClass: "rounded max-h-[600px] object-contain mt-5",
    buttonText: null,
    buttonHref: null
    }
];