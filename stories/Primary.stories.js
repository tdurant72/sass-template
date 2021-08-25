import '../css/style.min.css';

export default {
    title: 'HTML/Button',
    argTypes: {
        label: { control: 'text' },
        backgroundColorClass: {
            control: 'text',
            name: 'Background Color Class',
            description: 'color based on theme colors',
        },
        textColorClass: {
            control: 'text',
            name: 'Text Color Class',
            description: 'color based on theme colors',
        },
        borderColorClass: {
            control: 'text',
            name: 'Border Color Class',
            description: 'color based on theme colors',
        },
        weight: {
            control: 'text',
            name: 'Font weight',
            description: 'weights 100 - 900',
        },
        onClick: { action: 'onClick' },
    },
    parameters: {
        docs: {
            code:
                `<a href="#" class="btn background-primary text-light bd-primary w-500">Button</a>
            `
        }
    }
};

const Template = ({ label, backgroundColorClass, borderColorClass, textColorClass, weight, ...args }) => {
    // button classes found in _buttons.scss colors in _config.scss
    //real example <a href="#" class="btn-primary-outline">Submit</a>
    return `<a href="#" class="btn ${backgroundColorClass} ${textColorClass} ${borderColorClass} ${weight}">${label}</a>`;
    //   return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    backgroundColorClass: 'background-primary',
    textColorClass: 'text-light',
    borderColorClass: 'bd-primary',
    weight: 'w-500',
};
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
    label: 'Button',
    backgroundColorClass: 'background-light',
    textColorClass: 'text-primary',
    borderColorClass: 'bd-primary',
    weight: 'w-500',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
    backgroundColorClass: 'background-secondary',
    textColorClass: 'text-light',
    borderColorClass: 'bd-secondary',
    weight: 'w-700',
};
export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
    label: 'Button',
    backgroundColorClass: 'background-light',
    textColorClass: 'text-secondary',
    borderColorClass: 'bd-secondary',
    weight: 'w-700',
};
export const Fail = Template.bind({});
Fail.args = {
    label: 'Button',
    backgroundColorClass: 'background-red',
    textColorClass: 'text-light',
    borderColorClass: 'bd-red',
    weight: 'w-700',
};

export const Success = Template.bind({});
Success.args = {
    label: 'Button',
    backgroundColorClass: 'background-green',
    textColorClass: 'text-light',
    borderColorClass: 'bd-green',
    weight: 'w-700',
};


