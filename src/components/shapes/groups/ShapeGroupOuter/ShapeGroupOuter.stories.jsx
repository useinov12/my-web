import React from 'react'


import ShapeGroupOuter from './ShapeGroupOuter'


export default{
    title:'ShapeGroupOuter ',
    component: ShapeGroupOuter
}


const Template = (args) => <ShapeGroupOuter {...args} />;

export const DesktopGroupLeft = Template.bind({});
DesktopGroupLeft.args = {
    orient:'left',
}
export const DesktopGroupRight = Template.bind({});
DesktopGroupRight.args = {
    orient:'right',
}