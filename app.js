
$(window).resize(function(){
    if($(' section').width()> 960){
        $('#a').css('backgroundColor','#e7305b');
        $('#b').css('backgroundColor','#e2979c');
        $('#c').css('backgroundColor','#f7f5dd');
        $('#d').css('backgroundColor','#9bdeac');
        $('#e').css('backgroundColor','#99b898');
        $('#f').css('backgroundColor','#feceab');
        $('#g').css('backgroundColor','#ff847c');
        $('#h').css('backgroundColor','#e84a5f');
        $('#i').css('backgroundColor','blue');
    }
});

// $(window).resize(function(){
//     if($(' section').width()> 960){
//         $('main').css({'width':'100%','height':'100%','margin':' 0 auto'})
//         $('#a').css({'backgroundColor':'#e7305b','width':'960','height':'100'});
//         $('#a p').css('margin','5% auto');
//         $('#b').css({'backgroundColor':'#e2979c','width':'200','height':'600','flout':'left'});
//         $('#b p').css('margin','99% auto');

//         $('#c').css({'backgroundColor':'#f7f5dd','width':'380','height':'200'});
//         $('#d').css({'backgroundColor':'#9bdeac','width':'380','height':'200'});
//         $('#c p').css('margin','25% auto');
//         $('#d p').css('margin','25% auto');
//         $('.squered').css({'display':'inlineBlock','margin':'-2','marginTop':'-1'
//     ,'width':'190','height':'250'});
//     $('.squered p').css('margin','55% auto');

//         $('#e').css('backgroundColor','#99b898');
//         $('#f').css('backgroundColor','#feceab');
//         $('#g').css('backgroundColor','#ff847c');
//         $('#h').css('backgroundColor','#e84a5f');
//         $('#i').css({'backgroundColor':'blue','display':'inlineBlock','width':
//     '760','height':'150'});
//     $('#i p').css('margin','10% auto');

//     }
// });