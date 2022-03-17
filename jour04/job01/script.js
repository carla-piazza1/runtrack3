document.addEventListener("DOMContentLoaded",() =>{

    let p = document.getElementById('p')
    let button = document.querySelector('button')

    document.addEventListener('click',function(){
        fetch('expression.txt')
        .then((response) => response.text())
        .then((response) => {
            console.log(response)
            p.innerHTML = response

        })
        .catch((error) => console.log(error))

    })

})