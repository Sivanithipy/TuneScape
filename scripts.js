console.log("welcome to TuneScape");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/2.mp3",coverPath:"covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/3.mp3",coverPath:"covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/4.mp3",coverPath:"covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/5.mp3",coverPath:"covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/6.mp3",coverPath:"covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/7.mp3",coverPath:"covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/8.mp3",coverPath:"covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/9.mp3",coverPath:"covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/10.mp3",coverPath:"covers/perfect.jpg"},
]
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
  audioElement.play();
  masterPlay.classList.remove('fas fa-3x fa-play-circle');
  masterPlay.classList.add('fa-p-circle');
  gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fas fa-3x fa-play-circle');
    masterPlay.classList.add('fas fa-3x fa-play-circle');
    gif.style.opacity=0;
  }
})
myProgressBar.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  progress=parseInt((audioElement.currentTime/audioElement.duration))
  console.log(progress);
  myProgressBar.value=progress;
})