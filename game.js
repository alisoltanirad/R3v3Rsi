$(document).ready(function(){
    
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<19; i++){
        $(imgs[i]).addClass("empty");
    };
    $(imgs[19]).addClass("valid");
    for (var i=20; i<26; i++){
        $(imgs[i]).addClass("empty");
    };
    $(imgs[26]).addClass("valid");
    $(imgs[27]).addClass("white");
    $(imgs[28]).addClass("black");
    for (var i=29; i<35; i++){
        $(imgs[i]).addClass("empty");
    };
    $(imgs[35]).addClass("black");
    $(imgs[36]).addClass("white");
    $(imgs[37]).addClass("valid");
    for (var i=38; i<44; i++){
        $(imgs[i]).addClass("empty");
    };
    $(imgs[44]).addClass("valid");
    for (var i=45; i<64; i++){
        $(imgs[i]).addClass("empty");
    };
    

});

