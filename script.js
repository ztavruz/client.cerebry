window.onload = function()
{
	
    axios.post('http://ServerCerebry/audioSession/create', {
        name: 'Аудиосессия-1',
        image: 'qweqweqwe',
        description: 'Какоето классное описание',
        cost: '123123'
        // private $id;
        // private $name;
        // private $image;
        // private $description;
        // private $cost;
        // private $audios = [];
      })
      .then(function (response) {
        console.log(response);
      });
	  
	    //audioSession/getAll
	
	      //  axios.get('http://ServerCerebry/audioSession/getAll').then(function (response) {
       //   // handle success
       //   console.log(response);
	      //});
	
}