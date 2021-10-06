document.getElementById('frmsearch').onsubmit = function() {
    window.location = 'search.html?q=' + document.getElementById('textSearch').value;
    return false;
}