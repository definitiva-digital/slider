var slides = ["slide1", "slide2"]
var curSlide = 0
var maxSlide = slides.length
var slide = document.getElementById(slides[curSlide])
var prev = document.getElementById('prev')
var next = document.getElementById('next')
var slideTime = 3000

initSlider()
var timer = changeSlide()

prev.onclick = function () {
    changeByButtom(-1)
    clearInterval(timer)
    timer = changeSlide()
}

next.onclick = function () {
    changeByButtom(1)
    clearInterval(timer)
    timer = changeSlide()
}

function initSlider() {
    slide.classList.remove('slide-hide')
    slide.classList.add('slide-show')

}

function changeSlide() {
    return setInterval(() => {
        slide.classList.remove('slide-show')
        slide.classList.add('slide-hide')
        curSlide++
        if (curSlide >= maxSlide) {
            curSlide = 0
        }
        slide = document.getElementById(slides[curSlide])
        slide.classList.add('slide-show')
    }, slideTime)
}

function changeByButtom(buttom) {
    slide.classList.remove('slide-show')
    slide.classList.add('slide-hide')
    curSlide += buttom
    if (curSlide >= maxSlide) {
        curSlide = 0
    }
    if (curSlide < 0) {
        curSlide = 1
    }
    slide = document.getElementById(slides[curSlide])
    slide.classList.add('slide-show')
}