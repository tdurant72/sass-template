import '../css/style.min.css';

export default {
    title: 'HTML/Button',
    argTypes: {
        label: { control: 'text' },
        primary: { control: 'boolean' },
        btnClass: { control: 'text' },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
        onClick: { action: 'onClick' },
    },
};

const Template = ({ label, btnClass, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `<a href="#" class="${btnClass}">${label}</a>`;
    //   return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    btnClass: 'btn-primary'
};
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
    label: 'Button',
    btnClass: 'btn-primary-outline'
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
    btnClass: 'btn-secondary'
};
export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
    label: 'Button',
    btnClass: 'btn-secondary-outline'
};
export const Fail = Template.bind({});
Fail.args = {
    label: 'Button',
    btnClass: 'btn-fail'
};

export const Success = Template.bind({});
Success.args = {
    label: 'Button',
    btnClass: 'btn-success'
};


