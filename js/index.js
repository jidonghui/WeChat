
$(".controlplay").click(function(){
	var music = $(".sing")[0]; 
    if(music.paused){ 
        music.play();
        $(".controlplay").css("animationPlayState","running");
        $(".controlplay").attr("src","img/musicon.png");
    }else{ 
        music.pause();
        $(".controlplay").attr("src","img/musicoff.png");
        $(".controlplay").css("animationPlayState","paused");
    } 
})
