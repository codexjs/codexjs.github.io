export default {
    functional: true,
    render(createElement, {
        props
    }) {
        console.log("exec");
        return createElement(props.type == "title" ? "h3" : "p", props.content);
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