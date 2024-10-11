console.log("Welcome to TuneScape");
let songIndex = 0;
let audioElement = new Audio(songs[songIndex].filepath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

// Define song data
let songs = [
  { songName: "Perfect", filepath: "song/1.mp3", coverPath: "covers/perfect.jpg" },
  { songName: "Senorita", filepath: "song/2.mp3", coverPath: "covers/senorita.jpg" },
  { songName: "A Thousand Years", filepath: "song/3.mp3", coverPath: "covers/athousandyears.jpg" },
  { songName: "Left and Right", filepath: "song/4.mp3", coverPath: "covers/leftandright.jpg" },
  { songName: "Love Story", filepath: "song/5.mp3", coverPath: "covers/lovestory.jpg" },
  { songName: "Night Changes", filepath: "song/6.mp3", coverPath: "covers/nightchanges.jpg" },
  { songName: "Peaches", filepath: "song/7.mp3", coverPath: "covers/peaches.jpg" },
  { songName: "Strip That Down", filepath: "song/8.mp3", coverPath: "covers/stripthatdown.jpg" },
  { songName: "Kiss Me", filepath: "song/9.mp3", coverPath: "covers/kissme.jpg" },
  { songName: "Friends", filepath: "song/10.mp3", coverPath: "covers/friends.jpg" },
];

// Function to play or pause the audio
function togglePlayPause() {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
  }
}

// Update progress bar as the audiconsole.log("Welcome to TuneScape");

let songIndex = 0;
let audioElement = new Audio('song/1.mp3'); // Starting with the first song
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');

// Song list with names, file paths, and cover images
let songs = [
  { songName: "Perfect", filepath: "song/1.mp3", coverPath: "covers/perfect.jpg" },
  { songName: "Senorita", filepath: "song/2.mp3", coverPath: "covers/senorita.jpg" },
  { songName: "A Thousand Years", filepath: "song/3.mp3", coverPath: "covers/athousandyears.jpg" },
  { songName: "Left and Right", filepath: "song/4.mp3", coverPath: "covers/leftandright.jpg" },
  { songName: "Love Story", filepath: "song/5.mp3", coverPath: "covers/lovestory.jpg" },
  { songName: "Night Changes", filepath: "song/6.mp3", coverPath: "covers/nightchanges.jpg" },
  { songName: "Peaches", filepath: "song/7.mp3", coverPath: "covers/peaches.jpg" },
  { songName: "Strip That Down", filepath: "song/8.mp3", coverPath: "covers/stripthatdown.jpg" },
  { songName: "Kiss Me", filepath: "song/9.mp3", coverPath: "covers/kissme.jpg" },
  { songName: "Friends", filepath: "song/10.mp3", coverPath: "covers/friends.jpg" },
];

// Play/pause toggle
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
});

// Update progress bar as audio plays
audioElement.addEventListener('timeupdate', () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

// Change song time based on progress bar
myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Move to the next song
document.querySelector(".fa-step-forward").addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  updateSong();
});

// Move to the previous song
document.querySelector(".fa-step-backward").addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  updateSong();
});

// Function to update and play the selected song
function updateSong() {
  audioElement.src = songs[songIndex].filepath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity = 1;
}

// Play selected song from the list
document.querySelectorAll('.songItem').forEach((element, index) => {
  element.addEventListener('click', () => {
    songIndex = index;
    updateSong();
  });
});
 plays
audioElement.addEventListener('timeupdate', () => {
  const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

// Seek audio when progress bar is changed
myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Play or pause audio on play button click
masterPlay.addEventListener('click', togglePlayPause);
