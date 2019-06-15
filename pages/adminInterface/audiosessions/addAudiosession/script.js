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

    const center__dataAudiosession2_item = document.createElement('div');
    center__dataAudiosession2_item.classList.add("center__dataAudiosession2_item");
    content__center_dataAudiosession2.appendChild(center__dataAudiosession2_item);


    const dataAudiosession2__item_audio = document.createElement('label');
    dataAudiosession2__item_audio.classList.add("dataAudiosession2__item_audio");
    dataAudiosession2__item_audio.setAttribute('for', 'audio');
    center__dataAudiosession2_item.appendChild(dataAudiosession2__item_audio);


    const item__audio_span = document.createElement('span');
    item__audio_span.classList.add("item__audio_span");
    item__audio_span.innerHTML = "+ Добавить аудиофайл";
    dataAudiosession2__item_audio.appendChild(item__audio_span);


    const item__audio_input = document.createElement('input');
    item__audio_input.classList.add("item__audio_input");
    item__audio_input.setAttribute('type', 'file');
    item__audio_input.setAttribute('id', 'audio');
    item__audio_input.setAttribute('name', 'audio');
    item__audio_input.setAttribute('placeholder', '+ Добавить аудиофайл');
    center__dataAudiosession2_item.appendChild(item__audio_input);


    // 1.3-3
    const dataAudiosession2__fulldescription = document.createElement('textarea');
    dataAudiosession2__fulldescription.classList.add("dataAudiosession2__fulldescription");
    dataAudiosession2__fulldescription.setAttribute('name', 'fulldescription');
    dataAudiosession2__fulldescription.setAttribute('id', 'fulldescription');
    dataAudiosession2__fulldescription.setAttribute('cols', '40');
    dataAudiosession2__fulldescription.setAttribute('rows', '5');
    dataAudiosession2__fulldescription.placeholder = "Полное описание";
    content__center_dataAudiosession2.appendChild(dataAudiosession2__fulldescription);

    
    const dataAudiosession2__savebutton = document.createElement('button');
    dataAudiosession2__savebutton.classList.add("dataAudiosession2__savebutton");
    dataAudiosession2__savebutton.setAttribute('type', 'submit');
    dataAudiosession2__savebutton.setAttribute('value', 'Отправить');
    dataAudiosession2__savebutton.innerHTML = "Сохранить";
    content__center_dataAudiosession2.appendChild(dataAudiosession2__savebutton);


    const form = document.querySelector("#addingAudiosession");
    // console.log(form);

    // --------------------------------ОТПРАВКА ДАННЫХ НА СЕРВЕР---------------------------------------------
    form.onsubmit = (e) => {
        e.preventDefault();

        const fd = new FormData(e.target);
        // console.log(dataForm);

        if (fd.get('image').type !== 'image/png' || fd.get('image').type !== 'image/jpg') {
            console.log('неверный формат файла');
        }
        // if (fd.get('audio').type !== 'image/png' || fd.get('image').type !== 'image/jpg') {
        //     console.log('неверный формат файла');
        // }

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