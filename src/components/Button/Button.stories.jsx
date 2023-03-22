import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    text: 'Click to joke',
    type: 'primary'
};


export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Copy to clipboard 📋',
    type: 'copy'
};

