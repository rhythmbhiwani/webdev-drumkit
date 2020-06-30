var drums = document.getElementsByClassName("drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function() {
    checkKeys(this.innerHTML);
  });
}
  function playDrum(sound) {
    var audio = new Audio(sound);
    audio.play();
  }

  function checkKeys(key) {
    buttonAnimation(key);
    switch (key) {
      case "w":
        playDrum('sounds/tom-1.mp3');
        break;
      case "a":
        playDrum('sounds/tom-2.mp3');
        break;
      case "s":
        playDrum('sounds/tom-3.mp3');
        break;
      case "d":
        playDrum('sounds/tom-4.mp3');
        break;
      case "j":
        playDrum('sounds/snare.mp3');
        break;
      case "k":
        playDrum('sounds/crash.mp3');
        break;
      case "l":
        playDrum('sounds/kick-bass.mp3');
        break;
      default:
        console.log("Wrong Button");
    }
  }

  document.addEventListener("keydown", function(event) {
    checkKeys(event.key);
  });


  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {  activeButton.classList.remove("pressed"); }, 100);

  }
