console.log(`WARSZTAT - Obsługa formularza 'Imię i nazwisko'`);

// const submitForm = (event) => {
//     event.preventDefault();

//     let firstName = document.querySelector('[name="fname"]');
//     let lastName = document.querySelector('[name="lname"]');

//     console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);
// }

// let form = document.getElementById('form');

// form.addEventListener('submit', submitForm);

const getForm = (event) => {
    event.preventDefault();

    console.log(form);

    let firstN = document.getElementById('fname');
    console.log("🚀 ~ file: script.js:24 ~ getForm ~ firstN:", firstN);
    let firstL = document.getElementById('lname');
    console.log("🚀 ~ file: script.js:27 ~ getForm ~ firstL:", firstL);
}

let form = document.getElementById('my-form');
form.addEventListener('submit', getFom);

// let myButton = document.getElementById('submit');



