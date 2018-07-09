$('#email').blur(validate)

function validate(){
    let emailInput = $(this)
    if(emailInput.val() && emailInput.val().indexOf('@')!==-1 && emailInput.val().indexOf('.')!==-1){
        emailInput.removeClass('is-invalid')
        emailInput.addClass('is-valid')
    }else{
        emailInput.addClass('is-invalid')
        emailInput.removeClass('is-valid')
    }
}