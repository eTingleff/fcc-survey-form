;((window, document, undefined) => {
  'use strict';

  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', validateForm);

  function validateForm() {
    const name = document.forms[0]['name'].value;
    if (name == "") {
      console.log("Name Required");
    }
  }

})(window, document);