let menuIcon = document.querySelector('#menu-icon')

let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {

    menuIcon.classList.toggle('bxs-x-circle')

    navbar.classList.toggle('active');

}

let hiromoto = document.querySelector('.hiromoto')

let hiromoto1 = document.querySelector('.hiromoto1')

let janenbrown = document.querySelector('.janenbrown')

let janenbrown1 = document.querySelector('.janenbrown1')

let molvo = document.querySelector('.molvo')

let molvo1 = document.querySelector('.molvo1')

let toropo = document.querySelector('.toropo')

let toropo1 = document.querySelector('.toropo1')

hiromoto.addEventListener('click',() => {

    hiromoto1.style.display = 'block'

    janenbrown1.style.display = 'none'

    molvo1.style.display = 'none'

    toropo1.style.display = 'none'

    hiromoto.style.background = 'rgb(100, 196, 227)'

    janenbrown.style.background = 'aliceblue'

    molvo.style.background = 'aliceblue'

    toropo.style.background = 'aliceblue'

})

janenbrown.addEventListener('click',() => {

    hiromoto1.style.display = 'none'

    janenbrown1.style.display = 'block'

    molvo1.style.display = 'none'

    toropo1.style.display = 'none'

    janenbrown.style.background = 'rgb(100, 196, 227)'

    hiromoto.style.background = 'aliceblue'

    molvo.style.background = 'aliceblue'

    toropo.style.background = 'aliceblue'

})

molvo.addEventListener('click',() => {

    hiromoto1.style.display = 'none'

    janenbrown1.style.display = 'none'

    molvo1.style.display = 'block'

    toropo1.style.display = 'none'

    molvo.style.background = 'rgb(100, 196, 227)'

    hiromoto.style.background = 'aliceblue'

    janenbrown.style.background = 'aliceblue'

    toropo.style.background = 'aliceblue'


})

toropo.addEventListener('click',() => {

    hiromoto1.style.display = 'none'

    janenbrown1.style.display = 'none'

    molvo1.style.display = 'none'

    toropo1.style.display = 'block'

    toropo.style.background = 'rgb(100, 196, 227)'

    hiromoto.style.background = 'aliceblue'

    janenbrown.style.background = 'aliceblue'

    molvo.style.background = 'aliceblue'

})


let a = document.querySelector('#firs')

let b = document.querySelector('#secon')

let n1 = document.querySelector('.container3')

let n2 = document.querySelector('.container4')

let n3 = document.querySelector('.container5')

let n4 = document.querySelector('.container6')

let c = document.querySelector("#third");

let d = document.getElementById('fourth')


a.onclick = () => {

    // a.classList.toggle('bx-chevron-down')

    n1.classList.toggle('active')

}

b.onclick = () => {

    // b.classList.toggle('bx-chevron-down')

    n2.classList.toggle('active')

}

c.onclick = ()=> {

    // c.classList.toggle('bx-chevron-down')

    // console.log("Dog")

    n3.classList.toggle('active')

}

d.onclick = () => {

    // d.classList.toggle('bx-chevron-up')

    n3.classList.toggle('active')

}


let sun = document.querySelector('#sun')

let title = document.querySelector('.remarkab')

let section = document.querySelector('.fou')

sun.onclick = () => {

    sun.classList.toggle('dude')

    title.classList.toggle('active')

    section.classList.toggle('active')

}

let third = document.querySelector("#third")

let conta = document.querySelector('.container5')

third.onclick = () => {

    third.classList.toggle('bx-chevron-down')

    conta.classList.toggle('active')

}

let fourth = document.querySelector('#fourth')

let container66 = document.querySelector('.container6')

fourth.onclick = () => {

    fourth.classList.toggle('bx-chevron-down')

    container66.classList.toggle('active')

}

const scrollContainer = document.querySelector('.gallery')

const backButton = document.querySelector('#backbutton')

const forwardButton = document.querySelector('#forwardbutton')

scrollContainer.addEventListener('wheel', (evt) => {

    evt.preventDefault()

    scrollContainer.scrollLeft += evt.deltaY

    scrollContainer.style.scrollBehavior = 'auto'

})

forwardButton.addEventListener('click',() => {
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft += 1500
})

backButton.addEventListener('click',() => {
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 1500
})





