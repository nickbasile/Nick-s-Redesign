/*jslint browser: true*/
/*global $, jQuery, alert*/

jQuery(document).ready(function ($) {
    
    $("#design").hover(function () {
        $("#bg-design").fadeToggle(500);
    });
    
    $("#code").hover(function () {
        $("#bg-code").fadeToggle(500);
    });
    
    $("#strategy").hover(function () {
        $("#bg-strategy").fadeToggle(500);
    });
    
    $("#name-link").hover(function () {
        $("#bg-name").fadeToggle(500);
    });
    
    $("#contact-link").hover(function () {
        $("#bg-contact").fadeToggle(500);
    });

});