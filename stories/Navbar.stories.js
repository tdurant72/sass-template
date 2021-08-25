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
    //<a href="#" class="${linkClass}">Home</a>
    return `<header >
                
                <div class="menu-btn">
                    <span class="menu-btn__burger"></span>
                </div>
                
                <nav class="nav ${backgroundClass}">
                    <ul class="menu-nav">
                        <li class="menu-nav__item">
                            <a href="index.html" class="menu-nav__link ${linkClass}">
                                Home
                            </a>
                        </li>
                        <li class="menu-nav__item active">
                            <a href="services.html" class="menu-nav__link ${linkClass}">
                                Services
                            </a>
                        </li>
                        <li class="menu-nav__item">
                            <a href="projects.html" class="menu-nav__link ${linkClass}">
                                Projects
                            </a>
                        </li>
                        <li class="menu-nav__item">
                            <a href="contact.html" class="menu-nav__link ${linkClass}">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <script>
            const menuBtn = document.querySelector('.menu-btn');
            const hamburger = document.querySelector('.menu-btn__burger');
            const nav = document.querySelector('.nav');
            const menuNav = document.querySelector('.menu-nav');
            const navItems = document.querySelectorAll('.menu-nav__item');
            let showMenu = false;
            menuBtn.addEventListener('click', toggleMenu);
            console.log("menuBtn",menuBtn);
            function toggleMenu(){
                console.log("toggleMenu clicked");
                if (!showMenu) {
                    hamburger.classList.add('open');
                    nav.classList.add('open');
                    menuNav.classList.add('open');
                    navItems.forEach(item => item.classList.add('open'));
            
                    showMenu = true;
                } else {
                    hamburger.classList.remove('open');
                    nav.classList.remove('open');
                    menuNav.classList.remove('open');
                    navItems.forEach(item => item.classList.remove('open'));
            
                    showMenu = false;
                }
            }
            </script>
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




