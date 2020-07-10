import CarouselElement from "./CarouselElement";

export default {
    name: "CarouselList",
    functional: true,
    render(createElement, {
        props
    }) {
        const config = props.config;
        const keys = Object.keys(config);
        const length = keys.length;
        const projectsIds = [];
        let target = [];
        let counter = 0;
        keys.forEach((key, i) => {
            const element = config[key];
            element["key"] = key;
            element["index"] = i;
            element["length"] = length;
            if (counter % 3 == 0) {
                target = createElement("div", {
                    class: {
                        row: true
                    }
                });
                projectsIds.push(createElement('div', {
                    class: {
                        item: true, active: (i == 0)
                    }
                }, [target]));
            }
            if (!target.children) target.children = []
            target.children.push(createElement(CarouselElement, {
                props: {
                    config: config[key]
                }
            }));
            counter++;
        });
        return createElement('div', {
            class: {
                "carousel-inner": true
            }
        }, projectsIds);
    },
    props: {
        config: Object
    }
};