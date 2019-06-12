window.onload = async function () {

    const audios = await axios.get("http://ServerCerebry/audio/getAll").then(res => res.data);
    // console.log(audios);

    // 0
    const content__center = document.querySelector(".content__center");
    // 1
    const addingAudiosession = document.createElement('form');
    addingAudiosession.classList.add("addingAudiosession");
    addingAudiosession.name = 'addingAudiosession';
    addingAudiosession.id = 'addingAudiosession';
    content__center.appendChild(addingAudiosession);
    // 1-1
    const content__center_header = document.createElement('div');
    content__center_header.classList.add("content__center_header");
    addingAudiosession.appendChild(content__center_header);

    // 1.1-1
    const center__header_add = document.createElement('div');
    center__header_add.classList.add("center__header_add");
    content__center_header.appendChild(center__header_add);

    // 1.1.1-1
    const fa_plus_circle = document.createElement('i');
    fa_plus_circle.classList.add("fas");
    fa_plus_circle.classList.add("fa-plus-circle");
    center__header_add.appendChild(fa_plus_circle);

    const add__item = document.createElement('span');
    add__item.classList.add('add__item');
    add__item.innerHTML = "Добавить аудиосеанс";
    center__header_add.appendChild(add__item);

    // 1.1-2
    const center__header_exit = document.createElement('div');
    center__header_exit.classList.add("center__header_exit");
    content__center_header.appendChild(center__header_exit);

    // 1.1.2-1
    const a = document.createElement('a');
    a.href = "/pages/adminInterface/audiosessions/allAudiosessions/index.html";
    center__header_exit.appendChild(a);

    // 1.1.2.1-2
    const fa_times = document.createElement('i');
    fa_times.classList.add("fas");
    fa_times.classList.add("fa-times");
    a.appendChild(fa_times);

    // 1-2
    const content__center_dataAudiosession1 = document.createElement('div');
    content__center_dataAudiosession1.classList.add("content__center_dataAudiosession1");
    addingAudiosession.appendChild(content__center_dataAudiosession1);

    // 1.2-1
    const dataAudiosession1__col1 = document.createElement('div');
    dataAudiosession1__col1.classList.add("dataAudiosession1__col1");
    content__center_dataAudiosession1.appendChild(dataAudiosession1__col1);

    // 1.2.1-1
    const dataAudiosession1__col1_image = document.createElement('div');
    dataAudiosession1__col1_image.classList.add("dataAudiosession1__col1_image");
    dataAudiosession1__col1.appendChild(dataAudiosession1__col1_image);

    // 1.2.1.1-1
    const col1_image = document.createElement('label');
    col1_image.classList.add("col1_image");
    col1_image.setAttribute('for', 'col1_image');
    dataAudiosession1__col1_image.appendChild(col1_image);

    // 1.2.1.1.1-1
    const label__plus = document.createElement('div');
    label__plus.classList.add("label__plus");
    label__plus.innerHTML = "+";
    col1_image.appendChild(label__plus);

    // 1.2.1.1.1-2
    const label__obloshka = document.createElement('div');
    label__obloshka.classList.add("label__obloshka");
    label__obloshka.innerHTML = "Обложка";
    col1_image.appendChild(label__obloshka);

    // 1.2.1.1-2
    const col1__image_input = document.createElement('input');
    col1__image_input.classList.add("col1__image_input");
    col1__image_input.id = "col1_image";
    col1__image_input.type = "file";
    col1__image_input.name = "image";
    col1__image_input.placeholder = "+ Обложка";
    dataAudiosession1__col1_image.appendChild(col1__image_input);

    // 1.2-2
    const dataAudiosession1__col2 = document.createElement('div');
    dataAudiosession1__col2.classList.add("dataAudiosession1__col2");
    content__center_dataAudiosession1.appendChild(dataAudiosession1__col2);

    // 1.2.2-1
    const dataAudiosession1__col2_name = document.createElement('input');
    dataAudiosession1__col2_name.classList.add("dataAudiosession1__col2_name");
    dataAudiosession1__col2_name.setAttribute("id", "nameAudiosession");
    dataAudiosession1__col2_name.type = "text";
    dataAudiosession1__col2_name.name = "nameAudiosession";
    dataAudiosession1__col2_name.placeholder = "Название сеанса";
    dataAudiosession1__col2.appendChild(dataAudiosession1__col2_name);

    // 1.2.2-2
    const dataAudiosession1__col2_smalldescription = document.createElement('textarea');
    dataAudiosession1__col2_smalldescription.classList.add("dataAudiosession1__col2_smalldescription");
    dataAudiosession1__col2_smalldescription.name = "smalldescription";
    dataAudiosession1__col2_smalldescription.setAttribute('id', 'smalldescription');
    dataAudiosession1__col2_smalldescription.cols = "30";
    dataAudiosession1__col2_smalldescription.rows = "5";
    dataAudiosession1__col2_smalldescription.placeholder = "Краткое описание";
    dataAudiosession1__col2.appendChild(dataAudiosession1__col2_smalldescription);

    // 1-3
    const content__center_dataAudiosession2 = document.createElement('div');
    content__center_dataAudiosession2.classList.add("content__center_dataAudiosession2");
    addingAudiosession.appendChild(content__center_dataAudiosession2);

    // 1.3-1
    const dataAudiosession2__addaudio = document.createElement('div');
    dataAudiosession2__addaudio.classList.add("dataAudiosession2__addaudio");
    dataAudiosession2__addaudio.name = "addAudio";
    dataAudiosession2__addaudio.type = "text";
    // dataAudiosession2__addaudio.placeholder = "+ Добавить аудиофайл";
    content__center_dataAudiosession2.appendChild(dataAudiosession2__addaudio);

    // 1.3.1-1
    const addaudio__span = document.createElement('span');
    addaudio__span.classList.add('addaudio__span');
    addaudio__span.innerHTML = "+ Добавить аудиофайл";
    dataAudiosession2__addaudio.appendChild(addaudio__span);

    // 1.3-2
    // -------------------------audio-list------------------------------------
    // const dataAudiosession2__audiolist = document.querySelector('.dataAudiosession2__audiolist');
    const dataAudiosession2__audiolist = document.createElement('div');
    dataAudiosession2__audiolist.classList.add('dataAudiosession2__audiolist');

    audios.map(audio => {
        // 1.3.2-1
        const audiolist__item = document.createElement('div');
        audiolist__item.classList.add("audiolist__item");

        // 1.3.2.1-1
        const audiolist__item_label = document.createElement('label');
        audiolist__item_label.classList.add("audiolist__item_label");
        audiolist__item.setAttribute('for', 'audios');

        // 1.3.2.1.1-1
        const item__label_input = document.createElement('input');
        item__label_input.classList.add("item__label_input");
        item__label_input.setAttribute('type', 'checkbox');
        item__label_input.setAttribute('name', 'audios[]');
        item__label_input.setAttribute('value', audio['id']);

        // 1.3.2.1.1-2
        const item__label_span = document.createElement('span');
        item__label_span.classList.add("item__label_span");
        item__label_span.innerHTML = audio['name'];

        // 1.3.2-2
        const hr_audiolist = document.createElement('hr');
        hr_audiolist.classList.add("hr_audiolist");


        audiolist__item.appendChild(audiolist__item_label);
        audiolist__item_label.appendChild(item__label_input);
        audiolist__item_label.appendChild(item__label_span);

        // console.log(audio['name']);

        dataAudiosession2__audiolist.appendChild(audiolist__item);
        dataAudiosession2__audiolist.appendChild(hr_audiolist);

    });
    content__center_dataAudiosession2.appendChild(dataAudiosession2__audiolist);


    // -------------------------audio-list------------------------------------

    // 1.3-3
    const dataAudiosession2__fulldescription = document.createElement('textarea');
    dataAudiosession2__fulldescription.classList.add("dataAudiosession2__fulldescription");
    dataAudiosession2__fulldescription.name = "fulldescription";
    dataAudiosession2__fulldescription.setAttribute('id', 'fulldescription');
    dataAudiosession2__fulldescription.cols = "40";
    dataAudiosession2__fulldescription.rows = "5";
    dataAudiosession2__fulldescription.placeholder = "Полное описание";
    content__center_dataAudiosession2.appendChild(dataAudiosession2__fulldescription);

    // 1.3-4
    const dataAudiosession2__publicheckpoint = document.createElement('div');
    dataAudiosession2__publicheckpoint.classList.add("btn-group-toggle");
    dataAudiosession2__publicheckpoint.classList.add("dataAudiosession2__publicheckpoint");
    dataAudiosession2__publicheckpoint.setAttribute('data-toggle', 'buttons');
    content__center_dataAudiosession2.appendChild(dataAudiosession2__publicheckpoint);

    // 1.3.4-1
    const radiocheckbox = document.createElement('input');
    radiocheckbox.classList.add("radiocheckbox");
    radiocheckbox.type = 'radio';
    radiocheckbox.name = "radiocheckbox";
    dataAudiosession2__publicheckpoint.appendChild(radiocheckbox);

    // 1.3.4.1-1
    const spaner = document.createElement('span');
    spaner.innerHTML = "Опубликовать";
    radiocheckbox.appendChild(spaner);

    // 1.3-5
    const dataAudiosession2__savebutton = document.createElement('button');
    dataAudiosession2__savebutton.classList.add("dataAudiosession2__savebutton");
    dataAudiosession2__savebutton.type = "submit";
    dataAudiosession2__savebutton.value = "Отправить";
    dataAudiosession2__savebutton.innerHTML = "Сохранить";
    content__center_dataAudiosession2.appendChild(dataAudiosession2__savebutton);




    const form = document.querySelector("#addingAudiosession");
    // console.log(form);

    // --------------------------------ОТПРАВКА ДАННЫХ НА СЕРВЕР---------------------------------------------
    form.onsubmit = (e) => {
        e.preventDefault();

        
        // const audiosessionName = document.querySelector('#nameAudiosession').value;
        // const smalldescription = document.querySelector('#smalldescription').value;
        // const fulldescription = document.querySelector('#fulldescription').value;

        const checkboxes = document.querySelectorAll('.item__label_input');
        const checked = [];
        for (const checkbox of checkboxes) {
            if (checkbox.checked === true) {
                checked.push(parseInt(checkbox.value));
            }
        }

        // const dataForm = {
        //     audiosessionName,
        //     smalldescription,
        //     fulldescription,
        //     checked
        // };

        const fd = new FormData(e.target);
        // console.log(dataForm);

        if (fd.get('image').type !== 'image/png' || fd.get('image').type !== 'image/jpg' ) {
            console.log('неверный формат файла');
        }

        fd.forEach(item => {
            console.log(item);
        });
        // fd.push(checked);

        axios.post("http://ServerCerebry/audioSession/create", fd).then(res => {
            // console.log(res);
            // console.log(checked);
            // alert('Добавил' + res.data.name);
        });
    }




    // axios.post('http://ServerCerebry/audioSession/createAudiosession', {
    //         firstName: 'Fred',
    //         lastName: 'Flintstone'
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

}