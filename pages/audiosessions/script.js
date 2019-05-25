window.onload = function () {
  // axios.get('http://ServerCerebry/audioSession/getAll').then(function (response) {
  //   // handle success
  //   console.log(response);
  //   let listAudiosessions = document.getElementById('audiosessions');
  //   let arrAudiosessions = response.data;

  //   arrAudiosessions.forEach(function (audiosession) {
  //     listAudiosessions.innerHTML +=
  //       `<ul class="list-group  list-group-horizontal content__items ">
  //       <li class="list-group-item flex-fill content__items_item"> ${audiosession.id}</li>
  //       <li class="list-group-item flex-fill content__items_item">${audiosession.name}</li>
  //       <li class="list-group-item flex-fill content__items_item">Дата</li>
  //       <li class="list-group-item flex-fill content__items_item">Прослушать</li>
  //     </ul>
  //     <hr class="hr_audiosession" />
  //     `;
  //   });

  // });

  let item__listen_menu = document.getElementById('item__listen_menu');
  let listen__menu_block = document.getElementById('listen__menu_block');
  console.log(item__listen_menu);

  item__listen_menu.onclick = function () {
    listen__menu_block.style.display = 'block';
    console.log('......');
  }

  let audiosessionName;
  let audiosessionImage;
  let audiosessionDescription;
  let audiosessionCost;
  let addAudiosession = document.getElementById('addAudiosession');

  addAudiosession.onclick = function (e) {
    createAudiosession();
  }

  function createAudiosession() {
    audiosessionName = document.getElementById('audiosessionName');
    audiosessionImage = document.getElementById('audiosessionImage');
    audiosessionDescription = document.getElementById('audiosessionDescription');
    audiosessionCost = document.getElementById('audiosessionCost');
    axios.post('http://ServerCerebry/audioSession/create', {
        name: audiosessionName.value,
        image: audiosessionImage.value,
        description: audiosessionDescription.value,
        cost: audiosessionCost.value
      })
      .then(function (response) {
        console.log(response);
      });
    audiosessionName.value = "";
    audiosessionImage.value = "";
    audiosessionDescription.value = "";
    audiosessionCost.value = "";

  }


















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