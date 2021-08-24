import '../css/style.min.css';
// import { toggleMenu } from '../js/app.js';
import { toggleMenu } from '../stories/app.js'
// import navbar from '../components/navbar/navbar.html';
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
    //<a href="#" class="${linkClass}">Home</a>
    return `<header>
                <div class="menu-btn">
                    <span class="menu-btn__burger"></span>
                </div>
                    <nav class="nav ${backgroundClass}">
                    <h3 class="logo w-100 px-1">Website</h3>
                    <ul class="menu-nav">
                        <li class="menu-nav__item">
                            <a href="#" class="menu-nav__link">Home</a>
                        </li>
                        <li class="menu-nav__item">
                            <a href="#" class="menu-nav__link">About</a>
                        </li>
                        <li class="menu-nav__item">
                            <a href="#" class="menu-nav__link">Services</a>
                        </li>
                        <li class="menu-nav__item">
                            <a href="#" class="menu-nav__link">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </header>
            `;
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




