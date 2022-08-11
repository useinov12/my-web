import React from 'react'

import { BiChip } from "react-icons/bs";

import Chip from './Chip'

export default {
    title:'Chip',
    component:Chip
}

const Template = (args) => <Chip {...args} />;

export const RegularChip = Template.bind({});

RegularChip.args = {
    children:[<BiChip/>, 'Chip'],
    large:true,
    medium:false,
    small:false,
};