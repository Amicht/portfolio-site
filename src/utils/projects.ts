import { ProjectModel } from '../models/ProjectModel'
import {techTools}  from './techTools'


export const projects:ProjectModel[] = [

    {
        name: "CALI-APP",
        description: "A full body training app for the 4 muscle groups, combined with circuit training and calisthenics.",
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
        image: "netflicht.png",
        git_url: "https://github.com/Amicht/Netflicht",
        site_url: "https://netflicht.herokuapp.com/",
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
        image: "almost-cheap.png",
        git_url: "https://github.com/Amicht/e-store",
        site_url: "https://almost-cheap.herokuapp.com",
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