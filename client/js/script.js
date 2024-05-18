const form = document.querySelector('.form');
const submit = document.querySelector('.form__submit')
const inputs =document.querySelectorAll('.form__inp')
const error = document.querySelector('.error')
const url = 'http://localhost:3000/users/login';

function postOrder(client) {
    console.log(client);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(client)
    }).then(response => response.json());
}

function validation(inp){
    const errMsg = inp.nextElementSibling
    if(inp.validity.patternMismatch){
        errMsg.textContent = inp.getAttribute('data-error-pattern')
    } else if (inp.validity.valueMissing){
        errMsg.textContent = 'Поле не должно быть пустым'
    } else if(inp.validity.tooLong || inp.validity.tooShort){
        errMsg.textContent = inp.getAttribute('data-error-length')
    }
    else {
        errMsg.textContent = ''
    }
    submit.disabled = !Array.from(inputs).every((inp)=> inp.validity.valid)
}

function formSubmit(e) {
    e.preventDefault();
    const { emeil, password } = e.target.elements;
    const obj = {
        emeil: emeil.value,
        password: password.value
    };
        postOrder(obj)
            .then(data => {
                window.location.href = '/pages/try.html'
            })
            .catch(err => console.error(err));
}

form.addEventListener('submit', formSubmit);
inputs.forEach(inp => inp.addEventListener('input', () => validation(inp)))