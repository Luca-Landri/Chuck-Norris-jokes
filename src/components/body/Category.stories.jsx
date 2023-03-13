import React from 'react';


import Category from './Category';   

export default {
   title: 'Category',
   component: Category,
};

const Template = (args) => <Category {...args} />;
 export const Primary = Template.bind({});
 Primary.args = {
    text: 'Select a category',
 };
