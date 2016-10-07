console.log('Loaded!');

//Counter increment by button
var objbutton = document.getElementById('btncounter');

objbutton.onclick = function () {
    // create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var currcounter = request.responseText();
                var updspan = document.getElementById('spancount');
                updspan.innerHTML = currcounter.toString();
            }
            
        }
    };
    
    request.open('GET', 'http://vavijay.imad.hasura-app.io/counter', true);
    request.send(null);
};
