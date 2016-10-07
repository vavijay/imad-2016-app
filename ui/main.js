//Counter increment by button
var objbutton = document.getElementById('btncounter');
var updspan = document.getElementById('spancount');

objbutton.onclick = function () {
    // create a request object
    var request = new XMLHttpRequest();
    //updspan.innerHTML = "Request created";
    // capture the response and store in a variable
    request.onreadystatechange = function(){
        //updspan.innerHTML = "State Changed";
        if (request.readyState === XMLHttpRequest.DONE){
            //updspan.innerHTML = "Request Done";
            //if (request.status === 200){
                var currcounter = request.responseText();
               
                updspan.innerHTML = currcounter.toString();
            //}
            //else{
            //     updspan.innerHTML = "-1";
            //}
            
        }
    };
    
    request.open('GET', 'http://vavijay.imad.hasura-app.io/counter', true);
    request.send(null);
};
