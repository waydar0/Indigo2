const games = [
  // === Первые 10 (оригинальные) ===
  {
    title: "Outer Wilds",
    description_short: "Космическое приключение с исследованием и временными петлями.",
    genres: ["Adventure", "Exploration", "Mystery", "Time Loop"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2019,
    rating: 10,
    review_text: "Шедевр, который можно пройти только один раз.",
    review_author: "Skill Up",
    store_links: { steam: "https://store.steampowered.com/app/753640/Outer_Wilds/" }
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
    store_links: { steam: "https://store.steampowered.com/app/367520/Hollow_Knight/" }
  },
  {
    title: "Disco Elysium - The Final Cut",
    description_short: "Глубокая RPG без боёв.",
    genres: ["RPG", "Detective", "Narrative-Driven", "Philosophical"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2019,
    rating: 10,
    review_text: "Текстовая RPG, после которой другие игры кажутся пустыми.",
    review_author: "Skill Up",
    store_links: { steam: "https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/" }
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
    store_links: { steam: "https://store.steampowered.com/app/1092790/Inscryption/" }
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
    store_links: { steam: "https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/" }
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
    store_links: { steam: "https://store.steampowered.com/app/813230/ANIMAL_WELL/" }
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
    store_links: { steam: "https://store.steampowered.com/app/1809540/Nine_Sols/" }
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
    store_links: { steam: "https://store.steampowered.com/app/1637320/Dome_Keeper/" }
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
    store_links: { steam: "https://store.steampowered.com/app/1677770/The_Case_of_the_Golden_Idol/" }
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
    store_links: { steam: "https://store.steampowered.com/app/1676130/Deadlink/" }
  },
  // === Новые игры (без дублей) ===
  {
    title: "Hades",
    description_short: "Эталонный экшен-рогалик о побеге из подземного царства с великолепным сюжетом.",
    genres: ["Roguelite", "Action", "Mythology"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2020,
    rating: 10,
    review_text: "Бесконечная реиграбельность, стильный арт и захватывающая история. Одна из лучших инди-игр десятилетия.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/1145360/Hades/" }
  },
  {
    title: "Slay the Spire",
    description_short: "Родоначальник жанра карточных колодостроительных приключений.",
    genres: ["Card Game", "Roguelike", "Strategy"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    release_year: 2019,
    rating: 9,
    review_text: "Идеальный баланс случайности и планирования. Каждая партия уникальна.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/646570/Slay_the_Spire/" }
  },
  {
    title: "Celeste",
    description_short: "Хардкорный платформер о преодолении внутренних трудностей и подъёме на гору.",
    genres: ["Platformer", "Precision", "Narrative"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2018,
    rating: 10,
    review_text: "Точнейшее управление, душевная история и музыка. Шедевр жанра.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/504230/Celeste/" }
  },
  {
    title: "Subnautica",
    description_short: "Заразительное и местами пугающее выживание в глубинах океана чужой планеты.",
    genres: ["Survival", "Exploration", "Underwater", "Horror"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2018,
    rating: 9,
    review_text: "Невероятная атмосфера одиночества и страх глубин. Один из лучших симуляторов выживания.",
    review_author: "Reddit",
    store_links: { steam: "https://store.steampowered.com/app/264710/Subnautica/" }
  },
  {
    title: "Return of the Obra Dinn",
    description_short: "Уникальный монохромный детектив по расследованию смертей на корабле.",
    genres: ["Puzzle", "Detective", "Mystery"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2018,
    rating: 9,
    review_text: "Гениальная механика восстановления событий, стиль 1-bit и потрясающая логика.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/" }
  },
  {
    title: "Hotline Miami",
    description_short: "Ураганный пиксельный экшен с безумным саундтреком и ультранасилием.",
    genres: ["Action", "Top-Down Shooter", "Fast-Paced"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    release_year: 2012,
    rating: 9,
    review_text: "Каждый уровень — как забег на адреналине. Саундтрек и геймплей — идеальное безумие.",
    review_author: "Reddit",
    store_links: { steam: "https://store.steampowered.com/app/219150/Hotline_Miami/" }
  },
  {
    title: "Journey",
    description_short: "Бессловесное и невероятно красивое путешествие к далекой горе.",
    genres: ["Adventure", "Art", "Meditative"],
    platforms: ["PC", "PlayStation", "iOS"],
    release_year: 2012,
    rating: 10,
    review_text: "Игра, которую нужно прочувствовать. Музыка и визуал — высочайший уровень.",
    review_author: "Reddit",
    store_links: { steam: "https://store.steampowered.com/app/638230/Journey/" }
  },
  // === Дополнительные (каждая только раз) ===
  {
    title: "The Binding of Isaac: Rebirth",
    description_short: "Мрачный и бесконечно реиграбельный прародитель современных рогаликов.",
    genres: ["Roguelike", "Action", "Dark Fantasy"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2014,
    rating: 9,
    review_text: "Тысячи предметов, библейский сюрреализм и невероятная глубина. Классика.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/" }
  },
  {
    title: "Dead Cells",
    description_short: "Динамичный гибрид рогалика и метроидвании с упором на боевую систему.",
    genres: ["Roguelite", "Metroidvania", "Action"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2018,
    rating: 9,
    review_text: "Идеальный темп, отзывчивое управление и море разблокируемого оружия.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/588650/Dead_Cells/" }
  },
  {
    title: "Balatro",
    description_short: "Безумно затягивающий покерный психоделический рогалик.",
    genres: ["Card Game", "Roguelike", "Puzzle"],
    platforms: ["PC", "Nintendo Switch"],
    release_year: 2024,
    rating: 9,
    review_text: "Каждый забег уникален, числа растут, дофамин зашкаливает.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/2379780/Balatro/" }
  },
  {
    title: "Vampire Survivors",
    description_short: "Минималистичный экшен, запустивший тренд на автоатакующие bullet-hell игры.",
    genres: ["Roguelite", "Bullet Heaven", "Casual"],
    platforms: ["PC", "Mobile", "Nintendo Switch"],
    release_year: 2021,
    rating: 8,
    review_text: "Одна из лучших игр за свои деньги. Бесконечный цикл 'ещё минуту'.",
    review_author: "PlayGround.ru",
    store_links: { steam: "https://store.steampowered.com/app/1794680/Vampire_Survivors/" }
  },
  {
    title: "Enter the Gungeon",
    description_short: "Сложный и весёлый пулевой ад с сотнями видов безумного оружия.",
    genres: ["Roguelike", "Bullet Hell", "Action"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2016,
    rating: 9,
    review_text: "Оружие стреляет пчелами? Да. Акулами? Да. Это хаос и восторг.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/311690/Enter_the_Gungeon/" }
  },
  {
    title: "Risk of Rain 2",
    description_short: "Трёхмерный кооперативный рогалик с безумным масштабированием сложности.",
    genres: ["Roguelite", "Third-Person Shooter", "Co-op"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2020,
    rating: 9,
    review_text: "Чем дольше играешь, тем безумнее становятся способности. Лучший кооператив.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/632360/Risk_of_Rain_2/" }
  },
  {
    title: "Loop Hero",
    description_short: "Необычная тактическая стратегия, где вы строите окружение вокруг героя.",
    genres: ["Strategy", "Roguelike", "Idle"],
    platforms: ["PC", "Nintendo Switch"],
    release_year: 2021,
    rating: 8,
    review_text: "Гениальная механика: вы не управляете героем, а создаёте мир, в котором он сражается.",
    review_author: "Kanobu.ru",
    store_links: { steam: "https://store.steampowered.com/app/1282730/Loop_Hero/" }
  },
  {
    title: "Ori and the Blind Forest",
    description_short: "Потрясающе красивая сказка с отзывчивым управлением.",
    genres: ["Metroidvania", "Platformer", "Emotional"],
    platforms: ["PC", "Xbox", "Nintendo Switch"],
    release_year: 2015,
    rating: 9,
    review_text: "Одна из самых красивых игр на свете. Отличный геймплей и душераздирающая история.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/261570/Ori_and_the_Blind_Forest/" }
  },
  {
    title: "Cuphead",
    description_short: "Босс-раш в стиле американской анимации 1930-х годов с зубодробительной сложностью.",
    genres: ["Action", "Platformer", "Run and Gun"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2017,
    rating: 9,
    review_text: "Уникальный визуальный стиль и музыка джаза. Сложность старых игр.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/268910/Cuphead/" }
  },
  {
    title: "Blasphemous",
    description_short: "Жестокая пиксельная метроидвания, пропитанная религиозной готикой.",
    genres: ["Metroidvania", "Action", "Dark Fantasy"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2019,
    rating: 8,
    review_text: "Гнетущая атмосфера, брутальные бои и странная лор. Очень атмосферно.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/774361/Blasphemous/" }
  },
  {
    title: "Katana Zero",
    description_short: "Стильный неонуарный экшен-платформер с манипуляцией временем.",
    genres: ["Action", "Platformer", "Neo-noir"],
    platforms: ["PC", "Nintendo Switch"],
    release_year: 2019,
    rating: 8,
    review_text: "Лихое замедление времени, синтвейв и сюжет-головоломка.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/460950/Katana_Zero/" }
  },
  {
    title: "Undertale",
    description_short: "Культовая ролевая игра, которую можно пройти без единого убийства.",
    genres: ["RPG", "Narrative-Driven", "Comedy"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2015,
    rating: 10,
    review_text: "Игра, которая помнит всё. Юмор, слом четвёртой стены и невероятный финал.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/391540/Undertale/" }
  },
  {
    title: "What Remains of Edith Finch",
    description_short: "Эталонный «симулятор ходьбы» о проклятии одной семьи.",
    genres: ["Walking Simulator", "Narrative", "Mystery"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2017,
    rating: 9,
    review_text: "Короткий, но очень сильный опыт. Одна из лучших игр-прогулок.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/501300/What_Remains_of_Edith_Finch/" }
  },
  {
    title: "Firewatch",
    description_short: "Живописная история смотрителя пожарной вышки в лесах Вайоминга.",
    genres: ["Walking Simulator", "Adventure", "Mystery"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2016,
    rating: 8,
    review_text: "Красота природы и радиопереговоры. Атмосфера уединения и лёгкой тревоги.",
    review_author: "Kanobu.ru",
    store_links: { steam: "https://store.steampowered.com/app/383870/Firewatch/" }
  },
  {
    title: "Stray",
    description_short: "Атмосферное приключение бродячего кота в киберпанковом городе роботов.",
    genres: ["Adventure", "Platformer", "Cyberpunk"],
    platforms: ["PC", "PlayStation", "Xbox"],
    release_year: 2022,
    rating: 8,
    review_text: "Вы кот. Что ещё нужно? Атмосфера, головоломки и милота.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/1332010/Stray/" }
  },
  {
    title: "Stardew Valley",
    description_short: "Уютный симулятор фермы, созданный одним человеком и покоривший миллионы.",
    genres: ["Simulation", "Farming", "RPG"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    release_year: 2016,
    rating: 10,
    review_text: "Бесконечное удовольствие от выращивания репы, рыбалки и общения с жителями.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/413150/Stardew_Valley/" }
  },
  {
    title: "RimWorld",
    description_short: "Глубокий симулятор колонии под управлением продвинутого ИИ-рассказчика.",
    genres: ["Simulation", "Strategy", "Colony Management"],
    platforms: ["PC"],
    release_year: 2018,
    rating: 9,
    review_text: "Каждый раз уникальная драма. История ваших поселенцев пишется сама.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/294100/RimWorld/" }
  },
  {
    title: "Don't Starve",
    description_short: "Стильное готическое выживание в причудливом опасном мире.",
    genres: ["Survival", "Roguelike", "Crafting"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    release_year: 2013,
    rating: 8,
    review_text: "Безумный художник-наутилус, голод и тьма. Сложно, но увлекательно.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/219740/Dont_Starve/" }
  },
  {
    title: "Baba Is You",
    description_short: "Головоломка, в которой вы меняете правила игры, двигая слова-блоки.",
    genres: ["Puzzle", "Logic", "Creative"],
    platforms: ["PC", "Nintendo Switch", "Mobile"],
    release_year: 2019,
    rating: 9,
    review_text: "Вы ещё не думали так далеко. Гениальная механика, взрывающая мозг.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/736260/Baba_Is_You/" }
  },
  {
    title: "Papers, Please",
    description_short: "Симулятор инспектора миграционной службы тоталитарного государства.",
    genres: ["Puzzle", "Simulation", "Dystopian"],
    platforms: ["PC", "Mobile", "PlayStation"],
    release_year: 2013,
    rating: 9,
    review_text: "Моральный выбор, бюрократия и серая мораль. Глубоко и мрачно.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/239030/Papers_Please/" }
  },
  {
    title: "Deep Rock Galactic",
    description_short: "Кооперативный шутер про гномов-шахтёров в космосе.",
    genres: ["FPS", "Co-op", "Mining"],
    platforms: ["PC", "PlayStation", "Xbox"],
    release_year: 2020,
    rating: 9,
    review_text: "Лучший кооператив со времён Left 4 Dead. Скала и камень, брат!",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/548430/Deep_Rock_Galactic/" }
  },
  {
    title: "Signalis",
    description_short: "Атмосферный survival horror старой школы в духе классических Resident Evil.",
    genres: ["Survival Horror", "Puzzle", "Sci-Fi"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2022,
    rating: 8,
    review_text: "Пиксели, головоломки и гнетущая атмосфера. Дань уважения жанру.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/1262350/Signalis/" }
  },
  {
    title: "Gris",
    description_short: "Трогательное акварельное приключение, метафорически исследующее стадии скорби.",
    genres: ["Platformer", "Art", "Emotional"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    release_year: 2018,
    rating: 9,
    review_text: "Игра-картина. Без слов рассказывает историю боли и принятия.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/683320/GRIS/" }
  },
  {
    title: "A Short Hike",
    description_short: "Маленькое, доброе приключение о прогулке по национальному парку без телефона.",
    genres: ["Adventure", "Casual", "Exploration"],
    platforms: ["PC", "Nintendo Switch"],
    release_year: 2019,
    rating: 8,
    review_text: "Чистое, уютное счастье. Поднимает настроение лучше любой терапии.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/1055540/A_Short_Hike/" }
  },
 // === ДОПОЛНИТЕЛЬНЫЕ ИГРЫ (уникальные) ===
  {
    title: "Darkest Dungeon",
    description_short: "Мрачная тактика о психологических травмах и выживании в подземельях.",
    genres: ["Roguelike", "Strategy", "Gothic", "Turn-based"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    release_year: 2016,
    rating: 9,
    review_text: "Безумие, стресс и отчаяние. Очень сложный, но затягивающий тактический рогалик.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/262060/Darkest_Dungeon/" }
  },
  {
    title: "Darkest Dungeon II",
    description_short: "Дорожное приключение в умирающем мире с изменённой структурой.",
    genres: ["Roguelike", "Strategy", "Gothic", "Turn-based"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2023,
    rating: 8,
    review_text: "Вместо поместья — путь на дилижансе. Мрачнее, но спорные изменения.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/1940340/Darkest_Dungeon_II/" }
  },
  {
    title: "Spelunky 2",
    description_short: "Хардкорный платформер-рогалик, требующий идеальной точности.",
    genres: ["Roguelike", "Platformer", "Exploration"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2020,
    rating: 9,
    review_text: "Сложность первого уровня — цветочки. Куча секретов и смертей.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/418530/Spelunky_2/" }
  },
  {
    title: "Crypt of the NecroDancer",
    description_short: "Уникальный ритм-рогалик, где двигаться нужно в такт музыке.",
    genres: ["Roguelike", "Rhythm", "Dungeon Crawler"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    release_year: 2015,
    rating: 8,
    review_text: "Гениальное смешение жанров. Прыгай под бит и руби скелетов.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/247080/Crypt_of_the_NecroDancer/" }
  },
  {
    title: "Buckshot Roulette",
    description_short: "Напряжённая короткая игра в аналог русской рулетки с дробовиком.",
    genres: ["Horror", "Psychological", "Simulation"],
    platforms: ["PC"],
    release_year: 2023,
    rating: 8,
    review_text: "Коротко, жутко, атмосферно. Усы, дробовик и дьявол.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/2835570/Buckshot_Roulette/" }
  },
  {
    title: "Ravenswatch",
    description_short: "Кооперативный изометрический экшен по мотивам мрачных сказок.",
    genres: ["Roguelite", "Action", "Co-op"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2023,
    rating: 7,
    review_text: "Красивый арт, но пока сыровато. Интересные герои и способности.",
    review_author: "Kanobu.ru",
    store_links: { steam: "https://store.steampowered.com/app/2071280/Ravenswatch/" }
  },
  {
    title: "FTL: Faster Than Light",
    description_short: "Симулятор капитана космического корабля в жанре roguelike.",
    genres: ["Strategy", "Roguelike", "Sci-Fi", "Management"],
    platforms: ["PC", "iOS"],
    release_year: 2012,
    rating: 9,
    review_text: "Космос, перегрузка систем и перманентная смерть. Классика.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/212680/FTL_Faster_Than_Light/" }
  },
  {
    title: "Into the Breach",
    description_short: "Пошаговая тактика от авторов FTL, напоминающая шахматы с мехами и жуками.",
    genres: ["Strategy", "Turn-based", "Roguelike", "Sci-Fi"],
    platforms: ["PC", "Nintendo Switch", "Mobile"],
    release_year: 2018,
    rating: 9,
    review_text: "Идеальная тактика: каждый ход важен, предсказуемость врагов, множество отрядов.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/590380/Into_the_Breach/" }
  },
  {
    title: "Super Meat Boy",
    description_short: "Легендарный мясной платформер, возродивший моду на высокую сложность.",
    genres: ["Platformer", "Precision", "Action"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2010,
    rating: 9,
    review_text: "Тысячи смертей, секундные уровни и гениальный дизайн.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/40800/Super_Meat_Boy/" }
  },
  {
    title: "Limbo",
    description_short: "Мрачный и минималистичный пазл-платформер от студии Playdead.",
    genres: ["Puzzle", "Platformer", "Dark"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    release_year: 2010,
    rating: 8,
    review_text: "Чёрно-белая атмосфера, жуткие пауки и гениальные загадки.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/48000/Limbo/" }
  },
  {
    title: "Inside",
    description_short: "Идейный сиквел Limbo с гнетущей атмосферой антиутопии.",
    genres: ["Puzzle", "Platformer", "Dark"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2016,
    rating: 9,
    review_text: "Мрачно, загадочно, идеально. Каждая минута — напряжение.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/304430/Inside/" }
  },
  {
    title: "Fez",
    description_short: "Пространственная головоломка, завязанная на переключении 2D и 3D перспектив.",
    genres: ["Puzzle", "Platformer", "Exploration"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2013,
    rating: 8,
    review_text: "Ошеломляющий дизайн уровней. Вращай мир и ищи секреты.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/224760/Fez/" }
  },
  {
    title: "Shovel Knight: Treasure Trove",
    description_short: "Лучшее любовное послание классическим 8-битным платформерам.",
    genres: ["Platformer", "Action", "Retro"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2014,
    rating: 9,
    review_text: "Ностальгия с современным управлением. Множество кампаний, отличный саундтрек.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/250760/Shovel_Knight_Treasure_Trove/" }
  },
  {
    title: "The Messenger",
    description_short: "Платформер, изящно эволюционирующий из 8-битного в 16-битный мир.",
    genres: ["Platformer", "Metroidvania", "Retro"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2018,
    rating: 8,
    review_text: "Сначала линейный платформер, потом метроидвания. Остроумно и сложно.",
    review_author: "Kanobu.ru",
    store_links: { steam: "https://store.steampowered.com/app/764790/The_Messenger/" }
  },
  {
    title: "Rain World",
    description_short: "Симулятор выживания милого слизнекота в экосистеме жестокого мира.",
    genres: ["Platformer", "Survival", "Metroidvania"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2017,
    rating: 8,
    review_text: "Мир живёт своей жизнью. Неистово сложно, но невероятно атмосферно.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/312520/Rain_World/" }
  },
  {
    title: "To the Moon",
    description_short: "Трогательная интерактивная история о последнем желании умирающего человека.",
    genres: ["RPG", "Narrative", "Emotional"],
    platforms: ["PC", "Mobile", "Nintendo Switch"],
    release_year: 2011,
    rating: 9,
    review_text: "Не игра, а эмоция. Рассказывает историю, способную разрыдаться.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/206440/To_the_Moon/" }
  },
  {
    title: "Omori",
    description_short: "Психологический хоррор и RPG о борьбе с депрессией и чувством вины.",
    genres: ["RPG", "Psychological Horror", "Narrative"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2020,
    rating: 9,
    review_text: "Душераздирающая история, прекрасный визуал и незабываемый саундтрек.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/1150690/OMORI/" }
  },
  {
    title: "Slay the Princess",
    description_short: "Текстовый хоррор-квест с множеством выборов и отличным юмором.",
    genres: ["Visual Novel", "Horror", "Choice-based"],
    platforms: ["PC", "Nintendo Switch"],
    release_year: 2023,
    rating: 8,
    review_text: "Десятки концовок, голоса, и принцесса, которую нельзя убить.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/1989270/Slay_the_Princess/" }
  },
  {
    title: "Kentucky Route Zero",
    description_short: "Сюрреалистическое роуд-муви по скрытым дорогам Америки.",
    genres: ["Adventure", "Point-and-Click", "Surreal"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2020,
    rating: 8,
    review_text: "Магический реализм, поэзия и нестандартное повествование.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/231200/Kentucky_Route_Zero/" }
  },
  {
    title: "Night in the Woods",
    description_short: "Меланхоличная история о взрослении, возвращении домой и котиках.",
    genres: ["Adventure", "Narrative", "Exploration"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2017,
    rating: 8,
    review_text: "Диалоги, музыка, атмосфера маленького городка. Тёплая грусть.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/481510/Night_in_the_Woods/" }
  },
  {
    title: "Chained Echoes",
    description_short: "Современная дань уважения классическим JRPG эпохи SNES.",
    genres: ["RPG", "Turn-based", "Retro"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2022,
    rating: 9,
    review_text: "Огромный мир, механика перегрева и захватывающий сюжет.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/1229240/Chained_Echoes/" }
  },
  {
    title: "Sea of Stars",
    description_short: "Потрясающая пошаговая RPG, вдохновленная Chrono Trigger.",
    genres: ["RPG", "Turn-based", "Retro"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2023,
    rating: 9,
    review_text: "Красивейшая пиксельная графика, динамичные бои и приключения.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/1244090/Sea_of_Stars/" }
  },
  {
    title: "Dave the Diver",
    description_short: "Уютный гибрид симулятора дайвинга и управления суши-баром.",
    genres: ["Adventure", "Simulation", "Management"],
    platforms: ["PC", "Nintendo Switch"],
    release_year: 2023,
    rating: 9,
    review_text: "Днём ловишь рыбу, ночью готовишь суши. Невероятно затягивает.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/1868140/Dave_the_Diver/" }
  },
  {
    title: "Dredge",
    description_short: "Рыболовное приключение с примесью лавкрафтовских ужасов.",
    genres: ["Adventure", "Horror", "Fishing"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2023,
    rating: 8,
    review_text: "Рыбалка днём, страх ночью. Атмосферный морской хоррор.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/1562430/Dredge/" }
  },
  {
    title: "The Stanley Parable: Ultra Deluxe",
    description_short: "Гениальная сатира на видеоигры и свободу выбора.",
    genres: ["Walking Simulator", "Comedy", "Narrative"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2022,
    rating: 9,
    review_text: "Что если у нарратива есть своё мнение? Остроумно, странно, незабываемо.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/1703340/The_Stanley_Parable_Ultra_Deluxe/" }
  },
  {
    title: "Terraria",
    description_short: "Масштабное двухмерное приключение с упором на крафт, исследование и битвы с боссами.",
    genres: ["Sandbox", "Adventure", "Crafting", "Action"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    release_year: 2011,
    rating: 10,
    review_text: "Тысячи предметов, строительство, исследования. Бесконечная игра.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/105600/Terraria/" }
  },
  {
    title: "Valheim",
    description_short: "Кооперативный симулятор выживания в скандинавском сеттинге для настоящих викингов.",
    genres: ["Survival", "Open World", "Co-op"],
    platforms: ["PC", "Xbox"],
    release_year: 2021,
    rating: 9,
    review_text: "Длинные дома, море и драугры. Атмосфера и чувство приключения.",
    review_author: "Kanobu.ru",
    store_links: { steam: "https://store.steampowered.com/app/892970/Valheim/" }
  },
  {
    title: "The Forest",
    description_short: "Survival horror с акцентом на строительство убежища и защиту от каннибалов.",
    genres: ["Survival", "Horror", "Crafting"],
    platforms: ["PC", "PlayStation"],
    release_year: 2018,
    rating: 8,
    review_text: "Строй, защищайся, спускайся в пещеры. Атмосфера паранойи.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/242760/The_Forest/" }
  },
  {
    title: "Sons of the Forest",
    description_short: "Продолжение симулятора выживания с улучшенной графикой и ИИ.",
    genres: ["Survival", "Horror", "Crafting"],
    platforms: ["PC"],
    release_year: 2023,
    rating: 8,
    review_text: "Больше возможностей, мутанты и компаньон Кельвин. Страшно и весело.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/1326470/Sons_of_The_Forest/" }
  },
  {
    title: "The Long Dark",
    description_short: "Реалистичное и суровое выживание в заснеженных лесах Канады.",
    genres: ["Survival", "Exploration", "Atmospheric"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2017,
    rating: 8,
    review_text: "Одиночество, холод и волки. Лучший симулятор выживания без зомби.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/305620/The_Long_Dark/" }
  },
  {
    title: "Project Zomboid",
    description_short: "Максимально хардкорная изометрическая игра про выживание в зомби-апокалипсисе.",
    genres: ["Survival", "RPG", "Sandbox", "Zombie"],
    platforms: ["PC"],
    release_year: 2013,
    rating: 9,
    review_text: "Подробная медицина, крафт, строительство. Смерть неизбежна, но процесс великолепен.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/108600/Project_Zomboid/" }
  },
  {
    title: "Factorio",
    description_short: "Инженерный симулятор автоматизации и строительства гигантских заводов.",
    genres: ["Simulation", "Strategy", "Automation"],
    platforms: ["PC"],
    release_year: 2020,
    rating: 10,
    review_text: "Кракен автоматизации. Затягивает на сотни часов. Оптимизация — рай.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/427520/Factorio/" }
  },
  {
    title: "Rust",
    description_short: "Популярная многопользовательская песочница с элементами жесткого PvP.",
    genres: ["Survival", "Multiplayer", "PvP"],
    platforms: ["PC"],
    release_year: 2018,
    rating: 7,
    review_text: "Токсичное сообщество, но невероятно напряжённые моменты. Выжить — уже победа.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/252490/Rust/" }
  },
  {
    title: "Slime Rancher",
    description_short: "Красочная и расслабляющая игра про разведение разноцветных слаймов.",
    genres: ["Adventure", "Farming", "Casual"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2017,
    rating: 8,
    review_text: "Антистресс, милота и экономика. Отличное настроение гарантировано.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/433340/Slime_Rancher/" }
  },
  {
    title: "Untitled Goose Game",
    description_short: "Забавный симулятор вредного гуся, терроризирующего тихую деревню.",
    genres: ["Puzzle", "Stealth", "Comedy"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2019,
    rating: 8,
    review_text: "Гусь — зло. Коротко, смешно и оригинально.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/837470/Untitled_Goose_Game/" }
  },
  {
    title: "Superhot",
    description_short: "Инновационный шутер, где время двигается только вместе с вами.",
    genres: ["FPS", "Puzzle", "Action"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2016,
    rating: 8,
    review_text: "Управляй временем, ломай врагов. Очень стильно и необычно.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/322500/SUPERHOT/" }
  },
  {
    title: "Amnesia: The Dark Descent",
    description_short: "Хоррор, изменивший жанр и лишивший игрока возможности защищаться.",
    genres: ["Survival Horror", "Puzzle", "First-person"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2010,
    rating: 8,
    review_text: "Бежать, прятаться, бояться. Классика современного хоррора.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/57300/Amnesia_The_Dark_Descent/" }
  },
  {
    title: "Furi",
    description_short: "Динамичный босс-раш под неоновое синтивейв-сопровождение.",
    genres: ["Action", "Boss Rush", "Bullet Hell"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2016,
    rating: 8,
    review_text: "Только боссы, музыка и атмосфера. Сложно, затягивает.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/423230/Furi/" }
  },
  {
    title: "My Friend Pedro",
    description_short: "Стильный балет со стрельбой, замедлением времени и трюками на скейте.",
    genres: ["Action", "Shooter", "Parkour"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2019,
    rating: 7,
    review_text: "Акробатика, замедление времени и банан. Безумное удовольствие.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/557340/My_Friend_Pedro/" }
  },
  {
    title: "Teardown",
    description_short: "Воксельная игра про ограбления с полной разрушаемостью уровней.",
    genres: ["Action", "Puzzle", "Sandbox"],
    platforms: ["PC", "PlayStation", "Xbox"],
    release_year: 2022,
    rating: 8,
    review_text: "Разрушай всё, планируй маршрут. Очень физично и креативно.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/1167630/Teardown/" }
  },
  {
    title: "Phasmophobia",
    description_short: "Кооперативный хоррор про охотников за привидениями.",
    genres: ["Horror", "Co-op", "Simulation"],
    platforms: ["PC"],
    release_year: 2020,
    rating: 8,
    review_text: "Используй приборы, общайся с призраками. Страшно с друзьями.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/739630/Phasmophobia/" }
  },
  {
    title: "Lethal Company",
    description_short: "Кооперативный хит про сбор металлолома на заброшенных индустриальных лунах.",
    genres: ["Horror", "Co-op", "Exploration"],
    platforms: ["PC"],
    release_year: 2023,
    rating: 8,
    review_text: "Смешно и страшно одновременно. Крики в рации и монстры.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/1966720/Lethal_Company/" }
  },
  {
    title: "Sifu",
    description_short: "Хардкорный симулятор кунг-фу с уникальной механикой старения после смертей.",
    genres: ["Action", "Martial Arts", "Roguelite"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2022,
    rating: 8,
    review_text: "Каждая смерть старит тебя, но добавляет опыта. Стильные бои.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/2138710/Sifu/" }
  },
  {
    title: "Ghostrunner",
    description_short: "Динамичный киберпанк-экшен от первого лица, где и враги, и вы погибаете от одного удара.",
    genres: ["Action", "Parkour", "Cyberpunk"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2020,
    rating: 8,
    review_text: "Быстрее, выше, сильнее. Одна смерть — перезапуск уровня.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/1139900/Ghostrunner/" }
  },
  {
    title: "Abzû",
    description_short: "Живописное подводное приключение от создателей визуального стиля Journey.",
    genres: ["Adventure", "Art", "Exploration"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    release_year: 2016,
    rating: 8,
    review_text: "Плавание среди китов, красивая музыка и никакого стресса.",
    review_author: "IGN",
    store_links: { steam: "https://store.steampowered.com/app/384190/Abzu/" }
  },
  {
    title: "Townscaper",
    description_short: "Минималистичный и залипательный симулятор строительства островных городков.",
    genres: ["Sandbox", "Casual", "Creative"],
    platforms: ["PC", "Nintendo Switch", "Mobile"],
    release_year: 2020,
    rating: 8,
    review_text: "Рисуй города на воде, наслаждайся уютом. Идеально для релакса.",
    review_author: "DTF",
    store_links: { steam: "https://store.steampowered.com/app/1267910/Townscaper/" }
  },
  {
    title: "Pony Island",
    description_short: "Мета-игра, маскирующаяся под сломанный аркадный автомат.",
    genres: ["Puzzle", "Psychological Horror", "Meta"],
    platforms: ["PC"],
    release_year: 2016,
    rating: 8,
    review_text: "Не верь пони. Ломай систему, взламывай код, ужасайся.",
    review_author: "StopGame.ru",
    store_links: { steam: "https://store.steampowered.com/app/405640/Pony_Island/" }
  },
  {
    title: "The Beginner's Guide",
    description_short: "Интерактивное эссе о творчестве и психологии создателя игр от автора Stanley Parable.",
    genres: ["Walking Simulator", "Narrative", "Experimental"],
    platforms: ["PC"],
    release_year: 2015,
    rating: 8,
    review_text: "Не игра, а исповедь. Глубоко, грустно и заставляет задуматься.",
    review_author: "Riot Pixels",
    store_links: { steam: "https://store.steampowered.com/app/303210/The_Beginners_Guide/" }
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
