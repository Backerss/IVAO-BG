$(document).ready(function(){

    //url decode from cookie _data
    var data = decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)_data\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
     //chang data to json
    var json = JSON.parse(data);


    $("#bg_name").text(json['bg_fristname'] + ' ' + json['bg_lastname']);
    $("#bg_vid").text(json['bg_vid']);




    //set src of img 
    
});