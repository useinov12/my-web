import React from 'react'


import Button from './Button'


export default{
    title:'Button ',
    component: Button
}


const Template = (args) => <Button {...args} />;

export const ButtonNav = Template.bind({});

ButtonNav.args = {
    // primary: true,
    label: 'About',
    className:'button--nav',
    active:true,
    // onClick:onClick
};


export const ButtonContacts = Template.bind({});


ButtonContacts.args = {
    // primary: true,
    label: 'contacts',
    className:'button--contacts',
    // active:true,
    // onClick:onClick
};
