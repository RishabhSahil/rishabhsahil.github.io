function wikipediasearch(){
    query = document.getElementById('textSearch').value;
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://wikipedia.org'
        return false;
    }
    else{
        window.location = 'https://en.wikipedia.org/wiki/' + query
        return false;

    }


}    

function wikipediasearchq(){
    query = document.getElementById('gsc-i-id1').value;
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://wikipedia.org'
        return false;
    }
    else{
        window.location = 'https://en.wikipedia.org/wiki/' + query
        return false;

    }
}    

function mapsearch(){
    query = document.getElementById('textSearch').value;
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://www.google.com/maps'
        return false;
    }
    else{
        window.location = 'https://www.google.com/maps/place/' + query
        return false;

    }
} 

function youtubesearch(){
    query = document.getElementById('textSearch').value;
    if(query==false){
        console.log("please enter your query");
        window.location = 'https://www.youtube.com'
        return false;
    }
    else{
        window.location = 'https://www.youtube.com/results?search_query=' + query
        return false;

    }
} 

function songm(){
    query = document.getElementById('textSearch').value;
    if(query==false){
            
        console.log("please enter your query");
        window.location = 'https://gaana.com/'
        return false;
    }
    else{
        window.location = 'https://gaana.com/search/' + query
        return false;

    }
} 


function mapsearchq(){
    query = document.getElementById('gsc-i-id1').value;
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://www.google.com/maps'
        return false;
    }
    else{
        window.location = 'https://www.google.com/maps/place/' + query
        return false;

    }
} 

function youtubesearchq(){
    query = document.getElementById('gsc-i-id1').value;
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://www.youtube.com'
        return false;
    }
    else{
        window.location = 'https://www.youtube.com/results?search_query=' + query
        return false;

    }
} 

function songmq(){
    query = document.getElementById('gsc-i-id1').value;
    if(query==false){
            
        console.log("please enter your query");
        window.location = 'https://gaana.com/'
        return false;
    }
    else{
        window.location = 'https://gaana.com/search/' + query
        return false;

    }
} 

document.getElementById('frmsearch').onsubmit = function() {
    query = document.getElementById('textSearch').value;
    if(query==false){
        
        console.log("please enter your query");
        return false
    }
    
    if("rishabh kon hai" in query){
        
        window.location = "https://linktr.ee/_rishabh_yaduvanshi_"
        return false
    }
 
     if("who is rishabh" in query){
        
        window.location = "https://linktr.ee/_rishabh_yaduvanshi_"
        return false
    }
     if("who are rishabh" in query){
        
        window.location = "https://linktr.ee/_rishabh_yaduvanshi_"
        return false
    }    
 
    }
     if("rishabh info" in query){
        
        window.location = "https://linktr.ee/_rishabh_yaduvanshi_"
        return false
    }     

    if("sahil kon hai" in query){
        
        window.location = "https://linktr.ee/_rishabh_yaduvanshi_"
        return false
    }
 
     if("who is sahil" in query){
        
        window.location = "https://linktr.ee/_rishabh_yaduvanshi_"
        return false
    }
     if("who are sahil" in query){
        
        window.location = "https://linktr.ee/_rishabh_yaduvanshi_"
        return false
    }    
 
    }
     if("sahil info" in query){
        
        window.location = "https://linktr.ee/_rishabh_yaduvanshi_"
        return false
    } 

    else{
        window.location = 'search?q=' + query
        return false;

    }

}
