
export interface LanguageI{

    dir: 'rtl' | 'ltr';
    lang: 'he' | 'en';
    fullLanguageName: string;
    sections: {
        about: About_Section;
        intro: Intro_Section;
        skills: Skills_Section;
        projects: Projects_Section;
    }

}

type Projects_Section = {
    title: string;
    allSkills: string;
}

type Intro_Section = {
    title: string;
    subtitle: string;
    myTechStack: string;
    whoAmI: string;
    projects: string;
}

type Skills_Section = { title: string };

type About_Section = {
    titles: About_Titles;
    myStrength: string[];
    description: string[];
    frontend: string;
    backend: string;
    database: string;
}

type About_Titles = {
    whoAmI: string;
    techStack: string;
    myStrength: string;
}