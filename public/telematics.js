/*
 * @Author: Rajkeshwar Prasad(rajkeshwar.pd@gmail.com) 
 * @Date: 2022-01-24 05:25:19 
 * @Last Modified by: Rajkeshwar Prasad
 * @Last Modified time: 2022-01-24 05:51:24
 */

class EvaluateForm {
  constructor(formIndex) {
    this.__formIndex = formIndex;
    this.serialize = this.serialize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fire();
  }

  fire() {
    const checkFromLoaded = () => {
      let timeout = setTimeout(() => {
        console.log('Form loaded called...')

        if (document.forms.length > 0) {
          console.log('form is loaded...')
          this.initialize();
          clearTimeout(timeout)
        } else {
          console.log('Checking form is loaded...')
          checkFromLoaded()
        }
      }, 1000);
    }

    window.onload = checkFromLoaded;
  }

  initialize() {
    this.__form = document.forms[this.__formIndex];
    this.__submitBtn = this.__form.querySelector('button[type="submit"]');
    this.__submitBtn.addEventListener('click', this.handleSubmit);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.serialize(this.__form);
    console.log(`Preparing data to send `, data);
    fetch('https://nuoma-api.herokuapp.com/enquire', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(this.handleResponse)
  }

  handleResponse(resp) {
    console.log(`Received response :`, resp);
    if (resp.hashlink) {
      alert('Your request is send. Please check your email.')
    }
  }

  serialize(form) {
    return [...form.querySelectorAll('input')]
      .filter(el => el.type !== 'submit')
      .reduce((acc, el) => {
        acc[el.getAttribute('aria-label')] = el.value;
        return acc;
      }, {})
  }
}

