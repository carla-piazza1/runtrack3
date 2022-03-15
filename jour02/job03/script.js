document.addEventListener('DOMContentLoaded', (event) => {
    
    var str = document.getElementById('compteur')
    var btn = document.getElementById('button')
    var counterVal = 0

    function updateDisplay(val) {
        str.innerHTML = val;
    }

    btn.addEventListener('click', function addone(){

        str.style.display = 'block'
        updateDisplay(++counterVal);
    })

})