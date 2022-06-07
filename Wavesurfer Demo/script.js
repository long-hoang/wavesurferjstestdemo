var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    plugins: [
        WaveSurfer.cursor.create({
            showTime: true,
            opacity: 1,
            customShowTimeStyle: {
                'background-color': '#000',
                color: '#fff',
                padding: '2px',
                'font-size': '10px'
            }
        })
    ]
});

var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var muteButton = document.getElementById('muteButton');
var resetButton = document.getElementById('resetButton');

wavesurfer.load('test.mp3');

wavesurfer.toggleInteraction(); // removes seek ability 
wavesurfer.setCursorColor('red');

playButton.addEventListener("click", function(){
    wavesurfer.play();
  });

pauseButton.addEventListener("click", function(){
    wavesurfer.pause();
  });

muteButton.addEventListener("click", function(){
    if(wavesurfer.getMute()===false){
        wavesurfer.setMute(true);
    } else {
        wavesurfer.setMute(false);
    }
    
  });  

resetButton.addEventListener("click", function(){
    wavesurfer.seekTo(0);
    wavesurfer.pause();
  });
