const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const audioMenu = document.querySelector("#audio-page");
  const videoMenu = document.querySelector("#video-page");
  const contactMenu = document.querySelector("#contact-page");
  let scrollPos = window.scrollY;

  //adds highlight class to my menu items

  if (window.innerWidth > 900 && scrollPos < 900) {
    homeMenu.classList.add("highlight");
    audioMenu.classList.remove("highlight");
    // videoMenu.classList.remove("highlight");
    // contactMenu.classList.remove("highlight");
  } else if (window.innerWidth > 900 && scrollPos < 2900 && scrollPos > 900) {
    audioMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    videoMenu.classList.remove("highlight");
    // contactMenu.remove("highlight");
  } else if (window.innerWidth > 900 && scrollPos > 2900 && scrollPos < 3900) {
    videoMenu.classList.add("highlight");
    audioMenu.classList.remove("highlight");
    contactMenu.classList.remove("highlight");
    // homeMenu.classList.remove("highlight");
  } else if (window.innerWidth > 900 && scrollPos > 3900) {
    contactMenu.classList.add("highlight");
    // audioMenu.classList.remove("highlight");
    videoMenu.classList.remove("highlight");
    // homeMenu.classList.remove("highlight");
  }
  if (elem && window.innerWidth < 900) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

const homeLink = document.querySelector("#home-page");
const audioLink = document.querySelector("#audio-page");
const videoLink = document.querySelector("#video-page");
const contactLink = document.querySelector("#contact-page");

let audioPoint, videoPoint, contactPoimport;

if (window.innerWidth > 900) {
  audioPoint = 950;
  videoPoint = 2950;
  contactPoint = 4300;
}

if (window.innerWidth < 900 && window.innerWidth > 811) {
  audioPoint = 900;
  videoPoint = 2550;
  contactPoint = 3900;
}

if (window.innerWidth < 811 && window.innerWidth > 753) {
  audioPoint = 850;
  videoPoint = 2050;
  contactPoint = 3375;
}

if (window.innerWidth < 753 && window.innerWidth > 603) {
  audioPoint = 850;
  videoPoint = 2350;
  contactPoint = 3725;
}

if (window.innerWidth < 603 && window.innerWidth > 500) {
  audioPoint = 700;
  videoPoint = 3500;
  contactPoint = 4625;
}

if (window.innerWidth < 500) {
  audioPoint = 700;
  videoPoint = 3550;
  contactPoint = 4675;
}

const scrollHome = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
const scrollAudio = () => {
  window.scroll({
    top: audioPoint,
    left: 0,
    behavior: "smooth",
  });
};
const scrollVideo = () => {
  window.scroll({
    top: videoPoint,
    left: 0,
    behavior: "smooth",
  });
};
const scrollContact = () => {
  window.scroll({
    top: contactPoint,
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
