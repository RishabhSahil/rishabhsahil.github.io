
document.getElementById('frmsearch').onsubmit = function() {
    window.location = 'search.html?q=' + document.getElementById('textSearch').value;
    query = document.getElementById('textSearch').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log(query)
    }
    else{
        window.location = 'search.html?q=' + query
        return false;

    }

}