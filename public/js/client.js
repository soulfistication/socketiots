/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/socket.io/index.d.ts" />

$(function() {
    console.log('client connected');

    var socket = io();

    $('form').submit(function() {
        var message = $('#m').val();
        console.log(message);
        
        return false;
    });

    $('body').css('background', 'red');
});
