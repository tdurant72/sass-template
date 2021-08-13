import '../css/style.min.css';

export default {
    title: 'HTML/Type',
    argTypes: {
        children: { control: 'text' },
        variant: { control: 'text' },
        color: { control: 'text' },
        onClick: { action: 'onClick' },
    },
};

const Template = ({ variant, label, color, weight, children, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `<${variant} class="${color} ${weight}">${children}</${variant}>`;
    //   return createButton({ label, ...args });
};

export const H1 = Template.bind({});
H1.args = {
    variant: 'h1',
    children: 'H1 header',
    color: 'text-primary',
    weight: 'w-700'
};
export const H2 = Template.bind({});
H2.args = {
    variant: 'h2',
    children: 'H2 header',
    color: 'text-secondary',
    weight: 'w-500'
};
export const H3 = Template.bind({});
H3.args = {
    variant: 'h3',
    children: 'H3 header',
    color: 'text-pink',
    weight: 'w-300'
};
export const H4 = Template.bind({});
H4.args = {
    variant: 'h4',
    children: 'H4 header',
    color: 'text-teal',
    weight: 'w-100'
};
export const P = Template.bind({});
P.args = {
    variant: 'p',
    children: 'paragraph',
    color: 'text-dark-grey',
    weight: 'w-500'
};




