window.onload = function () {

  // alert(1);
  axios.get('http://ServerCerebry/audioSession/getAll').then(function (response) {


    // console.log(response);
    let audiosessions = response.data;
    // console.log(arrAudiosessions);
    // 0
    const content__center_list = document.querySelector(".content__center_list");

    audiosessions.forEach((audiosession) => {
      // 1
      const center__list_item = document.createElement('div');
      center__list_item.classList.add('center__list_item');
      // 1-1!
      const list__item_id = document.createElement('div');
      list__item_id.classList.add("list__item_id");
      list__item_id.classList.add("list__item");
      list__item_id.innerHTML = audiosession.id;
      // 1-2!
      const list__item_name = document.createElement('div');
      list__item_name.classList.add("list__item_name");
      list__item_id.classList.add("list__item");
      list__item_name.innerHTML = audiosession.name;
      // 1-3!
      const list__item_date = document.createElement('div');
      list__item_date.classList.add("list__item_date");
      list__item_id.classList.add("list__item");
      center__list_item.appendChild(list__item_id);
      center__list_item.appendChild(list__item_name);
      center__list_item.appendChild(list__item_date);

      // 1.3-1!
      const item__date_DMY = document.createElement('div');
      item__date_DMY.classList.add("item__date_DMY");

      // 1.3-2!
      const item__date_HMS = document.createElement('div');
      item__date_HMS.classList.add("item__date_HMS");
      list__item_date.appendChild(item__date_DMY);
      list__item_date.appendChild(item__date_HMS);

      // 1-4
      const list__item_listen = document.createElement('div');
      list__item_listen.classList.add("list__item_listen");
      list__item_listen.classList.add("list__item");
      center__list_item.appendChild(list__item_listen);

      // 1.4-1
      const item__listen_player = document.createElement('div');
      item__listen_player.classList.add("item__listen_player");
      list__item_listen.appendChild(item__listen_player);

      // 1.4.1-1
      const player = document.createElement('audio');
      player.classList.add("player");
      player.controls = 'controls';
      item__listen_player.appendChild(player);

      // 1.4.1.1-1
      const source = document.createElement('source');
      source.type = "audio/mpeg";
      source.src = "ххх.mp4";
      player.appendChild(source);

      // 1.4-2
      const item__listen_menu = document.createElement('div');
      item__listen_menu.classList.add("item__listen_menu");
      item__listen_menu.id = "item__listen_menu";
      list__item_listen.appendChild(item__listen_menu);

      const fa_ellipsis_v = document.createElement('i');
      fa_ellipsis_v.classList.add("fas");
      fa_ellipsis_v.classList.add("fa-ellipsis-v");

      // 1.4.2-4
      const listen__menu_block = document.createElement('div');
      listen__menu_block.classList.add("listen__menu_block");
      listen__menu_block.id = 'listen__menu_block';
      item__listen_menu.appendChild(fa_ellipsis_v);
      item__listen_menu.appendChild(listen__menu_block);

      // 1.4.2.4-1
      const menu__block_comand1 = document.createElement('div');
      menu__block_comand1.classList.add("menu__block_comand");
      listen__menu_block.appendChild(menu__block_comand1);

      // 1.4.2.4.1-1
      const fa_times_circle = document.createElement('i');
      fa_times_circle.classList.add("far");
      fa_times_circle.classList.add("fa-times-circle");
      menu__block_comand1.appendChild(fa_times_circle);

      // 1.4.2.4-2
      const menu__block_comand2 = document.createElement('div');
      menu__block_comand2.classList.add("menu__block_comand");
      listen__menu_block.appendChild(menu__block_comand2);

      // 1.4.2.4.2-1
      const fa_trash_alt = document.createElement('i');
      fa_trash_alt.classList.add("fas");
      fa_trash_alt.classList.add("fa-trash-alt");
      menu__block_comand2.appendChild(fa_trash_alt);

      // 1.4.2.4-1
      const hr_list1 = document.createElement('hr');
      hr_list1.classList.add("hr_list");
      listen__menu_block.appendChild(hr_list1);

      // 1.4.2.4-3
      const menu__block_comand3 = document.createElement('div');
      menu__block_comand3.classList.add("menu__block_comand");
      listen__menu_block.appendChild(menu__block_comand3);

      // 1.4.2.4.3-1
      const fa_sign_out_alt = document.createElement('i');
      fa_sign_out_alt.classList.add("fa-sign-out-alt");
      fa_sign_out_alt.classList.add("fas");
      menu__block_comand3.appendChild(fa_sign_out_alt);

      const hr_list2 = document.createElement('hr');
      hr_list2.classList.add("hr_list");


      content__center_list.appendChild(center__list_item);
      content__center_list.appendChild(hr_list2);

    });
  });



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


  let item__listen_menu = document.querySelector('#item__listen_menu');
  let listen__menu_block = document.getElementById('#listen__menu_block');
  // console.log(item__listen_menu);

  item__listen_menu.onclick = function () {
    listen__menu_block.style.display = 'flex';
  //   // console.log('......');
  }


  // item__list_menu.forEach(function (element) {
  //   element.onclick = function () {
  //     if (element.children[1].classList.contains('menu__block_hide')) {
  //       element.children[1].classList.remove('menu__block_hide');
  //       element.children[1].classList.add('menu__block_show');
  //     } else {
  //       element.children[1].classList.remove('menu__block_show');
  //       element.children[1].classList.add('menu__block_hide');
  //     }
  //   }

  //   console.log(element.children);
  // });














  // audioSession / getAll

  // axios.get('http://ServerCerebry/audioSession/getAll').then(function (response) {
  //   // handle success
  //   console.log(response);
  //   let listAudiosessions = document.getElementById('content__items');
  //   let arrAudiosessions = response.data;

  //   arrAudiosessions.forEach(function(audiosession){
  //     listAudiosessions.innerHTML +=`<li class="list-group-item">${audiosession.name}</li>`;
  //   });
  // });
}