$(function(){
    $('#h2_2').css('color', 'red');

    // $('.vert').css('color', 'green');

    $('h1').html('Salut à tous c Lasalle on se retrouve pour une new video');

    $('p').each(function(){
        $('p').on('mouseover', function(){
            $('p').css('color', 'green');
        })
        $('p').on('mouseout', function(){
            $('p').css('color', 'red');
        })
    });
})