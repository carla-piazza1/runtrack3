document.addEventListener('DOMContentLoaded', (event) => {

    var textarea = document.getElementById ('keylogger')
    var record = ""
    
    document.addEventListener('keydown', logKey);

    function logKey(e) {
      
      console.log(e)
      record += e.key 
      textarea.textContent = record

    }
})


