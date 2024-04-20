var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

// sound to play
var sound1 = new Howl(
    {src: ['/QinyueYu.github.io/audio/audio1.mp3'],
    volume: 0.5,
    loop: true,
    autoplay: false,
    onend: function()
    {console.log('Finished!');}}
);
// button1
button1.addEventListener("click", playSound);
function playSound()
{
    sound1.play();
}

// button2
button2.addEventListener("click", togglePlayPause);

function togglePlayPause()
{
    if (sound1.playing()) {
        sound1.pause();
    } else {
        sound1.play();
    }
};

//musicPlayer
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const track = document.getElementById('track');
const duration = document.getElementById('duration');
const timer = document.getElementById('timer');
// Buttons defined above

var Player = function(playlist)
{
    this.playlist = playlist;
    this.index = 0;

    track.innerHTML = '1. ' + playlist[0].title;

    playlist.forEach(function(song)
    {
        var div = document.createElement('div');
        div.className = 'list-song';
        div.innerHTML = song.title;
        div.onclick = function()
        {
            player.skipTo(playlist.indexOf(song));
        };
        list.appendChild(div);
        
    });
};

Player.prototype =
{
    play: function(index)
    {
        var self = this;
        var sound;

        index = typeof index === 'number' ? index : self.index;
        var data = self.playlist[index];

        if (data.howl)
        {
            sound = data.howl;
        }
        else
        {
            sound = data.howl =  new Howl
            ({
                src: ['/QinyueYu.github.io/audio/' + data.file + '.mp3'],
                html5: true,
                onplay: function(){
                    duration.innerHTML = self.formatTime(Math.round(sound.duration()));
                    requestAnimationFrame(self.step.bind(self));
                }
            });

        }
        sound.play();
        track.innerHTML = (index +1) + '. ' + data.title;

        if (sound.state() === 'loaded')
        {
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'block';
        }
        self.index = index;
    },
    
    pause: function() {
        var self = this;
        var sound = self.playlist[self.index].howl;
        sound.pause();
        
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    },

    skip: function(direction)
    {
        var self = this;
        var index = 0;

        if (direction === 'prev') {
            index =  self.index - 1;
            if (index < 0) {
                index = self.playlist.length - 1;
            }
        } else {
            index = self.index + 1;
            if (index >= self.playlist.length) {
                index = 0;
            }
        }
        self.skipTo(index);
    },

    skipTo: function(index) {
        var self = this;

        if (self.playlist[self.index].howl) {
            self.playlist[self.index].howl.stop();
        }
        self.play(index);
    },

    step: function() {
        var self = this;
        var sound = self.playlist[self.index].howl;

        var seek = sound.seek() || 0;
        timer.innerHTML = self.formatTime(Math.round(seek));

        if (sound.playing()) {
            requestAnimationFrame(self.step.bind(self));
        }
    },
    formatTime: function(secs) {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;

        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    

};


document.addEventListener('DOMContentLoaded', function() {
    var playBtn = document.getElementById('playBtn');
    var pauseBtn = document.getElementById('pauseBtn');
    var player = new Player([
        { title: 'Rachmaninoff', file: 'audio1', howl: null },
        { title: 'Tchaikovsky - Nutcracker Suite', file: 'audio2', howl: null },
        { title: 'Tchaikovsky - Dance of the Sugar Plum Fairy', file: 'audio3', howl: null }
    ]);
  
    playBtn.addEventListener('click', function() {
      playBtn.style.display = 'none';   
      pauseBtn.style.display = 'block'; 
      player.play();
      
    });
  
    pauseBtn.addEventListener('click', function() {
      pauseBtn.style.display = 'none';  
      playBtn.style.display = 'block';  
      player.pause();
     
    });
    prevBtn.addEventListener('click', function(){ player.skip('prev'); });
    nextBtn.addEventListener('click', function() { player.skip('next'); });
  });
  

    


