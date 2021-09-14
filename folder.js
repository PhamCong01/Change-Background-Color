var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
var btnColor = $('.btn__click')
var color = $('.color')
var colors = ['green','red','rgba(133,122,200)','#f1f5025','rgb(23, 218, 212)','rgb(23, 91, 218)',
'rgb(218, 23, 201)','rgb(218, 23, 89)'
]

function start() {
    getColor()
    randomColor()
}
start()

function getColor() {
    btnColor.addEventListener('click',function () {
        var randomNumber = randomColor()
        document.body.style.backgroundColor = colors[randomNumber]
        color.innerHTML = colors[randomNumber]
    })
}

function randomColor() {
    return  Math.floor(Math.random() * colors.length);
}