// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var labelScore;
var player;
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/jamesBond.gif");
    game.load.image("pipe", "assets/pipe_pink.png");
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    labelScore = game.add.text(20, 20, "0");

    var score = 42;

    // set the background colour of the scene
    game.stage.setBackgroundColor("#0066FF");
    game.add.text(200, 200, "Welcome To Keegan's Game",
    {font: "30px Arial", fill: "#000000"});
    player = game.add.sprite(10, 270, "playerImg");
    game.physics.arcade.enable(player);
    game.input.onDown.add(clickHandler);
    game.input
        .keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        .onDown.add(spaceHandler);
    }



    generatePipe();
    player.body.gravity.y = 50;

}

function generatePipe() {
    var gapStart = game.rnd.integerInRange(1, 5);
    for(var count = 0; count < 8; count = count + 1){
        if(count != gapStart && count != gapStart+1){
            addPipeBlock(600, count*50);
        }
    }
}

function addPipeBlock(x, y) {
    var block = game.add.sprite(x, y, "pipe");
    game.physics.arcade.enable(block);
    block.body.velocity.x = -100;
}

function clickHandler(event) {
    changescore()
    //alert (event.x + "100:200" + event.y);
}

function changescore(){
    score = score + 1;
    labelScore.setText(score.toString());
}
function spaceHandler(){
    //player.body.velocity.x = 100;
    player.body.velocity.y = -100;

}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    
}