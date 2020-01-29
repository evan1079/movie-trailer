console.log('We are A-OK');

//Initialize Player (Plyr)

// https://cdnjs.cloudflare.com/ajax/libs/plyr/3.5.6/plyr.min.js

const player = new Plyr( '#player', {
  
    controls : ['play', 'current-time', 'progress'], 
    
    keyboard : {focused: true, global: true},
    
    seekTime : 30,
    
    autoplay : true
    
  });
  
  console.log( player );