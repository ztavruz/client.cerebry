window.onload = () => {

    window.onload = () => {

        class createElement
        {
            
            constructor(tagName, classList = [], attributes = {}, html = "", children = []){
                this.tagName = tagName;
                this.classList = classList;
                this.attributes = attributes;
                this.html = html;
                this.children = children;
            }
            
    
        }

        const magic = new createElement("div", [], {}, "", 
        [
            new createElement("a", [], {
                href: "/test"
            }, "go"),
            new createElement("a", [], {
                href: "/test"
            }, "second"),
        ]);

        const element = {
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
    
    
        const link = {
            tagName: 'a',
            classList: ['class2'],
            attributes: {
                href: "/vk.com"
            },
            html: "Перейти",
            children: []
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



    // -------------------------------------------------------------------------------

    let item__list_menu = document.querySelectorAll('.item__list_menu');

    item__list_menu.forEach(function (element) {
        element.onclick = function () {
            if (element.children[1].classList.contains('menu__block_hide')) {
                element.children[1].classList.remove('menu__block_hide');
                element.children[1].classList.add('menu__block_show');
            } else {
                element.children[1].classList.remove('menu__block_show');
                element.children[1].classList.add('menu__block_hide');
            }
        }

        console.log(element.children);
    });


   

}