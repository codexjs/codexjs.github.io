// DeeperJs
export function deepGet(target, childs) {
    for (let i = 0; i < childs.length; i++) {
        let child = childs[i];
        target = target[child];
    }
    return target;
}

export function deepSet(target, childs, value) {
    for (let i = 0; i < childs.length; i++) {
        let child = childs[i];
        if (i == childs.length - 1) {
            target[child] = value;
            return target[child];
        };
        target = target[child];
    }

}

export function deepDelete(target, childs) {
    for (let i = 0; i < childs.length; i++) {
        let child = childs[i];
        if (i == childs.length - 1) {
            target[child] = null;
            delete target[child];
            return target;
        }
        target = target[child];
    }
}

export function deepFor(target, childs, fnct) {
    for (let i = 0; i <= childs.length; i++) {
        let child = childs[i];
        fnct(target, child);
        target = target[child];
    }
}