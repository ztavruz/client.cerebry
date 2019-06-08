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

    class InputFile extends MagicElement
    {

        constructor(name){
            super("input", 
            ['class1'],
            {
                type: "file",
                name: name
            },
            []);
        }
    }


    const magic = new MagicElement("form", [], {id: "send_form"}, "", [
        new InputFile('image'),
        new MagicElement("input", [], {
            type: "text",
            name: "name"
        }),
        new MagicElement("button", [], {
            type: "submit"
        }, "Отправить"),
    ]);




    const app = document.querySelector("#app");

    app.appendChild(magicalCreateElement(magic));


    const form = document.querySelector("#send_form");

    form.onsubmit = (e) => {
        e.preventDefault();

        const fd = new FormData(e.target);

        if(fd.get('image').type !== 'image/png'){
            console.log('неверный формат файла');
        }

        fd.forEach(item => {
            console.log(item);
        });

        /**
         * $dt = new DateTime()->getTimestamp();
         * serialize($dt);
         * 
         * $_FILES['image']
         * 
         * $_POST['name']
         */
        // axios.post("/link", fd).then(res => {
        //     console.log(res);
        // });
    }


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