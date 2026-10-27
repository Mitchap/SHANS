/**
 * SHAN'S Trade 'N Game Credits - Top-Up Live Search & Filtering
 * Handles dynamic rendering, category filtering, and live multi-attribute search.
 */

const TOP_UP_DATA = {
  categories: [
    "MOBA & Strategy",
    "FPS & Shooter",
    "RPG & Adventure"
  ],
  games: [
    {
      id: "mlbb",
      name: "Mobile Legends",
      category: "MOBA & Strategy",
      currencies: ["Diamonds"],
      searchTerms: [
        "MLBB",
        "Mobile Legends Bang Bang",
        "diamonds",
        "weekly pass",
        "twilight pass"
      ],
      image: "media/mlbb-card.jpg"
    },
    {
      id: "league-of-legends",
      name: "League of Legends",
      category: "MOBA & Strategy",
      currencies: ["Riot Points"],
      searchTerms: [
        "LOL",
        "LoL",
        "RP",
        "Riot Points"
      ],
      image: "media/league-card.jpg"
    },
    {
      id: "wild-rift",
      name: "League of Legends: Wild Rift",
      category: "MOBA & Strategy",
      currencies: ["Wild Cores"],
      searchTerms: [
        "Wild Rift",
        "WR",
        "Wild Cores",
        "Wildcores"
      ],
      image: "media/wild-rift-card.jpg"
    },
    {
      id: "teamfight-tactics",
      name: "Teamfight Tactics",
      category: "MOBA & Strategy",
      currencies: ["Coins"],
      searchTerms: [
        "TFT",
        "Team Fight Tactics",
        "TFT Coins"
      ],
      image: "media/teamfight-card.jpg"
    },
    {
      id: "legends-of-runeterra",
      name: "Legends of Runeterra",
      category: "MOBA & Strategy",
      currencies: ["Coins"],
      searchTerms: [
        "LoR",
        "Runeterra",
        "Runeterra Coins"
      ],
      image: "media/runeterra.jpeg"
    },
    {
      id: "magic-chess-go-go",
      name: "Magic Chess: Go Go",
      category: "MOBA & Strategy",
      currencies: ["Diamonds"],
      searchTerms: [
        "MCGG",
        "Magic Chess",
        "Magic Chess Go Go",
        "diamonds"
      ],
      image: "media/magic-card.jpg"
    },
    {
      id: "valorant",
      name: "Valorant",
      category: "FPS & Shooter",
      currencies: ["Valorant Points"],
      searchTerms: [
        "VALORANT",
        "VP",
        "Valorant Points"
      ],
      image: "media/valorant-card.jpg"
    },
    {
      id: "cod-mobile",
      name: "Call of Duty: Mobile",
      category: "FPS & Shooter",
      currencies: ["Points"],
      searchTerms: [
        "CODM",
        "COD Mobile",
        "Call of Duty Mobile",
        "CP",
        "CODM Points"
      ],
      image: "media/codm-card.jpg"
    },
    {
      id: "crossfire",
      name: "CrossFire",
      category: "FPS & Shooter",
      currencies: ["E-Coins"],
      searchTerms: [
        "CF",
        "Crossfire",
        "ECoins",
        "E-Coins"
      ],
      image: "media/crossfire-card.jpg"
    },
    {
      id: "blood-strike",
      name: "Blood Strike",
      category: "FPS & Shooter",
      currencies: ["Gold"],
      searchTerms: [
        "Blood Strike Gold",
        "Gold",
        "Battle Pass"
      ],
      image: "media/blood-strike-card.jpg"
    },
    {
      id: "undawn",
      name: "Undawn",
      category: "FPS & Shooter",
      currencies: ["Raven Coins"],
      searchTerms: [
        "Raven Coins",
        "Undawn Raven Coins"
      ],
      image: "media/undawn-card.jpg"
    },
    {
      id: "genshin-impact",
      name: "Genshin Impact",
      category: "RPG & Adventure",
      currencies: [
        "Genesis Crystals",
        "Chronal Nexus"
      ],
      searchTerms: [
        "Genshin",
        "Genesis Crystals",
        "Chronal Nexus"
      ],
      image: "media/genshin-card.jpg"
    },
    {
      id: "honkai-star-rail",
      name: "Honkai: Star Rail",
      category: "RPG & Adventure",
      currencies: ["Oneiric Shards"],
      searchTerms: [
        "HSR",
        "Star Rail",
        "Honkai Star Rail",
        "Oneiric Shards"
      ],
      image: "media/honkai-card.jpg"
    },
    {
      id: "zenless-zone-zero",
      name: "Zenless Zone Zero",
      category: "RPG & Adventure",
      currencies: ["Monochrome"],
      searchTerms: [
        "ZZZ",
        "Zenless",
        "Monochrome",
        "Monochrome Film"
      ],
      image: "media/zenless-card.jpg"
    },
    {
      id: "dragon-nest",
      name: "Dragon Nest",
      category: "RPG & Adventure",
      currencies: ["DNMC Cash"],
      searchTerms: [
        "DN",
        "DNMC",
        "Dragon Nest Mobile",
        "DNMC Cash Pack"
      ],
      image: "media/dragon-nest-card.jpg"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const gamesContainer = document.getElementById("gamesContainer");
  const categoryFilters = document.getElementById("categoryFilters");
  const searchInput = document.getElementById("gameSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  if (!gamesContainer) return;

  let activeCategory = "all";
  let searchQuery = "";

  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getShortCategoryLabel(category) {
    if (category.startsWith("MOBA")) return "MOBA";
    if (category.startsWith("FPS")) return "FPS";
    if (category.startsWith("RPG")) return "RPG";
    return category;
  }

  function renderCategoryButtons() {
    if (!categoryFilters) return;

    const categories = ["all", ...TOP_UP_DATA.categories];
    categoryFilters.innerHTML = categories
      .map((cat) => {
        const isAll = cat === "all";
        const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
        const shortName = isAll ? "All" : getShortCategoryLabel(cat);
        const fullName = isAll ? "All" : cat;

        const activeClasses = "bg-purple-800 text-white font-medium shadow-md";
        const inactiveClasses = "bg-slate-700 text-neutral-200 hover:bg-slate-600";

        return `
          <button
            type="button"
            data-category="${escapeHtml(cat)}"
            class="category-filter-btn px-4 md:px-6 py-1.5 md:py-2 active:scale-95 transition-all text-sm md:text-[15px] rounded-full cursor-pointer whitespace-nowrap shrink-0 ${
              isActive ? activeClasses : inactiveClasses
            }"
            aria-pressed="${isActive}"
          >
            <span class="inline md:hidden">${escapeHtml(shortName)}</span>
            <span class="hidden md:inline">${escapeHtml(fullName)}</span>
          </button>
        `;
      })
      .join("");
  }

  function updateCategoryButtonStates() {
    if (!categoryFilters) return;
    const buttons = categoryFilters.querySelectorAll(".category-filter-btn");
    buttons.forEach((btn) => {
      const cat = btn.getAttribute("data-category");
      const isActive = activeCategory.toLowerCase() === (cat || "").toLowerCase();
      btn.setAttribute("aria-pressed", String(isActive));
      if (isActive) {
        btn.classList.add("bg-purple-800", "text-white", "font-medium", "shadow-md");
        btn.classList.remove("bg-slate-700", "text-neutral-200", "hover:bg-slate-600");
      } else {
        btn.classList.remove("bg-purple-800", "text-white", "font-medium", "shadow-md");
        btn.classList.add("bg-slate-700", "text-neutral-200", "hover:bg-slate-600");
      }
    });
  }

  function matchesSearch(game, query) {
    if (!query) return true;
    const q = query.toLowerCase();

    // Match name or id
    if (game.name.toLowerCase().includes(q)) return true;
    if (game.id.toLowerCase().includes(q)) return true;

    // Match category
    if (game.category.toLowerCase().includes(q)) return true;

    // Match currencies
    if (
      Array.isArray(game.currencies) &&
      game.currencies.some((curr) => curr.toLowerCase().includes(q))
    ) {
      return true;
    }

    // Match search terms
    if (
      Array.isArray(game.searchTerms) &&
      game.searchTerms.some((term) => term.toLowerCase().includes(q))
    ) {
      return true;
    }

    return false;
  }

  function renderGameCard(game) {
    const currenciesText = Array.isArray(game.currencies)
      ? game.currencies.join(", ")
      : "";

    return `
      <div 
        class="w-full min-w-0 bg-white rounded-lg md:rounded-2xl pb-2 md:pb-4 overflow-hidden border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group"
        data-id="${escapeHtml(game.id)}"
        data-category="${escapeHtml(game.category)}"
        tabindex="0"
        role="button"
        aria-label="Top up ${escapeHtml(game.name)}"
      >
        <div class="overflow-hidden rounded-b-[50%_12%] bg-slate-900">
          <img
            class="w-full h-20 md:h-40 lg:h-52 object-cover object-top transition duration-300 group-hover:scale-105"
            src="${escapeHtml(game.image)}"
            alt="${escapeHtml(game.name)}"
            loading="lazy"
          >
        </div>
        <div class="flex flex-col items-center px-1">
          <p class="font-medium text-[9px] md:text-sm text-center mt-2 md:mt-3 leading-tight text-neutral-900 line-clamp-1">
            ${escapeHtml(game.name)}
          </p>
          ${
            currenciesText
              ? `<p class="text-[8px] md:text-xs text-neutral-500 text-center mt-0.5 truncate max-w-full font-normal">
                  ${escapeHtml(currenciesText)}
                </p>`
              : ""
          }
        </div>
      </div>
    `;
  }

  function render() {
    const trimmedQuery = searchQuery.trim().toLowerCase();

    // Filter games by category and search query
    const targetCategories =
      activeCategory === "all"
        ? TOP_UP_DATA.categories
        : TOP_UP_DATA.categories.filter(
            (c) => c.toLowerCase() === activeCategory.toLowerCase()
          );

    let totalMatches = 0;
    const categorySectionsHtml = [];

    targetCategories.forEach((cat) => {
      const categoryGames = TOP_UP_DATA.games.filter(
        (game) =>
          game.category.toLowerCase() === cat.toLowerCase() &&
          matchesSearch(game, trimmedQuery)
      );

      if (categoryGames.length > 0) {
        totalMatches += categoryGames.length;
        const sectionId = getShortCategoryLabel(cat);

        categorySectionsHtml.push(`
          <section id="${escapeHtml(sectionId)}" class="w-full max-w-275 mx-auto px-4 md:px-0 mb-16 md:mb-20 animate__animated animate__fadeIn">
            <div class="flex items-center justify-between mb-5 md:mb-8">
              <h2 class="font-montserrat font-bold text-neutral-300 text-xl md:text-2xl tracking-wider">
                ${escapeHtml(cat)}
              </h2>
              <span class="text-xs md:text-sm text-neutral-400 font-medium bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60 shadow-xs">
                ${categoryGames.length} ${categoryGames.length === 1 ? "game" : "games"}
              </span>
            </div>

            <div class="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
              ${categoryGames.map(renderGameCard).join("")}
            </div>
          </section>
        `);
      }
    });

    // Check if empty
    if (totalMatches === 0) {
      const categoryNotice =
        activeCategory !== "all"
          ? ` in <span class="text-neutral-200 font-semibold">${escapeHtml(activeCategory)}</span>`
          : "";
      const searchNotice = trimmedQuery
        ? ` matching "<span class="text-yellow-400 font-medium">${escapeHtml(searchQuery.trim())}</span>"`
        : "";

      gamesContainer.innerHTML = `
        <div class="w-full max-w-275 mx-auto px-4 py-16 text-center animate__animated animate__fadeIn">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center text-slate-400 shadow-md">
            <i class="fa-solid fa-magnifying-glass text-2xl text-purple-400"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-neutral-200 mb-2">No games found</h3>
          <p class="text-neutral-400 text-sm md:text-base max-w-md mx-auto mb-6">
            We couldn't find any games${searchNotice}${categoryNotice}. Try searching with another game title, currency, or abbreviation.
          </p>
          <button
            id="resetSearchBtn"
            type="button"
            class="px-6 py-2.5 rounded-full text-sm md:text-base font-medium bg-purple-700 hover:bg-purple-600 text-white transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Reset search & filters
          </button>
        </div>
      `;
      return;
    }

    // Optional results header when searching
    let resultsHeaderHtml = "";
    if (trimmedQuery) {
      resultsHeaderHtml = `
        <div class="max-w-275 w-full mx-auto px-4 md:px-0 mb-6 flex items-center justify-between text-xs md:text-sm text-neutral-400 animate__animated animate__fadeIn">
          <span>
            Found <strong class="text-neutral-100">${totalMatches}</strong> ${
              totalMatches === 1 ? "game" : "games"
            } matching "<span class="text-yellow-400 font-medium">${escapeHtml(
              searchQuery.trim()
            )}</span>"${
              activeCategory !== "all"
                ? ` in <span class="text-neutral-200 font-medium">${escapeHtml(
                    activeCategory
                  )}</span>`
                : ""
            }
          </span>
          <button 
            id="clearSearchInlineBtn" 
            type="button" 
            class="text-purple-400 hover:text-purple-300 underline underline-offset-4 cursor-pointer text-xs"
          >
            Clear search
          </button>
        </div>
      `;
    }

    gamesContainer.innerHTML = resultsHeaderHtml + categorySectionsHtml.join("");
  }

  // Set up category button listeners
  if (categoryFilters) {
    categoryFilters.addEventListener("click", (e) => {
      const btn = e.target.closest(".category-filter-btn");
      if (!btn) return;
      const cat = btn.getAttribute("data-category");
      if (!cat || cat.toLowerCase() === activeCategory.toLowerCase()) return;
      activeCategory = cat;
      updateCategoryButtonStates();
      render();
    });
  }

  // Live search input listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle("hidden", searchQuery.length === 0);
      }
      render();
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        searchQuery = "";
        if (clearSearchBtn) clearSearchBtn.classList.add("hidden");
        render();
      }
    });
  }

  // Clear search button listener
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      searchQuery = "";
      clearSearchBtn.classList.add("hidden");
      render();
    });
  }

  // Event delegation for reset and inline clear buttons inside gamesContainer
  gamesContainer.addEventListener("click", (e) => {
    if (e.target.closest("#resetSearchBtn")) {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      activeCategory = "all";
      if (clearSearchBtn) clearSearchBtn.classList.add("hidden");
      updateCategoryButtonStates();
      render();
      if (searchInput) searchInput.focus();
    } else if (e.target.closest("#clearSearchInlineBtn")) {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      if (clearSearchBtn) clearSearchBtn.classList.add("hidden");
      render();
      if (searchInput) searchInput.focus();
    }
  });

  // Initial render
  renderCategoryButtons();
  render();
});
