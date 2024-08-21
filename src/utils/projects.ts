import { ProjectModel } from '../models/ProjectModel'
import {techTools}  from './techTools'


export const projects:ProjectModel[] = [

    {
        name: "Juniors Please",
        description: "Revolutionizing junior developer recruitment tool with GitHub insights and powerful scoring. Over 300 registered users.",
        he_desc: "כלי גיוס מודרני למפתחים ג'וניורים עם תובנות גיטהאב וניקוד איכות. מעל 300 משתמשים רשומים.",
        tools: [
            techTools.js,
            techTools.ts,
            techTools.angular,
            techTools.rest_api,
            techTools.bootstrap,
            techTools.sass,
            techTools.html,
            techTools.css
        ],
        image: "juniors-please.png",
        site_url: "https://juniorsplease.com/"
    },
    {
        name: "Run My Docker",
        description: "Deploy up to 5 apps on our servers, for free!, with access to the live app, logs and easy management on our site.",
        he_desc: "הרץ עד 5 אפליקציות בשרתים שלנו, בחינם!, עם גישה לאפליקציה החיה, יומנים וניהול קל באתר שלנו.",
        tools: [
            techTools.js,
            techTools.ts,
            techTools.angular,
            techTools.rest_api,
            techTools.bootstrap,
            techTools.sass,
            techTools.html,
            techTools.css
        ],
        image: "run-my-docker.png",
        site_url: "https://runmydocker.com/"
    },
    {
        name: "CALI-APP",
        description: "A full body training app for the 4 muscle groups, combined with circuit training and calisthenics.",
        he_desc: "אפליקציית אימון גוף מלא ל-4 קבוצות השרירים, בשילוב אימונים מעגליים וקליסטניקס.",
        image: "cali-app.png",
        git_url: "https://github.com/Amicht/cali-app",
        site_url: "https://cali-app-seven.vercel.app/",
        tools: [
            techTools.js,
            techTools.ts,
            techTools.react,
            techTools.next,
            techTools.bootstrap,
            techTools.sass,
            techTools.html,
            techTools.css
        ]
    },
    {
        name: "Netflicht",
        description: "End to end Netfix-clone app",
        he_desc: "אפליקציית חיקוי לנטפליקס מקצה לקצה",
        image: "netflicht.png",
        git_url: "https://github.com/Amicht/Netflicht",
        tools: [
            techTools.js,
            techTools.node,
            techTools.express,
            techTools.rest_api,
            techTools.mongodb,
            techTools.react,
            techTools.bootstrap,
            techTools.html,
            techTools.css,
        ]
    },
    {
        name: "Coffee Connoisseur",
        description: "Discover coffee shops nearby your location and vote your favourite ones.",
        he_desc: "גלה בתי קפה בקרבת מקום שלך והצביע על אלה המועדפים עליך.",
        image: "Coffee-Connoisseur.png",
        git_url: "https://github.com/Amicht/discover-coffee-stores",
        site_url: "https://discover-coffee-stores-amicht.vercel.app/",
        tools: [
            techTools.ts,
            techTools.next,
            techTools.react,
            techTools.js,
            techTools.rest_api,
            techTools.node,
            techTools.html,
            techTools.css,
        ]
    },
    {
        name: "Almost Cheap",
        description: "End to end e-com supermarket web app",
        he_desc: "אפליקציית אינטרנט של סופרמרקט אלקטרוני מקצה לקצה",
        image: "almost-cheap.png",
        git_url: "https://github.com/Amicht/e-store",
        tools: [
            techTools.js,
            techTools.ts,
            techTools.node,
            techTools.express,
            techTools.rest_api,
            techTools.mysql,
            techTools.angular,
            techTools.bootstrap,
            techTools.html,
            techTools.css,
        ]
    },
    {
        name: "Snake",
        description: "The classic Snake game",
        he_desc: "משחק הסנייק הקלאסי",
        image: "snake.png",
        git_url: "https://github.com/Amicht/snake-game",
        site_url: "https://amicht.github.io/snake-game/main.html",
        tools: [
            techTools.js,
            techTools.vanila_js,
            techTools.html,
            techTools.css,
        ]
    },
    {
        name: "Black-Jack",
        description: "The classic Black-Jack (21) game",
        he_desc: "המשחק הקלאסי בלק-ג'ק (21).",
        image: "black-jack.png",
        git_url: "https://github.com/Amicht/Black-Jack-21",
        site_url: "https://amicht.github.io/Black-Jack-21/main.html",
        tools: [
            techTools.js,
            techTools.vanila_js,
            techTools.html,
            techTools.css,
        ]
    },
    {
        name: "Chord Learning App",
        description: "Learn how to play guitar chords, for beginners and advanced",
        he_desc: "למד כיצד לנגן אקורדים בגיטרה, למתחילים ולמתקדמים",
        image: "chord-app.png",
        git_url: "https://github.com/Amicht/chord-app",
        site_url: "https://amicht.github.io/chord-app/main.html",
        tools: [
            techTools.js,
            techTools.vanila_js,
            techTools.html,
            techTools.css,
        ]
    },
]