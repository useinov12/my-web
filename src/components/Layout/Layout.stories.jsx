import React from 'react'


import Layout from './Layout'

export default{
    title:'Layout',
    component: Layout
}


const Template = (args) => <Layout {...args} />;

export const FullScreenLayout = Template.bind({});
FullScreenLayout.args ={
    children:<h1>Hello world</h1>
}