function Audioplay(volume){  
    var _volume = 0;  
    function validVolume(volume){  
    if (volume>=0 && volume<=100){  
        _volume = volume;  
    }  
}  
    
validVolume(volume);  
    
    /*this.getVolume = function(){  
    return _volume;  
    }  
    this.setVolume = function(volume){  
    validVolume(volume);  
    }*/  
    
this.getSetVolume = function (volume){  
if (volume === undefined){  
    return _volume;  
} else validVolume(volume);  
    }  
}  
    
var audio = new Audioplay(3);  
console.log(audio.getSetVolume());  
audio.getSetVolume(5);  
console.log(audio.getSetVolume());  
audio.getSetVolume(99);  
console.log(audio.getSetVolume());