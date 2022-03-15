document.addEventListener("DOMContentLoaded",() =>{

    function citation(){
        const citation = document.getElementById("citation")
        console.log(citation.textContent)
    }

    const button = document.getElementById("button")
    button.addEventListener('click', citation())
     console.log(button)   
})