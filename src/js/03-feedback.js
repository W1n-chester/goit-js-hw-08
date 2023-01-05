import throttle from 'lodash.throttle';
const form = document.querySelector(`form`);
const input = document.querySelector(`input`);
const textarea = document.querySelector(`textarea`);
form.addEventListener(`input`, createDataKey);
function createDataKey(evt) {
  const {
    elements: { email, message },
  } = evt.currentTarget;
  // console.log(email.value);
  const feedbackFormState = {};
  feedbackFormState.email = email.value;
  feedbackFormState.message = message.value;
  // console.log(feedbackFormState);
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}
const defaultDataForm = JSON.parse(localStorage.getItem('feedback-form-state'));
// console.dir(defaultDataForm);
if (defaultDataForm) {
  input.value = defaultDataForm.email;
  textarea.value = defaultDataForm.message;
}
form.addEventListener(`submit`, clearForm);
function clearForm(evt) {
  evt.preventDefault();
  console.log(
    `Email:${input.value}
    Message:${textarea.value}`
  );
  input.value = ``;
  textarea.value = ``;
  localStorage.removeItem('feedback-form-state');
}
