function konami(){

    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var konamiCodePosition = 0;

    document.addEventListener('keydown', function(e){
        var key = e.keyCode;
        var requiredKey = konamiCode[konamiCodePosition];
        if(key == requiredKey){
            konamiCodePosition++;
            if (konamiCodePosition == konamiCode.length) {
                activateCheats();
                konamiCodePosition = 0;
            }
        }
        else{
        konamiCodePosition = 0;
        }
    })

    function activateCheats(){
        document.write('<link rel="stylesheet" href="style.css">')
    }
}