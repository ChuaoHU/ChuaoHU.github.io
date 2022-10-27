const canvas = document.querySelector("canvas");
const secondsCount = document. querySelector(".seconds")
const context = canvas.getContext("2d");
const catDimensions = { witdth: 360, height: 335 };
const level = document.querySelector(".grade");



const startTime = Date.now()

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.translate(window.innerWidth / 2, window.innerHeight / 2);

const image = new Image();
image.src = "./assets/Cat.jpg";

const loopingCats = 40
const offsetDistance = 100
let currentOffset = 0

image.onload = () => {
 startlooping();
};

function draw(offset) {
  context.drawImage(
    image,
    -catDimensions.witdth / 2 - offset/2,
    -catDimensions.height / 2 - offset/2,
    catDimensions.witdth +offset,
    catDimensions.height +offset
  );
}


function loopDraw(){
    for(let i = loopingCats; i >= 1; i-- ) {//I made it like a cascading effect happened on the cat
        draw(i *offsetDistance + currentOffset)
    }

    draw(offsetDistance)

    currentOffset++
    if(currentOffset >=offsetDistance) {
        currentOffset = 0
    }

    const newTime = Math.floor((Date.now() - startTime) /1000)

    secondsCount.innerText = newTime

    requestAnimationFrame(loopDraw)
}

function startlooping() {
    requestAnimationFrame(loopDraw)

}