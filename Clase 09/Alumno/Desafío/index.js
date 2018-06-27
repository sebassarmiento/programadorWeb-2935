var emailInput = document.getElementById('email')

emailInput.onblur = checkValidEmail

function checkValidEmail(event){
    var node = event.target
    if(node.value.indexOf("@")>=0&&node.value.indexOf('.')>=0){
        node.classList.remove('is-invalid')
        node.classList.add('is-valid')
    }else{
        node.classList.remove('is-valid')
        node.classList.add('is-invalid')
    }
}