
document.addEventListener('DOMContentLoaded', (event) => {

    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let btn = document.getElementById('filter')
    let select = document.querySelector('select')
    let ul = document.querySelector('ul')
    let typeList =[]


    fetch ('pokemon.json')
    .then((response) => response.json())
    .then((response) => {
        
        for (let i = 0; i < response.length ; i++ ){
            let typePokemon = response[i].type
            typeList.push(typePokemon.toString())
        }

        let newList = typeList.filter(function(ele , pos){
            return typeList.indexOf(ele) == pos;
        })
        console.log(newList)
        for (let i = 0; i < newList.length ; i++ ){
            let NewOpt = document.createElement('option')
            NewOpt.innerHTML = newList[i]
            select.append(NewOpt)
        }

                    //--Afficher les Pokemon--//

    //    // for (let i = 0; i < response.length ; i++ ){
    //         let NewOpt = document.createElement('li')
    //         NewOpt.innerHTML = newList[i]
    //         ul.append(NewOpt)
    //     }
    })
    .catch((error) => console.log(error))
})

    