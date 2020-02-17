//main__rectangle

let recOne = anime({
  targets: '.main__rectangle',
  translateX: 300,
  rotate: 150,
  easing: 'easeInOutQuad',
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


//main__rectangle__2

let recTwo = anime({
  targets: '.main__rectangle__2',
  translateX: -600,
  translateY: 100,
  rotate: 300,
  easing: 'easeInOutQuad',
  autoplay: false
})

let r2 = document.getElementById('r2')
r2.onclick = recTwo.play

//main__rectangle__3

let recThree = anime({
  targets: '.main__rectangle__3',
  translateX: 200,
  translateY: -100,
  rotate: 120,
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuart',
  autoplay: false
})

let r3 = document.getElementById('r3')
r3.onclick = recThree.play


//main__circle

let cirOne = anime({
  targets: '.main__circle',
  easing: 'easeInOutQuart',
  autoplay: false
})

let prevTranslateX = 0
let funcCirOne = document.getElementById('c1')
funcCirOne.onclick = function() {
  anime({
    targets: '.main__circle',
    translateX: function() {
      return prevTranslateX + anime.random(-300, 300)
    },
    translateY: function() {
      return prevTranslateX + anime.random(-300, 300)
    },
    changeComplete: function(c1) {
      prevTranslateX = Number(c1.animations[0].currentValue.slice(0,-10))
    }
  })
}
