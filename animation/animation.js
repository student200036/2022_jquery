
var monster = $('#monster')
console.log(monster)
function show() {
    monster.fadeIn(1000)
}

function hide() {
    monster.fadeOut(1000)
}

function moveRight() {
    monster.animate({left: 300},30)
}

function moveLeft() {
    monster.animate({left: 0},30)
}

function moveUp() {
    monster.animate({top: 0},30)
}

function moveDown() {
    monster.animate({top: 500},30)
}

function moveSequence() {
    const duration = 30

    monster
    .animate({left: 300},duration)
    .animate({top: 500},duration)
    .animate({left: 0},duration)
    .animate({top: 500},duration)
    .animate({top: 0},duration)
    .animate({left: 0},duration)
    .animate({top: 0},duration)

}