$(document).ready(function(){
    $('button').on('click', removeElementWithAnimation)
    function removeElementWithAnimation(){
        $('#1').hide(2000, function(){
            $('#1').remove()
        })
    }
})