var firstName = document.getElementById('firstName')

firstName.onblur = check

function check(event){
    var node = event.target
    if(!node.value){
        node.classList.remove('is-valid')
        node.classList.add('is-invalid')
    } else{
        node.classList.remove('is-invalid')
        node.classList.add('is-valid')
    }
}