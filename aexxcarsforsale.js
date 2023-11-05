let sun = document.querySelector('#sun')

let main = document.querySelectorAll('.main-info')

let bigSection = document.querySelector('.bigsection')

const g = document.querySelectorAll('.g')

const g_2 = document.querySelectorAll('.g2')

const whitec = document.querySelectorAll('.white-card')

const whitec2 = document.querySelectorAll('.white-card2')

const texttitle = document.querySelector(".carsforsale");

const mytexts = document.querySelectorAll(".myarticles div a");

const mytitlesss = document.querySelectorAll(".myarticles div h1");

// whitec.forEach((w) => {
//     w.style.background = 'black'
// })

// whitec2.forEach((w1) => {
//     w1.style.background = 'black'
//     w1.style
// })

let count = 0;

sun.onclick = () => {

    if(count % 2 == 0) {
    whitec.forEach((w) => {
        w.style.background = 'white'
    })

    whitec2.forEach((w1) => {
        w1.style.background = 'white'
    })
    main.forEach((m) => {
        m.style.background = 'aliceblue'
    })
    g.forEach((gs) => {

        gs.style.color = 'black'

    })


    g_2.forEach((gj) => {
        gj.style.color = 'black'
    })

    texttitle.style.color = "white"

    mytexts.forEach((text) => {
        text.style.color = "white";
    })

    mytitlesss.forEach((title) => {
        title.style.color = "white";
    })


    } else {
        whitec.forEach((w) => {
            w.style.background = 'white'
        })
    
        whitec2.forEach((w1) => {
            w1.style.background = 'white'
        })
        main.forEach((m) => {
            m.style.background = 'black'
        })

        g.forEach((gs) => {

            gs.style.color = 'white'
    
        })
    
    
        g_2.forEach((gj) => {
            gj.style.color = 'white'
        })

        mytexts.forEach((text) => {
            text.style.color = "black";
        })

        mytitlesss.forEach((title) => {
            title.style.color = "black";
        })
    

        texttitle.style.color = "black";

    }

    count = count+1


    sun.classList.toggle('dude')

    bigSection.classList.toggle('active')

}





