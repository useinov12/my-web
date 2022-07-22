import React from 'react'


import Layout from './Layout'

import styles from './../../styles/index.scss'


export default{
    title:'Layout',
    component: Layout
}


const Template = (args) => <Layout {...args} />;

export const FullScreenLayout = Template.bind({});

// FullScreen.args = {
//     // primary: true,
//     // label: 'Button',
// };