var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
var btnColor = $('.btn__click')
var color = $('.color')
var colorRandom = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

function start() {
    changeColor()
}
start()

function changeColor() {
    btnColor.addEventListener('click',function () {
        var hex = '#'
        for (let i = 0; i < 6; i++) {
            hex += colorRandom[randomColor()]
        }
        document.body.style.backgroundColor = hex
        color.innerHTML = hex
    })

}

function randomColor() {
    return Math.floor(Math.random() * colorRandom.length)
}