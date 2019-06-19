window.onload = async function () {
    // 0
    const container__row = document.querySelector("#container__row");
    // const audiosessions = await axios.get('http://server.cerebry.xyz/audioSession/getAll').then(res => res.data);
    const audiosessions = await axios.get('http://ServerCerebry/audioSession/getAll').then(res => res.data);
    
    audiosessions.map(session =>{
        const col_12 = document.createElement('div');
        col_12.classList.add("col-12");
        col_12.classList.add("col-sm-6");
        col_12.classList.add("col-md-6");
        col_12.classList.add("col-lg-4");
        col_12.classList.add("col-xl-4");
        // 1-1
        const audioseans = document.createElement('div');
        audioseans.classList.add("audioseans");
        // 1.1-1
        const audioseans__image = document.createElement('div');
        audioseans__image.classList.add("audioseans__image");
        // 1.1.1-1
        const audioseans__image_img = document.createElement('img');
        audioseans__image_img.classList.add("audioseans__image_img");
        audioseans__image_img.setAttribute('src',session.image);
        audioseans__image_img.setAttribute('alt', '');
        // 1.1-2
        const audioseans__data = document.createElement('div');
        audioseans__data.classList.add("audioseans__data");
        // 1.1.2-1
        const audioseans__data_name = document.createElement('div');
        audioseans__data_name.classList.add("audioseans__data_item");
        audioseans__data_name.classList.add("audioseans__data_name");
        // 1.1.2.1-1
        const data__name_span = document.createElement('span');
        data__name_span.classList.add("addingAudio");
        data__name_span.innerHTML = session.name;
        // 1.2.2-2
        const hr_list = document.createElement('div'); 
        hr_list.classList.add("addingAudio");
        // 1.2.2-3
        const audioseans__data_description = document.createElement('div');
        audioseans__data_description.classList.add("audioseans__data_item");
        audioseans__data_description.classList.add("audioseans__data_description");
        // 1.2.2.3-1
        const data__description_span = document.createElement('span');
        data__description_span.classList.add("data__description_span");
        data__description_span.innerHTML = session.smallDescription;
        // 1.2.2-4
        const audioseans__data_button = document.createElement('div');
        audioseans__data_button.classList.add("audioseans__data_item");
        audioseans__data_button.classList.add("audioseans__data_button");
        // 1.2.2.4-1
        const data__button_btn  = document.createElement('button');
        data__button_btn.classList.add("data__button_input");
        data__button_btn.setAttribute('type', 'submit');
        data__button_btn.setAttribute('value', 'Отправить');
        // 1.2.2.4.1-1
        const button__btn_span = document.createElement('span');
        button__btn_span.classList.add("button__input_span");
        button__btn_span.innerHTML = "Подробнее";

        /*1*/container__row.appendChild(col_12);
        /*1-1*/col_12.appendChild(audioseans);
        /*1.1-1*/audioseans.appendChild(audioseans__image);
        /*1.1.1-1*/audioseans__image.appendChild(audioseans__image_img);
        /*1.1-2*/audioseans.appendChild(audioseans__data);
        /*1.1.2-1*/audioseans__data.appendChild(audioseans__data_name);
        /*1.1.2.1-1*/audioseans__data_name.appendChild(data__name_span);
        /*1.2.2-2*/audioseans__data.appendChild(hr_list);
        /*1.2.2-3*/audioseans__data.appendChild(audioseans__data_description);
        /*1.2.2.3-1*/audioseans__data_description.appendChild(data__description_span);
        /*1.2.2-4*/audioseans__data.appendChild(audioseans__data_button);
        /*1.2.2.4-1*/audioseans__data_button.appendChild(data__button_btn);
        /*1.2.2.4.1-1*/data__button_btn.appendChild(button__btn_span);
    });

    // console.log($audiosessions);
}