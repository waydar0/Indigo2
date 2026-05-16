    const games = [
        {
            title: "Outer Wilds",
            description_short: "Космическое приключение с исследованием и временными петлями.",
            genres: ["Adventure", "Exploration", "Mystery", "Time Loop"],
            platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
            release_year: 2019,
            rating: 10,
            review_text: "Шедевр, который можно пройти только один раз.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        },
        {
            title: "Hollow Knight",
            description_short: "Атмосферный метроидвания-платформер.",
            genres: ["Metroidvania", "Action", "Platformer", "Dark Fantasy"],
            platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
            release_year: 2017,
            rating: 9,
            review_text: "Один из лучших метроидваний за последние годы.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        },
        {
            title: "Disco Elysium",
            description_short: "Глубокая RPG без боёв.",
            genres: ["RPG", "Detective", "Narrative-Driven", "Philosophical"],
            platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
            release_year: 2019,
            rating: 10,
            review_text: "Текстовая RPG, после которой другие игры кажутся пустыми.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        },
        {
            title: "Inscryption",
            description_short: "Карточная игра с элементами хоррора.",
            genres: ["Card Game", "Roguelike", "Horror", "Puzzle"],
            platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
            release_year: 2021,
            rating: 9,
            review_text: "Не просто карточная игра, а мета-хоррор.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        },
        {
            title: "Cult of the Lamb",
            description_short: "Экшен-рогалик про управление культом.",
            genres: ["Roguelite", "Action", "Base Building", "Simulation"],
            platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
            release_year: 2022,
            rating: 8,
            review_text: "Смесь Animal Crossing и мрачного культа.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        },
        {
            title: "Animal Well",
            description_short: "Стильный пиксельный платформер-головоломка.",
            genres: ["Puzzle", "Platformer", "Exploration", "Pixel Art"],
            platforms: ["PC", "PlayStation", "Nintendo Switch"],
            release_year: 2024,
            rating: 9,
            review_text: "Одна из самых умных головоломок.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        },
        {
            title: "Nine Sols",
            description_short: "Экшен в стиле «тао-панк».",
            genres: ["Action", "Metroidvania", "Parry-based Combat"],
            platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
            release_year: 2024,
            rating: 9,
            review_text: "Если любите парировать — это ваш кандидат.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        },
        {
            title: "Dome Keeper",
            description_short: "Шахтерский рогалик.",
            genres: ["Roguelite", "Mining", "Tower Defense"],
            platforms: ["PC", "Nintendo Switch", "Mobile"],
            release_year: 2022,
            rating: 8,
            review_text: "Идеальная 'ещё одна партия' игра.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        },
        {
            title: "The Case of the Golden Idol",
            description_short: "Детектив в духе Return of the Obra Dinn.",
            genres: ["Detective", "Puzzle", "Point-and-Click"],
            platforms: ["PC", "Nintendo Switch", "Mobile"],
            release_year: 2022,
            rating: 9,
            review_text: "Лучший детектив со времен Obra Dinn.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        },
        {
            title: "Deadlink",
            description_short: "Быстрый киберпанк-шутер.",
            genres: ["FPS", "Roguelite", "Cyberpunk"],
            platforms: ["PC", "PlayStation", "Xbox"],
            release_year: 2023,
            rating: 8,
            review_text: "DOOM в киберпанке.",
            review_author: "Skill Up",
            store_links: { steam: "#" }
        }
    ];

    // ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
    function getUniqueGenres() {
        const allGenres = games.flatMap(game => game.genres);
        return [...new Set(allGenres)].sort();
    }

    function getUniquePlatforms() {
        const allPlatforms = games.flatMap(game => game.platforms);
        return [...new Set(allPlatforms)].sort();
    }

    // ========== ЗАПОЛНЕНИЕ ФИЛЬТРОВ ==========
    function populateFilters() {
        const genres = getUniqueGenres();
        const platforms = getUniquePlatforms();
       
        const genreDesktop = document.getElementById('genreFilterDesktop');
        const platformDesktop = document.getElementById('platformFilterDesktop');
       
        if (genreDesktop) {
            genreDesktop.innerHTML = '<option value="all">Все жанры</option>';
            genres.forEach(g => genreDesktop.innerHTML += `<option value="${g}">${g}</option>`);
        }
        if (platformDesktop) {
            platformDesktop.innerHTML = '<option value="all">Все платформы</option>';
            platforms.forEach(p => platformDesktop.innerHTML += `<option value="${p}">${p}</option>`);
        }
       
        const genreMobile = document.getElementById('genreFilterMobile');
        const platformMobile = document.getElementById('platformFilterMobile');
       
        if (genreMobile) {
            genreMobile.innerHTML = '<option value="all">Все жанры</option>';
            genres.forEach(g => genreMobile.innerHTML += `<option value="${g}">${g}</option>`);
        }
        if (platformMobile) {
            platformMobile.innerHTML = '<option value="all">Все платформы</option>';
            platforms.forEach(p => platformMobile.innerHTML += `<option value="${p}">${p}</option>`);
        }
       
        document.getElementById('totalGamesCount').textContent = games.length;
        document.getElementById('totalGenresCount').textContent = genres.length;
        document.getElementById('totalPlatformsCount').textContent = platforms.length;
    }

    // ========== ПОЛУЧЕНИЕ ЗНАЧЕНИЙ ФИЛЬТРОВ ==========
    function getFilterValues() {
        if (window.innerWidth > 768) {
            return {
                genre: document.getElementById('genreFilterDesktop')?.value || 'all',
                platform: document.getElementById('platformFilterDesktop')?.value || 'all',
                rating: parseInt(document.getElementById('ratingFilterDesktop')?.value || '0')
            };
        } else {
            return {
                genre: document.getElementById('genreFilterMobile')?.value || 'all',
                platform: document.getElementById('platformFilterMobile')?.value || 'all',
                rating: parseInt(document.getElementById('ratingFilterMobile')?.value || '0')
            };
        }
    }

    // ========== ФИЛЬТРАЦИЯ ==========
    function filterGames() {
        const { genre, platform, rating } = getFilterValues();
        let filtered = [...games];
       
        if (genre !== 'all') filtered = filtered.filter(game => game.genres.includes(genre));
        if (platform !== 'all') filtered = filtered.filter(game => game.platforms.includes(platform));
        if (rating > 0) filtered = filtered.filter(game => game.rating >= rating);
       
        return filtered;
    }

    // ========== ОБНОВЛЕНИЕ СЧЁТЧИКОВ ==========
    function updateCounters(count) {
        const desktopCounter = document.getElementById('gamesCountDesktop');
        const mobileCounter = document.getElementById('gamesCountMobile');
        if (desktopCounter) desktopCounter.textContent = count;
        if (mobileCounter) mobileCounter.textContent = count;
    }

    // ========== ОТРИСОВКА КАРТОЧЕК ==========
    function renderGames() {
        const filtered = filterGames();
        const grid = document.getElementById('gamesGrid');
       
        updateCounters(filtered.length);
       
        if (!grid) return;
       
        if (filtered.length === 0) {
            grid.innerHTML = '<div class="no-results">😕 Нет игр, подходящих под фильтры</div>';
            return;
        }
       
        let html = '';
        for (let i = 0; i < filtered.length; i++) {
            const game = filtered[i];
           
            let genresHtml = '';
            for (let g = 0; g < game.genres.length; g++) {
                genresHtml += `<span class="genre-badge">${game.genres[g]}</span>`;
            }
           
            let platformsHtml = '';
            for (let p = 0; p < game.platforms.length; p++) {
                platformsHtml += `<span class="platform-badge">${game.platforms[p]}</span>`;
            }
           
            html += `
                <div class="game-card">
                    <div class="card-content">
                        <div class="game-title">${game.title}</div>
                        <div class="game-year">📅 ${game.release_year}</div>
                        <div class="game-desc">${game.description_short}</div>
                        <div class="badges">${genresHtml}</div>
                        <div class="badges">${platformsHtml}</div>
                        <div class="rating">⭐ ${game.rating}/10</div>
                        <div class="review">
                            "${game.review_text}"
                            <div class="review-author">— ${game.review_author}</div>
                        </div>
                        <a href="${game.store_links?.steam || '#'}" target="_blank" class="store-link">🎮 Купить →</a>
                    </div>
                </div>
            `;
        }
        grid.innerHTML = html;
    }

    // ========== СБРОС ФИЛЬТРОВ ==========
    function resetDesktop() {
        const genre = document.getElementById('genreFilterDesktop');
        const platform = document.getElementById('platformFilterDesktop');
        const rating = document.getElementById('ratingFilterDesktop');
        if (genre) genre.value = 'all';
        if (platform) platform.value = 'all';
        if (rating) rating.value = '0';
        renderGames();
    }
   
    function resetMobile() {
        const genre = document.getElementById('genreFilterMobile');
        const platform = document.getElementById('platformFilterMobile');
        const rating = document.getElementById('ratingFilterMobile');
        if (genre) genre.value = 'all';
        if (platform) platform.value = 'all';
        if (rating) rating.value = '0';
        renderGames();
    }
    // ========== БУРГЕР-МЕНЮ ==========
    function initBurger() {
        const btn = document.getElementById('burgerBtn');
        const menu = document.getElementById('burgerMenu');
        const overlay = document.getElementById('menuOverlay');
        const close = document.getElementById('burgerCloseBtn');
       
        if (!btn || !menu || !overlay) return;
       
        function openMenu() {
            btn.classList.add('open');
            menu.classList.add('open');
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
       
        function closeMenu() {
            btn.classList.remove('open');
            menu.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = '';
        }
       
        btn.addEventListener('click', openMenu);
        overlay.addEventListener('click', closeMenu);
        if (close) close.addEventListener('click', closeMenu);
       
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeMenu();
        });
    }

        // ========== НАВЕШИВАНИЕ ОБРАБОТЧИКОВ ==========
    function attachEvents() {
        document.getElementById('genreFilterDesktop')?.addEventListener('change', renderGames);
        document.getElementById('platformFilterDesktop')?.addEventListener('change', renderGames);
        document.getElementById('ratingFilterDesktop')?.addEventListener('change', renderGames);
        document.getElementById('resetFiltersDesktop')?.addEventListener('click', resetDesktop);
       
        document.getElementById('genreFilterMobile')?.addEventListener('change', renderGames);
        document.getElementById('platformFilterMobile')?.addEventListener('change', renderGames);
        document.getElementById('ratingFilterMobile')?.addEventListener('change', renderGames);
        document.getElementById('resetFiltersMobile')?.addEventListener('click', resetMobile);
    }

    // ========== ЗАПУСК ==========
    populateFilters();
    attachEvents();
    initBurger();
    initContactModal();
    renderGames();