let controller = new ScrollMagic.Controller()
//main__rectangle

let recOne = anime({
  targets: '.main__rectangle',
  translateX: 300,
  rotate: 150,
  easing: 'easeInOutQuad',
  duration: 3000,
  autoplay: false
})

let r1 = document.getElementById('r1')
r1.onclick = recOne.play



let prevTranslateXRecOne = 0
let funcRecOne = document.getElementById('r1')
funcRecOne.onclick = function() {
  anime({
    targets: '.main__rectangle',
    translateX: function() {
      return prevTranslateXRecOne + anime.random(-300, 300)
    },
    translateY: function() {
      return prevTranslateXRecOne + anime.random(-300, 300)
    },
    rotate: function () {
      return prevTranslateXRecOne + anime.random(0, 180)
    },
    changeComplete: function(r1) {
      prevTranslateXRecOne = Number(r1.animations[0].currentValue.slice(0,-10))
    }
  })
}

let box1Animation = anime({
  targets: '.main__rectangle',
  translateY: '-20vw',
  translateX: '-20vw',
  rotate: '200',
  scale: 2,
  easing: 'linear',
  offset: 300,
  autoplay: false
})
let mainSection = document.querySelector('#main-section')
new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: 'onLeave',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__rectangle')
.on('progress', e => {
  box1Animation.seek(box1Animation.duration * e.progress)
})


//main__rectangle__2

let recTwo = anime({
  targets: '.main__rectangle__2',
  translateX: 400,
  rotate: 200,
  autoplay: false,
  duration: 7000,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true
})

let r2 = document.getElementById('r2')
r2.onclick = recTwo.play


let boxAnimation = anime({
  targets: '.main__rectangle__2',
  translateY: '-20vw',
  translateX: '-20vw',
  rotate: '200',
  easing: 'linear',
  offset: 300,
  autoplay: false
})

new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: 'onLeave',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__rectangle__2')
.on('progress', e => {
  boxAnimation.seek(boxAnimation.duration * e.progress)
})

//main__rectangle__3

let recThree = anime({
  targets: '.main__rectangle__3',
  translateX: 200,
  translateY: -100,
  rotate: 190,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuart',
  autoplay: false
})

let r3 = document.getElementById('r3')
r3.onclick = recThree.play

let recAnimation = anime({
  targets: '.main__rectangle__3',
  translateY: '5vw',
  translateX: '-30vw',
  rotate: '180',
  easing: 'linear',
  autoplay: false
})

new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: 'onLeave',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__rectangle__3')
.on('progress', e => {
  recAnimation.seek(recAnimation.duration * e.progress)
})



//main__rectangle__4

let recFour = anime({
  targets: '.main__rectangle__4',
  translateY: 500,
  rotate: 360,
  direction: 'alternate',
  loop: true,
  duration: 10000,
  easing: 'steps(5)',
  autoplay: false
})

let r4 = document.getElementById('r4')
r4.onclick = recFour.play

let box4Animation = anime({
  targets: '.main__rectangle__4',
  translateY: '100%',
  translateX: '100%',
  rotate: '100',
  easing: 'linear',
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: 'onLeave',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__rectangle__2')
.on('progress', e => {
  box4Animation.seek(box4Animation.duration * e.progress)
})

//main__rectangle__5

let recFive = anime({
  targets: '.main__rectangle__5',
  rotate: 360,
  direction: 'alternate',
  loop: true,
  duration: 300,
  easing: 'easeInOutQuart',
  autoplay: false
})

let r5 = document.getElementById('r5')
r5.onclick = recFive.play

let box5Animation = anime({
  targets: '.main__rectangle__5',
  translateY: '30%',
  translateX: '30%',
  rotate: '100',
  easing: 'linear',
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: '0.2',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__rectangle__5')
.on('progress', e => {
  box5Animation.seek(box5Animation.duration * e.progress)
})

// main__rectangle__6

let prevTranslateX = 0
let recSix = document.getElementById('r6')
recSix.onclick = function() {
  anime({
    targets: '.main__rectangle__6',
    translateX: function() {
      return prevTranslateX + anime.random(-100, 100)
    },
    translateY: function() {
      return prevTranslateX + anime.random(-100, 100)
    },
    changeComplete: function(r6) {
      prevTranslateX = Number(r6.animations[0].currentValue.slice(0,-10))
    }
  })
}

let box6Animation = anime({
  targets: '.main__rectangle__6',
  translateY: '50vw',
  translateX: '40vw',
  rotate: '10',
  easing: 'linear',
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: 'onLeave',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__rectangle__4')
.on('progress', e => {
  box6Animation.seek(box6Animation.duration * e.progress)
})

//main__rectangle__7

let recSev = anime({
  targets: '.main__rectangle__7',
  rotate: 360,
  direction: 'alternate',
  loop: true,
  duration: 8000,
  easing: 'easeInOutQuart',
  autoplay: false,
  skew: 80,
  keyframes: [
  {translateY: -70},
  {translateX: -250},
  {translateY: -100},
  {translateX: -10},
  {translateY: 0}
],
})

let r7 = document.getElementById('r7')
r7.onclick = recSev.play


let box7Animation = anime({
  targets: '.main__rectangle__7',
  translateY: '-20vw',
  translateX: '-20vw',
  rotate: '40',
  scale: '4',
  easing: 'linear',
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: 'onLeave',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__rectangle__7')
.on('progress', e => {
  box7Animation.seek(box7Animation.duration * e.progress)
})


//main__rectangle__8

let recEigh = anime({
  targets: '.main__rectangle__8',
  rotate: 30,
  direction: 'alternate',
  loop: true,
  duration: 8000,
  easing: 'easeInOutQuart',
  autoplay: false,
  translateX: function() {
    return anime.random(0, 270);
  }
})

let r8 = document.getElementById('r8')
r8.onclick = recEigh.play

let box8Animation = anime({
  targets: '.main__rectangle__8',
  translateY: '-20vw',
  translateX: '20vw',
  rotate: '140',
  scale: '2',
  easing: 'linear',
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: 'onLeave',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__rectangle__8')
.on('progress', e => {
  box8Animation.seek(box8Animation.duration * e.progress)
})


//main__circle

let cirOne = anime({
  targets: '.main__circle',
  easing: 'easeInOutQuart',
  autoplay: false
})

let prevTransform = 0
let funcCirOne = document.getElementById('c1')
funcCirOne.onclick = function() {
  anime({
    targets: '.main__circle',
    translateX: function() {
      return prevTransform + anime.random(-300, 300)
    },
    translateY: function() {
      return prevTransform + anime.random(-300, 300)
    }
  })
}

let cirAnimation = anime({
  targets: '.main__circle',
  translateY: '35vw',
  translateX: '30vw',
  scale: 2,
  easing: 'linear',
  autoplay: false
})

new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: '0.1',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__circle')
.on('progress', e => {
  cirAnimation.seek(cirAnimation.duration * e.progress)
})

//main__circle__2

let cirTwo = anime({
  targets: '.main__circle__2',
  keyframes: [
    {translateY: -40},
    {translateX: -250},
    {translateY: -100},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  autoplay: false,
  loop: true
  })

let c2 = document.getElementById('c2')
c2.onclick = cirTwo.play


let cir2Animation = anime({
  targets: '.main__circle__2',
  translateY: '10vw',
  translateX: '10vw',
  scale: '2',
  easing: 'linear',
  offset: 50,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: mainSection,
  triggerHook: 'onLeave',
  duration: mainSection.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.main__circle__2')
.on('progress', e => {
  cir2Animation.seek(cir2Animation.duration * e.progress)
})
