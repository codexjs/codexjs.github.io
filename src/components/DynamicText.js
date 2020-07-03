export default {
    functional: true,
    render(createElement, {
        props
    }) {
        // console.log("exec");
        let type;
        if(props.type == "title") type ="h1"
        else if(props.type == "title2") type ="h2"
        else if(props.type == "title3") type ="h3"
        else type = "p"
        return createElement(type, props.content);
    },
    props: {
        type: {
            type: String
        },
        content: {
            type: String
        }
    }
};