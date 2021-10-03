document.getElementById('frmsearch').onsubmit = function() {
    window.location = 'search.html#gsc.tab=0&gsc.q='+  document.getElementById('textSearch').value;
    return false;		
}