$(document).ready(function(){
    $('#firstName').one('blur', validateNameField)

    function validateNameField(event){
        var errorText = ''
        var inputNameNode = event.target

        var inputNameNodeJQ = $(this)

        inputNameNodeJQ.next().remove()

        if(!inputNameNode.value){
            errorText = 'Porfavor escribi tu nombre'
            inputNameNodeJQ.removeClass('is-valid')
            inputNameNodeJQ.addClass('is-invalid')
        }else{
            inputNameNodeJQ.removeClass('is-invalid')
            inputNameNodeJQ.addClass('is-valid')
        }

        if(event.type==='blur'){
            inputNameNodeJQ.on('input', validateNameField)
        }

        if(errorText){
            var parentNode = inputNameNodeJQ.parent()
            parentNode.append('<div class="invalid-feedback">'+ errorText + '</div>')
        }

        enableButton()
    }

    $('#email').one('blur', validateEmailField)

    function validateEmailField(event){
        var inputNode = $(this)

        var errorText = ''

        inputNode.next().remove()

        if(!inputNode.val()){
            console.log('Entro')
            errorText = 'Porfavor escribi tu email'
            inputNode.addClass('is-invalid')
            inputNode.removeClass('is-valid')
        }else{
            if(inputNode.val().indexOf('@')===-1){
                errorText = 'Tiene que contener arroba (@)'
            }
            if(inputNode.val().indexOf('.')===-1){
                errorText += 'Tiene que contener punto (.)'
            }
        }

        if(inputNode.val()&&inputNode.val().indexOf('@')!==-1&&inputNode.val().indexOf('.')!==-1){
            inputNode.addClass('is-valid')
            inputNode.removeClass('is-invalid')
        }

        if(errorText){
            inputNode.parent().append('<div class="invalid-feedback">'+errorText+'</div>')
            inputNode.addClass('is-invalid')
            inputNode.removeClass('is-valid')
        }

        if(event.type === 'blur'){
            inputNode.on('input', validateEmailField)
        }

        enableButton()
    }

    $('#comments').one('blur', validateCommentField)

    function validateCommentField(event){
        var inputNode = $(this)
        var errorText = ''

        inputNode.next().remove()

        if(!inputNode.val()){

            errorText = 'Porfavor escribi un comentario'

            inputNode.addClass('is-invalid')
            inputNode.removeClass('is-valid')
        }else{
            inputNode.addClass('is-valid')
            inputNode.removeClass('is-invalid')
        }

        if(errorText){
            inputNode.parent().append('<div class="invalid-feedback">'+errorText+'</div>')
        }

        if(event.type === 'blur'){
            $('#comments').on('input', validateCommentField)
        }

        enableButton()
    }

    function enableButton(){
        var inputName = $('#firstName')
        var inputEmail = $('#email')
        var inputComment = $('#comments')
        if(inputName.hasClass('is-valid')&&inputEmail.hasClass('is-valid')&&inputComment.hasClass('is-valid')){
            $('#submitButton').attr('disabled', false)
        }else{
            $('#submitButton').attr('disabled', true)
        }
    }
})
