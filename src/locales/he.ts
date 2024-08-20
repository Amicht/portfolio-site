import { LanguageI } from "../models/LanguageModel";

export const he: LanguageI = {
    dir: 'rtl',
    lang: 'he',
    fullLanguageName: "עברית",
    sections: {
        intro: {
            title: 'עמית ליכט',
            subtitle: 'מפתח פולסטאק',
            myTechStack: 'myTechStack=',
            whoAmI: "מי אני?",
            projects: "פרוייקטים",
        },
        skills: {
            title: 'שפות, טכנולוגיות וכלים'
        },
        projects: {
            title: 'תיק עבודות ופרוייקטים להתרשמות',
            allSkills: 'הכל',
        },
        about: {
            description: [
                "אני מפתח פולסטאק עם ניסיון מעשי בפיתוח מקצה לקצה כפרילנסר ובפרוייקטים אישיים",
                "עבדתי 12 שנים כמוזיקאי - ביצוע, הלחנה וניהול חזרות.",
                "כאמן לשעבר, יש לי עין לעיצוב, ,תשוקה לעבודה ואני יודע להיות נותן שירות טוב.",
                "אני אף פעם לא מוותר בכל הנוגע לפתרון בעיות ולוודא שהעבודה מתבצעת בצורה הטובה ביותר.",
            ],
            myStrength: [
                "משוגע על תכנות",
                "מוטיבציה גבוהה",
                "משקיע לפחות 6 שעות ביום בלמידה וכתיבת קוד",
                "אוהב ללמד, לשתף ידע ולסייע בצוות",
                "חשיבה יצירתית",
                "גישת 'אני-יכול'",
                "אוהב ומחפש אתגרים"
            ],
            frontend: 'פרונטאנד',
            backend: 'בקאנד',
            database: 'דטהבייס',
            titles: {
                whoAmI:'מי אני?',
                techStack: 'הסטאק הטכנולוגי שלי:',
                myStrength: 'החוזקות שלי:'
            }
        }
    }
}