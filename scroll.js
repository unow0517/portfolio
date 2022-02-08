var canvas = document.getElementById('scrollScreen')
var ctx = canvas.getContext('2d');
var scrollYPos=0;
var img = new Image();

imgfolder = 'Resolution_half'
img.src = imgfolder + "/KoreaToGermany_0.jpg"


canvas.width  = window.innerWidth;
canvas.height = 0.7 * window.innerHeight;

function windowResize() {
  canvas.width  = window.innerWidth;
  canvas.height = 0.7 * window.innerHeight;
};

window.addEventListener('resize', function(e){
  windowResize();
  scrollYPos = Math.round(window.scrollY/20);
  img.src = imgfolder + "/KoreaToGermany_"+scrollYPos +".jpg"

});

window.addEventListener('scroll',function(e){
  scrollYPos = Math.round(window.scrollY/20);
  console.log('Ypos',scrollYPos)

  var sequenceOn = document.getElementById("scollImg-sequence")
  console.log(window.scrollY)
  if(scrollYPos > 450) {
    scrollYPos == 450;
    sequenceOn.style.position = 'relative';
    sequenceOn.style.top = '9500px';
  } else {
    sequenceOn.style.position = 'fixed';
    sequenceOn.style.top = '50%';
    player(scrollYPos);
  }
  console.log(window.scrollY)
})

function player(num){
  img.src = imgfolder +"/KoreaToGermany_"+num +".jpg"
}

//playSequence-> player -> new image LOAD -> addEventLister run
img.addEventListener('load', function(e){
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
  ctx.drawImage(img,0,0,canvas.width,canvas.height);
})

//text fade in

window.addEventListener("scroll",()=>{
  if(scrollYPos <= 45){
    opacity1 = scrollYPos / 45
    opacity2 = 0
    opacity3 = 0
    opacity4 = 0
  }else if(scrollYPos<=90){
    opacity1 = 1
    opacity2 = 0
    opacity3 = 0
    opacity4 = 0
  }else if(scrollYPos<=135){
    opacity1 = (135 - scrollYPos)/45
    opacity2 = 0
    opacity3 = 0
    opacity4 = 0
  }else if(scrollYPos<=180){
    opacity1 = 0
    opacity2 = scrollYPos / 180
    opacity3 = 0
    opacity4 = 0
  }else if(scrollYPos<=225){
    opacity1 = 0
    opacity2 = 1
    opacity3 = 0
    opacity4 = 0
  }else if(scrollYPos<=270){
    opacity1 = 0
    opacity2 = (270 - scrollYPos)/45
    opacity3 = 0
    opacity4 = 0
  }else if(scrollYPos<=315){
    opacity1 = 0
    opacity2 = 0
    opacity3 = (scrollYPos - 270)/45
    opacity4 = 0
  }else if(scrollYPos<=360){
    opacity1 = 0
    opacity2 = 0
    opacity3 = 1
    opacity4 = 0
  }else if(scrollYPos<=405){
    opacity1 = 0
    opacity2 = 0
    opacity3 = (405-scrollYPos)/45
    opacity4 = 0
  }else if(scrollYPos<=450){
    opacity1 = 0
    opacity2 = 0
    opacity3 = 0
    opacity4 = scrollYPos/450
  }else if(scrollYPos<=465){
    opacity1 = 0
    opacity2 = 0
    opacity3 = 0
    opacity4 = (465-scrollYPos)/15
  }
  document.querySelector("#scrollText1").style.opacity = opacity1;
  document.querySelector("#scrollText2").style.opacity = opacity2;
  document.querySelector("#scrollText3").style.opacity = opacity3;
  document.querySelector("#scrollText4").style.opacity = opacity4;
})
