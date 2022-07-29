import React from 'react'


import Text from './Text'


export default{
    title:'Text',
    component: Text
}

const Template = (args) => <Text {...args} >Text test sample</Text>;


export const TextParagraph = Template.bind({});