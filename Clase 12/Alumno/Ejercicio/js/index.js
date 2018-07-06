console.log('Init app')

$('.square').click(draw)

var count = 0

function draw(){
    if(count === 0){
        $(this).addClass('circle')
        count++
    }else if(count === 1){
        $(this).addClass('cross')
        count--
    }
}