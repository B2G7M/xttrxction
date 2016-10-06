var audios = $("audio")
var numaudio = audios.length

// var audio = $("#mySoundClip")[0];
$(".rectangle").mouseenter(function() {

  var randaudio = Math.floor (Math.random() * (numaudio - 0) + 0);
  audios.eq(randaudio).get(0).muted = false
});

