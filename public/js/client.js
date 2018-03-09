/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/socket.io/index.d.ts" />

$(function() {
    console.log('client connected');

    var socket = io();

    $('form').submit(function() {
        console.log('button clicked!');
        return false;
    });

    $('body').css('background', 'red');
});
