import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', throttle(onFormSubmit, 500));
form.addEventListener('input', onValueInput);

populateMessageTextareal();

function onValueInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formDataParse = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(formDataParse);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;

  let info = {email : `` , message : ``};

  if (email === `` || message === ``) {
      alert(`Усі поля форми мають бути заповнені!`);
  } else {
      info.email = email;
      info.message = message;
      console.log(info);
      evt.currentTarget.reset();
  }
}

function populateMessageTextareal() {
  const valueStorage = localStorage.getItem(STORAGE_KEY);
  if (valueStorage) {
    const formDataParse = JSON.parse(localStorage.getItem(STORAGE_KEY));
    form.elements.email.value = formDataParse.email || '';
    form.elements.message.value = formDataParse.message || '';
  }
}