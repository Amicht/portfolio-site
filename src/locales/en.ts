import { LanguageI } from "../models/LanguageModel";

export const en: LanguageI = {
    dir: 'ltr',
    lang: 'en',
    fullLanguageName: "English",
    sections: {
        intro: {
            title: "Amit Licht",
            subtitle: "Full-Stack Developer",
            myTechStack: 'myTechStack=',
            whoAmI: "who am I?",
            projects: "projects",
        },
        skills: {
            title: 'Languages and Tools'
        },
        projects: {
            title: "CHECK OUT SOME OF MY PROJECTS",
            allSkills: 'All',
        },
        about: {
            description: [
                "I am a full-stack developer with hands-on experience in E2E development as a freelance and on personal projects.",
                "I've spend 12 years working as a musician - performing, composing and managing rehearsals.",
                "As a former artist, I have an eye for design, enthusiasm and I know how to be a good service provider.",
                "I never give up when it comes to problem solving and making sure the job is done the best way possible.",       
            ],
            myStrength: [
                "Passionate programmer",
                "Highly motivated",
                "Spend at least 6 hours every day coding and learning",
                "Love to teach, share knowledge and help others",
                "Creative mind",
                "Can-do attitude",
                "Challenge seeker"
            ],
            frontend: "Frontend",
            backend: "Backend",
            database: "Database",
            titles: {
                whoAmI: "WHO AM I?",
                techStack: "MY TECH-STACK:",
                myStrength: "MY STRENGTH:"
            }
        }
    }
}