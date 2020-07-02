export const homeConfig = {
    componentName: "Home",
    show: "Home",
    textConfig: {
        firstMssg: "Hi,",
        mssgArray: ["I'm Daniel", "Front End Developer"]
    }
}

const projectsConfig = [
    // O(n)
    [{
            title: "Project 1",
            content: "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.",
            image: "work01-hover.jpg",
            url: "work01"
        },
        {
            title: "Project 2",
            content: "Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.",
            image: "work02-hover.jpg",
            url: "work02"
        },
        {
            title: "Project 3",
            content: "Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.",
            image: "work03-hover.jpg",
            url: "work03"
        }
    ],
    [{
            title: "Project 4",
            content: "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.",
            image: "work01-hover.jpg",
            url: "work01"
        },
        {
            title: "Project 5",
            content: "Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.",
            image: "work02-hover.jpg",
            url: "work02"
        },
        {
            title: "Project 6",
            content: "Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.",
            image: "work03-hover.jpg",
            url: "work03"
        }
    ],
    [{
            title: "Project 7",
            content: "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.",
            image: "work01-hover.jpg",
            url: "work01"
        },
        {
            title: "Project 8",
            content: "Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.",
            image: "work02-hover.jpg",
            url: "work02"
        },
        {
            title: "Project 9",
            content: "Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.",
            image: "work03-hover.jpg",
            url: "work03"
        }
    ]
];
export const worksConfig = {
    componentName: "Works",
    show: "Work",
    text: " ^^",
    projectsConfig: projectsConfig
};

export const aboutConfig = {
    componentName: "About",
    show: "About me",
    image: "profil.jpg",
    content: [{
            type: "title",
            content: "Consectetur adipiscing elit"
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices hendrerit nisl."
        },
        {
            type: "title",
            content: "Ut enim ad minim"
        },
        {
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            type: "title",
            content: "Maecenas luctus at sem quis varius"
        },
        {
            content: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis elit sagittis, at hendrerit lorem venenatis. Morbi accumsan iaculis blandit. Cras ultrices hendrerit nisl."
        }
    ]
};
export const contactConfig = {
    componentName: "Contact",
    show: "Contact"
};
export const componentsConfig = {
    componentName: "Components",
    show: "Components"
};

export const templateConfig = {
    // the first key is going to redirect to '/'
    home: homeConfig,
    works: worksConfig,
    about: aboutConfig,
    contact: contactConfig,
    components: componentsConfig
}