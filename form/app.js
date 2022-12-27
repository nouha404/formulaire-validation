const btn = document.querySelector('#btn')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirm_password = document.querySelector('#password2')
const h2 = document.querySelector('h2')


const usernameValidation = (name) => {
    parentElement = name.parentElement
    small = parentElement.querySelector('small')
    if (name.value == '') {
        small.replaceWith('Un champ vide ne peut etre envoyer') 
        parentElement.classList.add('error')
    } else if(name.value.length < 3) {
        small.replaceWith(`Le champ doit est superieur a ${name.value.length}`)
        parentElement.classList.add('error')
    } else {
        parentElement.classList.add('success')
    }

}
const mailValidation = (mail) => {
    reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(?!\.)[a-zA-Z]{1,}$/

    parentElement = mail.parentElement
    small = parentElement.querySelector('small')
    if (reg.test(mail.value)) {
        parentElement.classList.add('success')
    } else {
        parentElement.classList.add('error')
        small.style.visibility = "visible";
        small.replaceWith('Le mail est invalide')
    }
    
}

const passwordValidation = (password)=> {
    parentElement = password.parentElement
    small = parentElement.querySelector('small')
    
    if(password.value.length < 7) {
        small.style.visibility = "visible";
        parentElement.classList.add('error')
        small.replaceWith('Le mot de passe doit contenir au moins 8 caractères')
    } else {
        parentElement.classList.add('success')
    }
}

const passwordValidationConfirm = (password, confirm_password) => {
    parentElement = confirm_password.parentElement;
    small = parentElement.querySelector('small');

    if (password.value !== confirm_password.value) {

        parentElement.classList.add('error')
        small.style.visibility = "visible";
        small.replaceWith('Les mots de passe ne sont pas identiques')
      }
      else if (password.value.length < 7) {
        small.style.visibility = "visible";
        parentElement.classList.add('error');
        small.replaceWith('Le mot de passe doit contenir au moins 8 caractères');
      } else {
        parentElement.classList.add('success');

      }
}


btn.addEventListener('click', (e)=> {
    // if (username.classList.contains('success') && email.classList.contains('success') && password.classList.contains('success') && confirm_password.classList.contains('success')) {
        // Si tous les champs sont valides, ne bloquez pas la soumission du formulaire
        //     h2.replaceWith('Valider');
        // 


    e.preventDefault()
    usernameValidation(username)
    mailValidation(email)
    passwordValidation(password)
    passwordValidationConfirm(password, confirm_password)

})