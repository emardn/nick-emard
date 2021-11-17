const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const audioMenu = document.querySelector("#audio-page");
  const videoMenu = document.querySelector("#video-page");
  const contactMenu = document.querySelector("#contact-page");
  let scrollPos = window.scrollY;

  //adds highlight class to my menu items

  if (window.innerWidth > 960 && scrollPos < 900) {
    homeMenu.classList.add("highlight");
    audioMenu.classList.remove("highlight");
    // videoMenu.classList.remove("highlight");
    // contactMenu.classList.remove("highlight");
    ;
  } else if (window.innerWidth > 960 && scrollPos < 3000 && scrollPos > 900) {
    audioMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    videoMenu.classList.remove("highlight");
    // contactMenu.remove("highlight");
    ;
  } else if (window.innerWidth > 960 && scrollPos > 2945 && scrollPos < 4500) {
    videoMenu.classList.add("highlight");
    audioMenu.classList.remove("highlight");
    contactMenu.classList.remove("highlight");
    // homeMenu.classList.remove("highlight");
    ;
  } else if (window.innerWidth > 960 && scrollPos > 4500) {
    contactMenu.classList.add("highlight");
    // audioMenu.classList.remove("highlight");
    videoMenu.classList.remove("highlight");
    // homeMenu.classList.remove("highlight");
    ;
  }
  if ((elem && wubdiw.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

const homeLink = document.querySelector("#home-page");
const audioLink = document.querySelector("#audio-page");
const videoLink = document.querySelector("#video-page");
const contactLink = document.querySelector("#contact-page");

const scrollHome = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
const scrollAudio = () => {
  window.scroll({
    top: 1000,
    left: 0,
    behavior: "smooth",
  });
};
const scrollVideo = () => {
  window.scroll({
    top: 3150,
    left: 0,
    behavior: "smooth",
  });
};
const scrollContact = () => {
  window.scroll({
    top: 4600,
    left: 0,
    behavior: "smooth",
  });
};

homeLink.addEventListener("click", scrollHome);
audioLink.addEventListener("click", scrollAudio);
videoLink.addEventListener("click", scrollVideo);
contactLink.addEventListener("click", scrollContact);

const audioPlayer = document.querySelector(".audio-player");
const iframe = document.querySelector("#iframe");
const cavurn = document.querySelector("#cavurn");
const dogMountain = document.querySelector("#dog-mountain");
const shadow = document.querySelector("#shadow-of-the-season");
const breadPilot = document.querySelector("#bread-pilot");
const painboys = document.querySelector("#painboys");
const bullets1 = document.querySelector("#bullets-1");
const bullets2 = document.querySelector("#bullets-2");
const degraved = document.querySelector("#degraved");

// document.addEventListener(
//   "play",
//   function (e) {
//     // Collect all <audio> elements in the page:
//     var allAudios = document.getElementsByTagName("audio");
//     // Iterate through all players and pause them, except for
//     // the one who fired the "play" event ("target")
//     for (var i = 0; i < allAudios.length; i++) {
//       if (allAudios[i] != e.target) {
//         allAudios[i].pause();
//       }
//     }
//   },
//   true
// );
