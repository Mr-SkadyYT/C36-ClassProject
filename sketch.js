var canvas,backgroundimg,playerCount;
var database, form, player, game;
var gameState = 0;
var allPlayers;

function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
}