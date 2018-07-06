$('#email').blur(validate)

function validate(){
    let emailInput = $(this)
    if(emailInput[0].value && emailInput[0].value.indexOf('@')!==-1 && emailInput[0].value.indexOf('.')!==-1){
        emailInput.removeClass('is-invalid')
        emailInput.addClass('is-valid')
    }else{
        emailInput.addClass('is-invalid')
        emailInput.removeClass('is-valid')
    }
}