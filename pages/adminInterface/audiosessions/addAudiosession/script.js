wiondow.onload = function () {

    let form = document.forms.addingAudiosession;
    let formData = new FormData(form);
    console.log(formData);

    // console.log(
    //     formData.get("code"),
    //     formData === oldForm
    // );

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