/*
 * @Author: Rajkeshwar Prasad(rajkeshwar.pd@gmail.com) 
 * @Date: 2022-01-24 05:25:19 
 * @Last Modified by: Rajkeshwar Prasad
 * @Last Modified time: 2022-01-24 05:40:57
 */

class EvaluateForm {
  constructor(formIndex) {
    this.__formIndex = formIndex;
    this.__form = document.forms[formIndex];
    this.__submitBtn = this.__form.querySelector('button[type="submit"]');
    this.serialize = this.serialize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initialize()
  }

  initialize() {
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

var __fromLoaded = false;
function checkFromLoaded() {
    var timeout = setTimeout(() => {
        console.log('loadied')

        if (document.forms.length > 0) {
            console.log('form is loaded...')
            new EvaluateForm(0);
            clearTimeout(timeout)
            __fromLoaded = true;
        } else {
           console.log('Checking form is loaded...')
          checkFromLoaded()
        }
    }, 1000);
}

window.onload = checkFromLoaded;