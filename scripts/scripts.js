/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
// const moodChoice = 
// document.getElementById('moodChoice').addEventListener('click',function (e)) {
//                                                        var img = document.createElement('img');
// img.setAttribute('src','https://cdn.pixabay.com/photo/2022/02/21/15/10/tea-7026981_1280.png');


// e.target.appendChild(img)

// function toggleCalm() {
//     document.getElementById("calmimg").style.visibility = document.getElementById("calmimg").style.visibility === "hidden" ? "visible" : "hidden";
//     }
// function toggleSleep() {
//         document.getElementById("sleep").style.visibility = document.getElementById("sleep").style.visibility === "hidden" ? "visible" : "hidden";
//         }

let pageNumber = 0;
let showContent = false;
const sleepButton = document.querySelector("#sleep");
const sickButton = document.querySelector("#sick");
const nervousButton = document.querySelector("#nervous");
const stressButton = document.querySelector("#stress");
const weightButton = document.querySelector("#weight");
const coldButton = document.querySelector("#cold");
const nauseousButton = document.querySelector("#nauseous");
const awakeButton = document.querySelector("#awake");
const calmButton = document.querySelector("#calm");

const pageZero = document.querySelector("#page-zero");
const pageOne = document.querySelector('#page-one');
const pageTwo = document.querySelector('#page-two');
const pageThree = document.querySelector('#page-three');
const pageFour = document.querySelector('#page-four');
const pageFive = document.querySelector('#page-five');
const pageSix = document.querySelector('#page-six');
const pageSeven = document.querySelector('#page-seven');
const pageEight = document.querySelector('#page-eight');

function updateContent() {
if (showContent) {
    if (pageNumber === 0) {
        pageZero.style.display = "flex";
        pageOne.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
        pageSix.style.display = "none";
        pageSeven.style.display = "none";
        pageEight.style.display = "none";
    } else if (pageNumber === 1) {
        pageZero.style.display = "none";
        pageOne.style.display = 'flex';
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
        pageSix.style.display = "none";
        pageSeven.style.display = "none";
        pageEight.style.display = "none";
    } else if (pageNumber === 2) {
        pageZero.style.display = "none";
        pageOne.style.display = "none";
        pageTwo.style.display = 'flex';
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
        pageSix.style.display = "none";
        pageSeven.style.display = "none";
        pageEight.style.display = "none";
    } else if (pageNumber === 3) {
        pageZero.style.display = "none";
        pageOne.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = 'flex';
        pageFour.style.display = "none";
        pageFive.style.display = "none";
        pageSix.style.display = "none";
        pageSeven.style.display = "none";
        pageEight.style.display = "none";
    } else if (pageNumber === 4) {
        pageZero.style.display = "none";
        pageOne.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = 'flex';
        pageFive.style.display = "none";
        pageSix.style.display = "none";
        pageSeven.style.display = "none";
        pageEight.style.display = "none";
    } else if (pageNumber === 5) {
        pageZero.style.display = "none";
        pageOne.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = 'flex';
        pageSix.style.display = "none";
        pageSeven.style.display = "none";
        pageEight.style.display = "none";
    } else if (pageNumber === 6) {
        pageZero.style.display = "none";
        pageOne.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
        pageSix.style.display = 'flex';
        pageSeven.style.display = "none";
        pageEight.style.display = "none";
    } else if (pageNumber === 7) {
        pageZero.style.display = "none";
        pageOne.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
        pageSix.style.display = "none";
        pageSeven.style.display = 'flex';
        pageEight.style.display = "none";
    } else if (pageNumber === 8) {
        pageZero.style.display = "none";
        pageOne.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
        pageSix.style.display = "none";
        pageSeven.style.display = "none";
        pageEight.style.display = 'flex';
    }
} 
}

function changePage(page) {
    pageNumber = page;
    showContent = true;
    updateContent();
    console.log(pageNumber)

}

updateContent();

sleepButton.addEventListener("click", function() {
    changePage(0);
})

sickButton.addEventListener("click", function() {
    changePage(1);
})

nervousButton.addEventListener("click", function() {
    changePage(2);
})

stressButton.addEventListener("click", function() {
    changePage(3);
})

weightButton.addEventListener("click", function() {
    changePage(4);
})

coldButton.addEventListener("click", function() {
    changePage(5);
})

nauseousButton.addEventListener("click", function() {
    changePage(6);
})

awakeButton.addEventListener("click", function() {
    changePage(7);
})

calmButton.addEventListener("click", function() {
    changePage(8);
})