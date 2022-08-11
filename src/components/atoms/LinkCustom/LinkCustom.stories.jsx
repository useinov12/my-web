import React from 'react'


import LinkCustom from './LinkCustom'



export default{
    title:'LinkCustom',
    component: LinkCustom
}


const Template = (args) => <LinkCustom {...args} />;

export const LinkRegular = Template.bind({});

LinkRegular.args = {
    link:'https://www.google.com',
    children:<h1>Link to Google</h1>,
    large:true,
    medium:false,
    small:false
};