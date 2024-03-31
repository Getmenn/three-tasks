
// обработчик для выбора формы
const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');
const formOne = document.querySelector('.formOne');
const formTwo = document.querySelector('.formTwo');
const main = document.querySelector('.wrapperBlocks');

function buttonClickHandler(event) {
    const buttonText = event.target.textContent;
    if (buttonText === 'Форма 1') {
        formOne.classList.add('visible');
        main.classList.add('hidden');
    } else if (buttonText === 'Форма 2') {
        formTwo.classList.add('visible');
        main.classList.add('hidden');
    }
}

buttonOne.addEventListener('click', buttonClickHandler);
buttonTwo.addEventListener('click', buttonClickHandler);

// Обработчик для чекбоксов
const firsCheckBox = formOne.querySelector('.checkboxContainer')
const myCheckboxOne = formOne.querySelector('.myCheckbox')
const checkmarkOne = formOne.querySelector('.checkmark')

const secondCheckBox = formTwo.querySelector('.checkboxContainer')
const myCheckboxTwo = formTwo.querySelector('.myCheckbox')
const checkmarkTwo = formTwo.querySelector('.checkmark')

function handleCheckBox(mainCheckbox, MyCheckbox) {
    if (mainCheckbox.checked) {
        MyCheckbox.classList.add('checked');
    } else {
        MyCheckbox.classList.remove('checked');
    }
}
firsCheckBox.addEventListener('change', () => handleCheckBox(myCheckboxOne, checkmarkOne));
secondCheckBox.addEventListener('change', () => handleCheckBox(myCheckboxTwo, checkmarkTwo));


// Выход из формы
const exitBtn = document.querySelector('.exitBtn')

const handleExit = () => {
    formOne.classList.remove('visible');
    formTwo.classList.remove('visible');
    main.classList.remove('hidden');
}

exitBtn.addEventListener('click', handleExit);


// Валидация

const validateRusReq = (field, errorField) => {
  const value = field.value.trim();
  const regexp = /[а-яё]/i;

  if (value === '' && !regexp.test(value)) {
      errorField.textContent = 'Это поле обязательное';
    return false;
  } else if(!regexp.test(value)){
      errorField.textContent = 'Разрешена только кириллица';
    return false;
  } else {
      errorField.textContent = '';
    return true;
  }
}

const validateRequired = (field, errorField) => {
  const value = field.value.trim();

  if (value === '') {
      errorField.textContent = 'Это поле обязательное';
    return false;
  } else {
      errorField.textContent = '';
    return true;
  }
}

const validateEmail = (field, errorField) => {
  const value = field.value.trim();
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (value !== '' && !regexp.test(value)) {
      errorField.textContent = 'Не корректный email';
    return false;
  } else if(value === '') {
      errorField.textContent = 'Это поле обязательное';
    return false;
  } else {
      errorField.textContent = '';
    return true;
  }
}

const validatePhone = (field, errorField) => {
  const value = field.value.trim();
  const regexp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

  if (value !== '' && !regexp.test(value)) {
      errorField.textContent = 'Не корректный номер телефона';
    return false;
  } else if(value === '') {
      errorField.textContent = 'Это поле обязательное';
    return false;
  } else {
      errorField.textContent = '';
    return true;
  }
}

// Первая форма
const fieldEmailNumber = formOne.querySelector('.field.emailNumber');
const fieldCity = formOne.querySelector('.field.city');

const errorMessageEmailNumber = formOne.querySelector('.erorrMessage.emailNumber');
const errorMessageCity = formOne.querySelector('.erorrMessage.city');

const submitButtonOne = formOne.querySelector('.button.formButton');

fieldEmailNumber.addEventListener('input', () => errorMessageEmailNumber.textContent = '')
fieldCity.addEventListener('input', () => errorMessageCity.textContent = '')

submitButtonOne.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(formOne);
  const emailNumberStatus = validateRequired(fieldEmailNumber, errorMessageEmailNumber)
  const cityStatus =  validateRusReq(fieldCity, errorMessageCity)
  
  if (emailNumberStatus && cityStatus) {
      const emailNumber = formData.get('emailNumber');
      const city = formData.get('city');
      console.log(JSON.stringify({
        emailNumber,
        city,
        distribution: myCheckboxOne.checked
      }));
      formOne.reset()
      handleExit()
  }
});


// Вторая форма
const fieldName = formTwo.querySelector('.field.name');
const fieldSurname = formTwo.querySelector('.field.surname');
const fieldNumber = formTwo.querySelector('.field.number');
const fieldEmail = formTwo.querySelector('.field.email');
const fieldNameCompany = formTwo.querySelector('.field.nameCompany');
const fieldRegion = formTwo.querySelector('.field.region');

const errorMessageName = formTwo.querySelector('.erorrMessage.name');
const errorMessageSurname = formTwo.querySelector('.erorrMessage.surname');
const errorMessageNumber = formTwo.querySelector('.erorrMessage.number');
const errorMessageEmail = formTwo.querySelector('.erorrMessage.email');
const errorMessageNameCompany = formTwo.querySelector('.erorrMessage.nameCompany');
const errorMessageRegion = formTwo.querySelector('.erorrMessage.region');

const submitButtonTwo = formTwo.querySelector('.button.formButton');

fieldName.addEventListener('input', () => errorMessageName.textContent = '')
fieldSurname.addEventListener('input', () => errorMessageSurname.textContent = '')
fieldNumber.addEventListener('input', () => errorMessageNumber.textContent = '')
fieldEmail.addEventListener('input', () => errorMessageEmail.textContent = '')
fieldNameCompany.addEventListener('input', () => errorMessageNameCompany.textContent = '')
fieldRegion.addEventListener('input', () => errorMessageRegion.textContent = '')

submitButtonTwo.addEventListener('click', function (e) {
    e.preventDefault();
    const formData = new FormData(formTwo);
    const nameStatus =  validateRusReq(fieldName, errorMessageName)
    const surnameStatus =  validateRusReq(fieldSurname, errorMessageSurname)
    const numberStatus =  validatePhone(fieldNumber, errorMessageNumber)
    const emailStatus =  validateEmail(fieldEmail, errorMessageEmail)
    const nameCompanyStatus =  validateRequired(fieldNameCompany, errorMessageNameCompany)
    const regionStatus =  validateRusReq(fieldRegion, errorMessageRegion)
    
    if (nameStatus && surnameStatus && numberStatus && emailStatus && nameCompanyStatus && regionStatus) {
        const name = formData.get('name');
        const surname = formData.get('surname');
        const number = formData.get('number');
        const email = formData.get('email');
        const nameCompany = formData.get('nameCompany');
        const region = formData.get('region');
        console.log(JSON.stringify({
          name, 
          surname, 
          number, 
          email, 
          nameCompany, 
          region, 
          distribution: myCheckboxTwo.checked
        }));
        formTwo.reset()
        handleExit()
    }
});
