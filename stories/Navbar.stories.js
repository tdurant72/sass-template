import '../css/style.min.css';

export default {
    title: 'HTML/Navbar',
    argTypes: {
        linkClass: { control: 'text' },
        backgroundClass: { control: 'text' },
        onClick: { action: 'onClick' },
    },
};

const Template = ({ headerFont, linkClass, backgroundClass, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `<nav class="navbar ${backgroundClass}">
                <h3 class="logo w-100 px-1 ${headerFont}">Website</h3>
                <ul>
                    <li>
                        <a href="#" class="${linkClass}">Home</a>
                    </li>
                    <li>
                        <a href="#" class="${linkClass}">About</a>
                    </li>
                    <li>
                        <a href="#" class="${linkClass}">Services</a>
                    </li>
                </ul>
            </nav>`;
    //   return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
    headerFont: 'text-light',
    linkClass: 'link-secondary',
    backgroundClass: 'background-primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
    headerFont: 'text-light',
    linkClass: 'link-primary',
    backgroundClass: 'background-secondary',
};





