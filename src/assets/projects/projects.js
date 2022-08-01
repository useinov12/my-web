import React from 'react'
import algovis from '@assets/algovisGif.gif';
import travelcomp from '@assets/travelcompgif3.gif'
import webgif from '@assets/webgif.gif'
import { SiTypescript, SiReact, SiStorybook, SiGatsby, SiGreensock, SiMongodb, SiGooglecloud, SiJest, SiMaterialui, SiSass, SiFirebase } from "react-icons/si";
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        heading:'Algortihm visualizer',
        subHeading:'Description',
        text:[
            'The project built in Typescript using React, D3.JS data visualization library and CSS. Functional testing done with Jest.', 
            'By turning on Compare Mode user can choose a few algorithms to run at the same time.'
        ],
        img:algovis,
        tech:[
            [<SiReact/>, 'React'], 
            [ <SiTypescript/>, 'Typescript'], 
            'D3.JS', 
            [<SiJest/>,'Jest'] 
        ],
        links:[ 
            {link:'https://github.com/ruslaaaan/algo_visualization', label:[<FaGithub/>, 'GitHub']} 
        ]
    } ,
    {
        heading:'Travel Companion',
        subHeading:'Description',
        text:[
            'App showes restaraunts, hotels and local sights for a current or given location. Browse thru and filter locations by type of and rating.', 
            'User can log in with GoogleSignIn and save place to Favorites', 
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
            {link:'https://github.com/ruslaaaan/travel_companion', label:[<FaGithub/>, 'GitHub']} 
        ]
    } ,    
    {
        heading:'Personal Website',
        subHeading:'Description',
        text:[
            'Tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque', 
            'Elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris'
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