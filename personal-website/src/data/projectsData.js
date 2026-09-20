import weddingAppImg from '../assets/wedding-website.png';
import uxResearchImg from '../assets/uxgroup.png';
import stemSpotlightImg from '../assets/student-spotlight.png';
import missionGuatemalaImg from '../assets/mission-guatemala.png';

import recipeLogin from '../assets/recipe-app/recipe-login.png';
import recipeList from '../assets/recipe-app/recipe-list.png';
import recipeDetail from '../assets/recipe-app/recipe-detail.png';
import recipeShoppingList from '../assets/recipe-app/recipe-shopping-list.png';
import recipeAdd from '../assets/recipe-app/recipe-add.png';
import recipeAdd1 from '../assets/recipe-app/recipe-add-1.png';
import recipeAdd2 from '../assets/recipe-app/recipe-add-2.png';



export const projects = [
    {
        slug: "recipe-book",
        title: "Recipe Book: AI-Powered Recipe & Meal Planning App",
        subtitle: "Full-Stack Personal Project",
        paragraphs: ["Something I love to do outside of work is cooking, and I haven't quite found a recipe app that did everything I wanted it to do. So obviously, I built my own. Recipe book is a full stack progressive web app that allows users to save recipes, create shopping lists, and plan meals. It also has a feature that allows users to paste in a recipe URL or video link and have an AI parse the recipe into ingredients, directions, and tags for easy searching and filtering."
        ],
        techStack: ["Python","Django REST Framework", "React","Tailwind", "Vite PWA", "Claude API", "JWT Auth", "PostgreSQL", "Railway", "Netlify"],
        features: [
            "AI recipe extraction from any recipe URL or video link. AI parses the recipe and structures it into ingredients, directions, and tags for easy searching and filtering",
            "Family accounts so household members share and save each other's recipes",
            "Shopping list auto-sorted into grocery categories, with the ability to add ingredients straight from the recipe.",
            "Installable as a PWA with offline-friendly caching.",
            "Guest demo mode woth a fresh sandboxed account with sample recipes.",
        ],
        images: [
            { src: recipeLogin, alt: "Recipe Book login screen with a one-click demo option" },
            { src: recipeList, alt: "Recipe grid showing saved recipes with tags" },
            { src: recipeDetail, alt: "Recipe detail page with ingredients and numbered directions" },
            { src: recipeShoppingList, alt: "Shopping list auto-sorted into grocery categories" },
            { src: recipeAdd, alt: "Add a recipe screen for pasting a link for AI extraction" },
            { src: recipeAdd1, alt: "Add a recipe screen for pasting a link for AI extraction" },
            { src: recipeAdd2, alt: "Add a recipe screen for pasting a link for AI extraction" },

        ],
        imageClass: "rounded-xl max-h-[520px] object-contain",
        buttons: [
            { text: "Try the Live Demo →", href: "https://katiesrecipebook.netlify.app/", variant: "solid" },
            { text: "View Code →", href: "https://github.com/KatieNicole76/Recipe-Book", variant: "outline" },
        ],
    },
    {
        slug: "wedding-app",
        title: "Wedding Website and Guest Management App",
        subtitle: "Full-Stack Personal Project",
        techStack: ["React", "MongoDB", "Node.js", "Figma", "CSS/HTML"],
        paragraphs: [
            "I got married in 2023 and needed a way to track guest RSVPs and dinner selections. So of course I had to build it myself. Love a good DIY.",
            "I used this as an opportunity to build my first React app, and connected it to MongoDB to store the information. I used Figma for the website design and all of the graphics I needed for the wedding."
        ],
        features: [
            "Guest Lookup and RSVP submission with dinner selection",
            "MongoDB database to store guest information and RSVPs",
        ],
        image: weddingAppImg,
        imageClass: "rounded max-h-[500px] object-contain",
        buttons: [
            { text: "View Website →", href: "https://katieanddanny.netlify.app", variant: "solid" },
            { text: "View Code →", href: "https://github.com/KatieNicole76/Wedding", variant: "outline" },
        ],
    },
    {
        slug: "uxui-research-group",
        title: "UX/UI Research Group",
        subtitle: "Founding Member",
        techStack: ["Tobii Eye Tracking Software", "UX Research", "User Testing"],
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
        techStack: ["C#", ".NET", "Visual Studio", "SQL Server"],
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