window.onload = () => {

    const items = [
        {
            id: 1,
            name: "test"
        },
        {
            id: 3,
            name: "test"
        },
        {
            id: 12,
            name: "test"
        },
        {
            id: 122,
            name: "test"
        },
        {
            id: 314,
            name: "test"
        }
    ];


    const arr = document.querySelector("#arr");

    items.forEach((item) => {

        const root = document.createElement('div');
        const button = document.createElement('button');
        const p = document.createElement('p');
        const popup = document.createElement('div');
        const remove = document.createElement('button');

        p.innerHTML = item.name;

        root.appendChild(p);

        root.appendChild(button);
        popup.classList.add('popup');

        remove.innerHTML = "Удалить";
        
        popup.appendChild(remove);

        root.appendChild(popup);

        button.innerHTML = "Показать";

        button.onclick = function(){

            if(popup.style.display == 'none'){
                popup.style.display = 'block';
            }else{
                popup.style.display = 'none'
            }

            
        }

        arr.appendChild(root);

    });



}