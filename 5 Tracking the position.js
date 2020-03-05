

//Checkpoint 5 |  Tracking the position



function updatePosition(){
    var whereabouts = function(options) {
options = options || { white:[0,3],black:[7,3] };
if (options.white.join('') === options.black.join('')) { throw ('Queens cannot share the same space'); }
this.white = options.white;
this.black = options.black;
};

whereabouts.prototype.toString = function() {
var board = '';
for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
        if (this.white[0] === x && this.white[1] === y) {
            board += 'W';
        } else if (this.black[0] === x && this.black[1] === y) {
            board += 'B';
        } else {
            board += '_';
        }
        board += ' ';
    }
    board = board.trim() + '\n';
}
return board;
};

whereabouts.prototype.canAttack = function() {
var dx = Math.abs(this.white[0] - this.black[0]);
var dy = Math.abs(this.white[1] - this.black[1]);

var min = Math.min(dx, dy);
var max = Math.max(dx, dy);

var diagonalSteps = min;
var straightSteps = max - min;

if ((diagonalSteps === 0 && straightSteps !== 0) || (diagonalSteps !== 0 && straightSteps === 0) ) { return true; }
return false;
}
    }

module.exports = whereabouts;