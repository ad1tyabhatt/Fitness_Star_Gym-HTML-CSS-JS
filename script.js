// selecting classes

const popup = document.querySelector(".popup");
const button = document.querySelector(".join-btn");
const clsBtn = document.querySelector(".close-btn");
// const username = document.getElementById("username");
// const email = document.getElementById("userEmail");
const submitBtn = document.getElementById("s-btn");

// click event handler to select open class
button.addEventListener("click", () => {
  popup.classList.add("open");
  console.log("opened");
});

// click handler to remove the open class
clsBtn.addEventListener("click", (event) => {
  popup.classList.remove("open");
  event.preventDefault(); // to stop the search param
  console.log("closed");
});

// function res() {
//   console.log(`Welcome ${username.value} 🙌 you have successfully logged in with ${email}`);
// }
// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   res()
// });
submitBtn.addEventListener('click',(e)=>{
  e.window.localtion.href=form.data;
  console.log('asd')
})



const imgs = document.getElementById('imgs')

const img = document.querySelectorAll('#imgs img')
let idx = 0

// const stopButton = document.getElementById("img");

// function stopScrolling(){
//     img.length=0;
// }

function run() {
    idx++;
    if (idx > img.length) {
        idx = 0
    }
    imgs.style.transform = `translateX(${-idx *500}px)`
    setTimeout(run, 2000)
    console.log("ji")
}


run()
