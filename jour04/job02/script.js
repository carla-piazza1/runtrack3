document.addEventListener('DOMContentLoaded', (event) => {
    
    const strJSON = '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
    const obj = JSON.parse(strJSON);
    

    function jsonValueKey(strJSON, key) {
        console.log (obj[key])
    }
    jsonValueKey(strJSON, 'city')
})
