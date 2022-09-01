import React from 'react'
import algovis from '@assets/algovisGif.gif';
import travelcomp from '@assets/travelcompgif3.gif'
import webgif from '@assets/webgif.gif'
import { SiTypescript, SiReact, SiStorybook, SiGatsby, SiGreensock, SiMongodb, SiGooglecloud, SiJest, SiMaterialui, SiSass, SiFirebase } from "react-icons/si";
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        id:1,
        heading:'Algortihm visualizer',
        subHeading:'Description',
        text:[
            'Visualization of popular Sorting and Searching algorithms.',
            'The project built in Typescript using React, D3.JS data visualization library and CSS. Functional testing done with Jest.', 
            'User can run algoritms in Compare Mode or Single Mode'
        ],
        img:algovis,
        tech:[
            [<SiReact/>, 'React'], 
            [ <SiTypescript/>, 'Typescript'], 
            'D3.JS', 
            [<SiJest/>,'Jest'] 
        ],
        links:[ 
            {link:'https://github.com/ruslaaaan/algo_visualization', label:[<FaGithub/>, 'GitHub']},
            {link:'https://rookie-visualizer.netlify.app/', label:'Live version'},
        ]
    } ,
    {
        id:2,
        heading:'Travel Companion',
        subHeading:'Description',
        text:[
            'App shows restaurants, hotels and local sights for a current or given location. Browse thru and filter locations by type of and rating.', 
            'User can log in with GoogleSignIn and save place to Favorites.', 
        ],
        img:travelcomp,
        tech:[
            [<SiReact/>, 'React'], 
            [ <SiTypescript/>, 'Typescript'], 
            [<SiMongodb/>, 'MongoDB'], 
            'RapidAPI', 
            [<SiGooglecloud/>,'GoogleCloud'], 
            [<SiMaterialui/>, 'MaterialUI']],
        links:[ 
            {link:'https://github.com/ruslaaaan/travel_companion', label:[<FaGithub/>, 'GitHub']},
            {link:'https://desolate-shelf-15182.herokuapp.com/', label:'Live version'},
        ]
    } ,    
    {
        id:3,
        heading:'Personal Website',
        subHeading:'Description',
        text:[
            "This website itself in portfolio project's too!", 
            'Drawn in Figma, patiently created with React components in Storybook, peppered with GSAP animations, and came to life with Gatsby!'
        ],
        img:webgif,
        tech:[
            [<SiGatsby/>, 'Gatsby'], 
            [ <SiStorybook/>, 'Storybook'], 
            [<SiGreensock/>, 'GSAP'], 
            [<SiSass/>, 'SASS'], 
            [<SiFirebase/>, 'Firebase']
        ],
        links:[ 
            {link:'https://github.com/ruslaaaan/algo_visualization', label:[<FaGithub/>, 'GitHub']} 
        ]
    } 
]

export default projects;