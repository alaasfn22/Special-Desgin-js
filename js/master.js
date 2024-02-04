let landing = document.querySelector(".landing")
let links = document.querySelectorAll(".navbar .nav-item .nav-link")
let activeLinks = document.querySelector(".navbar .nav-item .active");
let boxColors = document.querySelectorAll(".colors-list li")
let check = document.querySelectorAll(".Random-list .btn")
let arrayImg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
let backOption;
let bgInterval;

// console.log(check);
// setting Menu
document.querySelector(".fa-cog").onclick = function () {
  this.classList.toggle("fa-spin")
  document.querySelector(".setting-menu").classList.toggle("open")
}
//start random background
if (window.localStorage.getItem("randomImg")) {
  check.forEach((ele) => {
    ele.classList.remove("active")
  })
  document.querySelector(`[data-tog="${window.localStorage.getItem("randomImg")}`).classList.add("active");
  backOption = window.localStorage.getItem("randomImg");
}
check.forEach((li) => {
  li.addEventListener("click", (e) => {
    check.forEach((ele) => {
      ele.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
    window.localStorage.setItem("randomImg", e.target.dataset.tog);
    if (window.localStorage.getItem("randomImg") === "yes") {
      backOption = "yes"
      randomizBackgroun()
    } else {
      clearInterval(bgInterval)
    }
  })
})
function randomizBackgroun() {
  if (backOption === "yes") {
    bgInterval = setInterval(() => {
      let randomImage = [Math.floor(Math.random() * arrayImg.length)]
      landing.style.backgroundImage = 'url("imgs/' + arrayImg[randomImage] + '")'
    }, 3000);
  }
}
randomizBackgroun()
///////////////////////
///////////add active link
links.forEach((lis) => {
  lis.addEventListener("click", (e) => {
    links.forEach((ele) => {
      ele.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  })
})
//////////boxColors
if (window.localStorage.getItem("colors")) {
  boxColors.forEach((ele) => {
    ele.classList.remove("active")
  })
  document.documentElement.style.setProperty('--main-color', window.localStorage.getItem("colors"));
  document.querySelector(`[data-color="${window.localStorage.getItem("colors")}"]`).classList.add("active")
}
boxColors.forEach((li) => {
  li.addEventListener("click", (e) => {
    boxColors.forEach((ele) => {
      ele.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
    window.localStorage.setItem("colors", e.target.dataset.color);
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color)

  })
})

/////////////////////progress
let section = document.querySelector(".skills")
let spans = document.querySelectorAll(".box-progress .prog span")
// console.log(spans);
window.onscroll = function () {
  if (window.scrollY = section.offsetTop) {
    spans.forEach((e) => {
      e.style.width = e.dataset.width;
    })
  }
}

/////////create popupe image

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(e => {
  e.addEventListener("click", () => {
    // create overlay
    let overlay = document.createElement("div");
    overlay.className = "overlay"
    document.body.appendChild(overlay)
    // create poupe Box
    let popup_Box = document.createElement("div");
    popup_Box.className = "popup_Box"
    // craete header
    if (e.alt != null) {
      let header = document.createElement("h3")
      let imgAlt = document.createTextNode(e.alt)
      header.appendChild(imgAlt)
      popup_Box.appendChild(header)
    }
    // create poupe image
    let popup_Image = document.createElement("img");
    popup_Image.src = e.src
    popup_Box.appendChild(popup_Image)
    document.body.appendChild(popup_Box)
    // creat button close
    let buttonClose = document.createElement("span")
    buttonClose.className = "buttonClose"
    let closeText = document.createTextNode("x")
    buttonClose.appendChild(closeText)
    popup_Box.appendChild(buttonClose)


  })
})

document.addEventListener("click", (e) => {
  if (e.target.className == "buttonClose") {
    // e.target.parentNode.remove();
    document.querySelector(".popup_Box").remove()
    document.querySelector(".overlay").remove();
  }
})



