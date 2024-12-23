// List of songs with file paths
let songs = [
  { songName: "Perfect", filePath: "mp3/1.mp3.mp3", coverPath: "perfect.jpg" },
  { songName: "Senorita", filePath: "mp3/2.mp3.mp3", coverPath: "senorita.jpg" },
  { songName: "A Thousand Years", filePath: "mp3/3.mp3.mp3", coverPath: "a thousand years.jpg" },
  { songName: "Left and Right", filePath: "mp3/4.mp3.mp3", coverPath: "left and right.jpg" },
  { songName: "Love Story", filePath: "mp3/5.mp3.mp3", coverPath: "love story.jpg" },
  { songName: "Night Changes", filePath: "mp3/6.mp3.mp3", coverPath: "night changes.jpg" },
  { songName: "Peaches", filePath: "mp3/7.mp3.mp3", coverPath: "peaches.jpg" },
  { songName: "Strip That Down", filePath: "mp3/8.mp3.mp3", coverPath: "strip that down.jpg" },
  { songName: "Kiss Me", filePath: "mp3/9.mp3.mp3", coverPath: "kiss me.jpg" },
  { songName: "Friends", filePath: "mp3/10.mp3.mp3", coverPath: "friends.jpg" }
];

let audioElement = new Audio(songs[0].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let currentSongIndex = 0;

// Load song details and set up event listeners for play buttons
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByTagName("span")[0].innerText = songs[i].songName;
  
  element.addEventListener('click', () => {
    playSong(i);
  });
});

// Play or pause the song when the main play button is clicked
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.display = 'block';
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.display = 'none';
  }
});

// Function to play the selected song
function playSong(index) {
  audioElement.src = songs[index].filePath;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.display = 'block';
  currentSongIndex = index;
}

// Update progress bar as song plays
audioElement.addEventListener('timeupdate', () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

// Seek functionality using progress bar
myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});





