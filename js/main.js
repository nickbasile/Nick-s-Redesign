/*jslint browser: true*/
/*global $, jQuery, alert*/

jQuery(document).ready(function ($) {

    $("#bg-design").hide();
    $("#bg-code").hide();
    $("#bg-strategy").hide();
    $("#bg-name").hide();
    $("#bg-contact").hide();
    
    $("#design").hover(function () {
        $("#bg-design").fadeToggle(400);
    });
    
    $("#code").hover(function () {
        $("#bg-code").fadeToggle(400);
    });
    
    $("#strategy").hover(function () {
        $("#bg-strategy").fadeToggle(400);
    });
    
    $("#name-link").hover(function () {
        $("#bg-name").fadeToggle(400);
    });
    
    $("#contact-link").hover(function () {
        $("#bg-contact").fadeToggle(400);
    });

});