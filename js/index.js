// data
const data = [
    {
        name: "Chaar Kadam",
        artist:" Shaan and Shreya Ghoshal",
        img:"../img/song_001.jpg",
        music:"../music/chaar_kadam.mpeg"
        
    },
    {
        name: "Kuch Na Kahoo..",
        artist:" Sanam",
        img:"../img/song_002.jpg",
        music:"../music/Kuch_na_kaho.mpeg"
    },{
        name: "Retro Mashup",
        artist:"Rafi, lata...",
        img:"../img/song_3.jpg",
        music:"../music/retro_mashup.mpeg"
    },{
        name: "Love Story",
        artist:"Taylor Swift",
        img:"../img/song_4.jpg",
        music:"../music/love_story.mp4"
    },{
        name: "Ishq Risk",
        artist:"Rahat fateh ali khan",
        img:"../img/song_003.jpg",
        music:"../music/isq_risk.mpeg"
    },{
        name: "Chand Sifarish",
        artist:"Shaan",
        img:"../img/song_05.jpg",
        music:"../music/chand_sifarish.mpeg"
    },
]

const play = document.querySelector('[play]')
const pause = document.querySelector('[pause]')
let music = new Audio('../music/chaar_kadam.mpeg')
const img = document.querySelector('[main_image]')
const bodyy = document.body
const song_tittle = document.querySelector('[song_tittle]')
const forward = document.querySelector('[forward]')
const backward = document.querySelector('[backward]')
const artist_name = document.querySelector('[artist_name]')
let forward_count = 0
// let forward_count = 0




 play.addEventListener('click',  () =>{
    
    music.play()
    play.classList.toggle('active')
    pause.classList.toggle('active')
    img.style.animation = ` myOrbit 10s linear infinite`
    // let data = fetch('data.json').then()
})
pause.addEventListener('click',  () =>{
    music.pause()
    play.classList.toggle('active')
    pause.classList.toggle('active')
    img.style.animationPlayState = 'paused';
    // let data = fetch('data.json').then()
})


forward.addEventListener('click',  () =>{
       music.pause()
       song_tittle.innerText = `${data[(forward_count += 1) % data.length].name}`
       artist_name.innerText = `${data[(forward_count) % data.length].artist}`
       img.setAttribute("src", `${data[(forward_count) % data.length].img}`)
        bodyy.style.backgroundImage = `url(${data[(forward_count) % data.length].img})`
       music = new Audio (`${data[(forward_count) % data.length].music}`)
       if(pause.classList.contains('active')){
        pause.classList.toggle('active')
        play.classList.toggle('active')
       }
       music.play()

    })
backward.addEventListener('click',  () =>{
       music.pause()
       if(forward_count < 1){
        forward_count = data.length 
       }
       song_tittle.innerText = `${data[(forward_count -= 1) % data.length].name}`
       artist_name.innerText = `${data[(forward_count) % data.length].artist}`
       img.setAttribute("src", `${data[(forward_count) % data.length].img}`)
       bodyy.style.backgroundImage = `url(${data[(forward_count) % data.length].img})`
       music = new Audio (`${data[(forward_count) % data.length].music}`)
       if(pause.classList.contains('active')){
        pause.classList.toggle('active')
        play.classList.toggle('active')
       } 
       music.play()
    })



