window.onload = async function () {

    0
    const content__center_item = document.querySelector(".content__center_item");

    // 1
    const addingAudio = document.createElement('form');
    addingAudio.classList.add("addingAudio");
    addingAudio.setAttribute('name', 'addingAudio');
    addingAudio.setAttribute('id', 'addingAudio');

    // 1-1
    const addAudio__label = document.createElement('label');
    addAudio__label.classList.add("addAudio__label");
    addAudio__label.setAttribute('for', 'addingAudio');

    // 1.1-1
    const audio = document.createElement('input');
    audio.classList.add("audio");
    audio.setAttribute('id', 'audio');
    audio.setAttribute('type', 'file');
    audio.setAttribute('name', 'audio');

    // 1-2
    const addAudio__savebutton = document.createElement('input');
    addAudio__savebutton.classList.add("addAudio__savebutton");
    addAudio__savebutton.setAttribute('type', 'submit');
    addAudio__savebutton.setAttribute('value', 'Отправить');

    content__center_item.appendChild(addingAudio);
    addingAudio.appendChild(addAudio__label);
    addAudio__label.appendChild(audio);
    addingAudio.appendChild(addAudio__savebutton);

    const form = document.querySelector(".addingAudio");
    
    form.onsubmit = (e) => {
        e.preventDefault();

        const fd = new FormData(e.target);
        console.log(fd);

        // if (fd.get('image').type !== 'image/png') {
        //     console.log('неверный формат файла');
        // }

        fd.forEach(item => {
            console.log(item);
        });
        // fd.push(checked);

        axios.post("http://ServerCerebry/audio/create", fd).then(res => {
            console.log(res);
            // alert('Добавил' + res.data.name);
        });
    }
}
