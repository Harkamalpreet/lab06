/// <reference path="objects/label.ts"/>
/**
 * FileName: app.js
 *
 * @author harkamalpreet kaur
 * @date August 5, 2016
 *
 * StudentID: 300871422
 *
 * @description This file is the main javascript file for the web site
 */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    var canvas;
    var stage;
    var helloLabel;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 6; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); 
        main();
    }
    function gameLoop() {
        helloLabel.rotation -= 5;
        stage.update(); 
    }
    function main() {
        helloLabel = new objects.Label("My Project", "90px Consolas", "#005500", 380, 160, true);
        stage.addChild(helloLabel);
    }
   
    window.addEventListener("load", init);
})();
//# sourceMappingURL=app.js.map