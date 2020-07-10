export const homeConfig = {
    name: "Home",
    show: "Home",
    textConfig: {
        firstMssg: "Hi,",
        mssgArray: ["Welcome", "to my portfolio"]
    }
}

const contentExample = [{
        type: "title3",
        content: "Consectetur adipiscing elit"
    },
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices hendrerit nisl.",
    {
        type: "title3",
        content: "Ut enim ad minim"
    },
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    {
        type: "title3",
        content: "Maecenas luctus at sem quis varius"
    },
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis elit sagittis, at hendrerit lorem venenatis. Morbi accumsan iaculis blandit. Cras ultrices hendrerit nisl."
];
export const projectsConfig = {
    work1: {
        title: "Project 1",
        description: "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.",
        image: "work01-hover.jpg",
        content: contentExample
    },
    work2: {
        title: "Project 2",
        description: "Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.",
        image: "work02-hover.jpg",

    },
    work3: {
        title: "Project 3",
        description: "Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.",
        image: "work03-hover.jpg",
    },
    work4: {
        title: "Project 4",
        description: "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.",
        image: "work01-hover.jpg",
    },
    work5: {
        title: "Project 5",
        description: "Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.",
        image: "work02-hover.jpg",
    },
    work6: {
        title: "Project 6",
        description: "Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.",
        image: "work03-hover.jpg",
    },
    work7: {
        title: "Project 7",
        description: "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.",
        image: "work01-hover.jpg",
    },
    work8: {
        title: "Project 8",
        description: "Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.",
        image: "work02-hover.jpg",
    },
    work9: {
        title: "Project 9",
        description: "Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.",
        image: "work03-hover.jpg",
    }
}

export const worksConfig = {
    name: "Works",
    show: "Work",
    text: " This are some of the projects that I've been working on.",
    projectsConfig,
    children: [{
        path: ":id",
        name: "Work",
    }]
};

export const aboutConfig = {
    name: "About",
    show: "About me",
    image: "profil.jpg",
    content: {
        title1: {
            type: "title3",
            content: "Consectetur adipiscing elit"
        },
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices hendrerit nisl.",
        title2: {
            type: "title3",
            content: "Ut enim ad minim"
        },
        text2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        title3: {
            type: "title3",
            content: "Maecenas luctus at sem quis varius"
        },
        text3: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis elit sagittis, at hendrerit lorem venenatis. Morbi accumsan iaculis blandit. Cras ultrices hendrerit nisl."

    }
};
export const contactConfig = {
    name: "Contact",
    show: "Contact",
    config: {
        phone: "+34 000 00 00 00",
        email: "example@portfolio.com",
        location: "Spain",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#"
        }
    }

};
// export const componentsConfig = {
//     name: "Components",
//     show: "Components"
// };

export const componentsGame = {
    name: "Game",
    // show: "Game"
};


export const templateConfig = {
    // the first key is going to redirect to '/'
    home: homeConfig,
    works: worksConfig,
    about: aboutConfig,
    contact: contactConfig,
    game: componentsGame
    // components: componentsConfig
}