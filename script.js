
document.getElementById('frmsearch').onsubmit = function() {
    query = document.getElementById('textSearch').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log("please enter your query");
        return false
    }
    else{
        window.location = 'search.html?q=' + query
        return false;

    }

}