import React from 'react'


import Card from './Card'
import algovis from './../../assets/algovisGif.gif'

import { SiTypescript, SiReact } from "react-icons/si";
import { FaGithub } from 'react-icons/fa';

export default{
    title:'Card ',
    component: Card
}


const Template = (args) => <Card {...args} />;

export const DesktopCard = Template.bind({});
DesktopCard.args = {
    heading:'Heading',
    subHeading:'SubHeading',
    text:[
        'Tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget.', 
        'Gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris'
    ],
    img:algovis,
    tech:[[<SiReact/>, 'Сhip1'], [ <SiTypescript/>, 'Сhip2'], 'Сhip3'],
    links:[ {link:'https://github.com', label:[<FaGithub/>, 'Github']},{link:'https://google.com', label:[ 'Website.com']} ]
}