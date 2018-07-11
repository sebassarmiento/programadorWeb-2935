$(document).ready(function(){
    
    var count = 0
    
    $(document).keydown(function(event){
        switch(event.which){
            case 38:
            count++
            break;
            case 40:
            count--
            break;
            case 13:
            count = 0
            break
        }
        $('#counter').html(count)
    })
})