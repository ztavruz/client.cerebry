window.onload = () => {

    class MagicElement
    {
        constructor(tagName, classList = [], attributes = {}, html = "", children = []){
            this.tagName = tagName;
            this.classList = classList;
            this.attributes = attributes;
            this.html = html;
            this.children = children;
        }

    }

    const magic = new MagicElement("div", [], [], "", [
        new MagicElement("a", [], {
            href: "/test"
        }, "go"),
        new MagicElement("a", [], {
            href: "/test"
        }, "second"),
    ]);

    const link = {
        tagName: 'a',
        classList: ['class2'],
        attributes: {
            href: "/vk.com"
        },
        html: "Перейти",
        children: []
    };

    const el = {
        tagName: 'div',
        classList: ['class1', 'class2'],
        attributes: {
            id: "test"
        },
        html: "",
        children: [
            link,
            {
                tagName: 'a',
                classList: ['class2'],
                attributes: {
                    href: "youtube.com"
                },
                html: "Ютуб",
                children: []
            }
        ]
    };

    const app = document.querySelector("#app");

    app.appendChild(magicalCreateElement(magic));



}


function magicalCreateElement(obj){
    const el = document.createElement(obj.tagName);

    obj.classList.forEach(className => {
        el.classList.add(className);
    });

    for (const key in obj.attributes) {
        el.setAttribute(key, obj.attributes[key]);
    }

    el.innerHTML = obj.html;

    const childNodes = obj.children.map(child => {
        return magicalCreateElement(child);
    });


    childNodes.forEach(child => el.appendChild(child));

    return el;
}