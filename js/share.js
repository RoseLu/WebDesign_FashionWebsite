$(document).ready(function() {
    setupSharedLink();
});

function setupSharedLink() {
    var links = $(".share-btn");
    var currentLocation = window.location.href;
    var facebook = "https://www.facebook.com/sharer/sharer.php?u=";
    
    for(i = 0; i < links.length; i++){
        $(links[i]).attr("href", facebook + currentLocation);
    }
}