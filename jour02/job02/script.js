document.addEventListener("DOMContentLoaded",() =>{
        
        var str = document.querySelector('article')
        var btn = document.getElementById('button')
        btn.addEventListener('click', function showhide(){
            if (str.style.display == 'block')
                str.style.display = 'none';
            else
                str.style.display = 'block';
        })
   
})