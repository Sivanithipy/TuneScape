console.log("welcome to TuneScape");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let songs=[
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
  {songName:"Perfect",filepath:"song/1.mp3",coverPath:"Covers/perfect.jpg"},
]
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
  audioElement.play();
  }
})
myprogressBar.addEventListener('timeupdate',()=>{
  console.log('timeupdate');

})