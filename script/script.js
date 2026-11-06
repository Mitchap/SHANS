// Loading animation script
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");

  if (!loader) return;

  const removeLoader = () => {
    loader.remove();
  };

  loader.addEventListener("transitionend", (event) => {
    if (
      event.target === loader &&
      event.propertyName === "opacity"
    ) {
      removeLoader();
    }
  });

  loader.classList.add("preloader--hidden");

  // Fallback in case the transition event never fires.
  setTimeout(removeLoader, 1000);
});

//end of loading animation script


// disable browser scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// force scroll to top after the page has fully rendered
window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });
});

//  reset before leaving the page
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});
    

// nav script
const desktopNav = document.getElementById("desktopNav");

if (desktopNav) {
  desktopNav.addEventListener("mouseenter", () => {
    if (window.scrollY > 50) {
      desktopNav.classList.add("bg-[#14041b]", "border-zinc-200");
      desktopNav.classList.remove("bg-white/10", "border-white/20");
    }
  });

  desktopNav.addEventListener("mouseleave", () => {
    if (window.scrollY > 50) {
      desktopNav.classList.add("bg-white/10", "border-white/20");
      desktopNav.classList.remove("bg-[#14041b]", "border-zinc-200");
    }
  });
}

// mobile nav scroll script
const mobileHeader = document.getElementById("mobileHeader");
const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.getElementById("hamburger");

let mobileMenuOpen = false;

function updateMobileHeader() {
  if (!mobileHeader) return;
  const isScrolled = window.scrollY > 20;

  mobileHeader.classList.remove(
    "bg-white/10",
    "backdrop-blur-md",
    "border-b",
    "border-white/10",
    "bg-[#14041b]/95"
  );

  if (mobileMenuOpen || isScrolled) {
    mobileHeader.classList.add(
      "bg-[#14041b]/95",
      "backdrop-blur-md",
      "border-b",
      "border-white/10"
    );
  }
}

function toggleMenu() {
  mobileMenuOpen = !mobileMenuOpen;

  const menu = document.getElementById("mobileMenu");
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  if (menu) {
    menu.classList.toggle("hidden", !mobileMenuOpen);
    menu.classList.toggle("flex", mobileMenuOpen);
  }

  if (bar1 && bar2 && bar3) {
    if (mobileMenuOpen) {
      bar1.classList.add("rotate-45", "translate-y-2");
      bar2.classList.add("opacity-0");
      bar3.classList.add("-rotate-45", "-translate-y-2");
    } else {
      bar1.classList.remove("rotate-45", "translate-y-2");
      bar2.classList.remove("opacity-0");
      bar3.classList.remove("-rotate-45", "-translate-y-2");
    }
  }

  if (hamburger) {
    hamburger.setAttribute("aria-expanded", String(mobileMenuOpen));
  }

  updateMobileHeader();
}

window.addEventListener("scroll", updateMobileHeader, { passive: true });
updateMobileHeader();


//scroller
const games = [
  {
    name: "Valorant Points",
    logo: "media/logos/valorant.png",
  },
  {
    name: "Mobile Legends: Bang Bang",
    logo: "media/logos/mlbb.png",
  },
  {
    name: "League of Legends: Riot Points",
    logo: "media/logos/league-of-legends.png",
  },
  {
    name: "Wild Rift: Wild Cores",
    logo: "media/logos/wild-rift.png",
  },
  {
    name: "Genshin Impact: Genesis Crystals",
    logo: "media/logos/genshin-impact.png",
  },
  {
    name: "Honkai: Star Rail: Oneiric Shards",
    logo: "media/logos/honkai-star-rail.png",
  },
  {
    name: "DNMC Cash Packs",
    logo: "media/logos/dragon-nest.png",
  },
  {
    name: "Zenless Zone Zero: Monochrome",
    logo: "media/logos/zenless-zone-zero.png",
  },
  {
    name: "Call of Duty: Mobile Points",
    logo: "media/logos/cod-mobile.png",
  },
  {
    name: "Undawn: Raven Coins",
    logo: "media/logos/undawn.png",
  },
  {
    name: "Teamfight Tactics Coins",
    logo: "media/logos/teamfight-tactics.png",
  },
  {
    name: "CrossFire E-Coins",
    logo: "media/logos/crossfire.png",
  },
  {
    name: "Legends of Runeterra Coins",
    logo: "media/logos/legends-of-runeterra.png",
  },
  {
    name: "MCGH Diamonds",
    logo: "media/logos/magic-chess.png",
  },
  {
    name: "Blood Strike Gold & Pass",
    logo: "media/logos/blood-strike.png",
  }
];

const gameList = document.getElementById("game-list");
const gameListClone = document.getElementById("game-list-clone");

function createGameLogo(game, isClone = false) {
  const link = document.createElement("a");

  link.className = "game-logo-link";
  link.title = game.name;

  if (isClone) {
    link.tabIndex = -1;
    link.setAttribute("aria-hidden", "true");
  } else {
    link.setAttribute("aria-label", `Browse ${game.name}`);
  }

  const image = document.createElement("img");

  image.className = "game-logo";
  image.src = game.logo;
  image.alt = isClone ? "" : game.name;
  image.loading = "lazy";
  image.draggable = false;

//   Hide missing images rather than displaying broken-image icons.
  image.addEventListener("error", () => {
    link.hidden = true;
  }, { once: true });

  link.appendChild(image);

  return link;
}

function populateGameList(container, isClone = false) {
  games.forEach((game) => {
    container.appendChild(createGameLogo(game, isClone));
  });
}

if (gameList) populateGameList(gameList);
if (gameListClone) populateGameList(gameListClone, true);
