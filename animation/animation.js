
var monster = $('#monster')
console.log(monster)
function show() {
    monster.fadeIn(1000)
}

function hide() {
    monster.fadeOut(1000)
}

function moveRight() {
    monster.animate({left: 500},300)
}

function moveLeft() {
    monster.animate({left: 500},300)
}

function moveUp() {
    monster.animate({top: 0},250)
}

function moveDown() {
    monster.animate({top: 500},300)
}

function moveSequence() {

}