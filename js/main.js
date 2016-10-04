var audio = document.getElementsByTagName("audio")[0];
audio.play();

// or with an ID

var audio = document.getElementById("mySoundClip");
audio.play();

var audio = $("#mySoundClip")[0];
$("nav a").mouseenter(function() {
  audio.play();
});

