export function createCustomElement(element, props) {
    if (typeof (element) === "string") {
        element = document.createElement(element);
    }
    for (const [key, value] of Object.entries(props)) {
        if (value instanceof Array) {
            if (key == "children") {
                value.forEach((prop) => {
                    element.append(prop);
                });
            }
            return element;
        }
        element[key] = value;
    }
    return element;
}
