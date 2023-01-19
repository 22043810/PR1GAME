const mario = document.getElementById("mario");
const blocks = document.getElementById("blocks");

function jump() {
    if (mario.classList != "jump") {
      mario.classList.add("jump");

    setTimeout(function () {
        mario.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
    
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
  
    let blocksLeft = parseInt( 
      window.getComputedStyle(blocks).getPropertyValue("left")
    );
    
    if (blocksLeft <50 && blocksLeft > 0 && marioTop >= 140) {

      alert ("Game Over!");
    }
}, 10);
document.addEventListener("keydown", function (event) {
    jump();
});