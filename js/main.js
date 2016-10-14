var audios = $("audio")
var sound = $("sound")
var numaudio = audios.length
var previousaudio = 0

// var audio = $("#mySoundClip")[0];
$(".rectangle").mouseenter(function() {

  var randaudio = previousaudio
  while(randaudio == previousaudio){
    randaudio = Math.floor (Math.random() * (numaudio - 0) + 0);
  }

  previousaudio = randaudio
  audios.eq(randaudio).get(0).play();

});

$(".rectangle").mouseleave(function() {

  audios.each(function(i){
  audios.eq(i).get(0).pause();

  })
});


$(".header").mouseenter(function() {

  sound.each(function(i){
  sound.eq(i).get(0).pause();

  })
});

$(".header").mouseleave(function() {

  sound.each(function(i){
  sound.eq(i).get(0).pause();

  })
});

