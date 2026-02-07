// --- ЯПОНСКАЯ КУХНЯ ---
// Чтобы добавить картинку, вставьте ссылку между кавычками: image: 'https://...'

window.MENU_JAPAN = {
    sets: {
        title: "Сеты",
        items: [
            { id: 'set-newyork', name: 'Сет Нью-Йорк', weight: '1320 гр', count: '48 шт', price: 2400, description: 'Роллы: Каприз, Шеф, Дунай, Жемчужина, Саппоро, Майами', image: '' },
            { id: 'set-fuji', name: 'Сет Фуджи', weight: '900 гр', count: '32 шт', price: 1350, description: 'Роллы: Йоджи маки, Белоснежка, Чикаго, Ролл с креветкой', image: '' },
            { id: 'set-oslo', name: 'Сет Осло', weight: '1740 гр', count: '56 шт', price: 3100, description: 'Черный самурай, Спай эби, Шик маки, Золотой, Сой бин маки', image: '' },
            { id: 'set-furshet', name: 'Сет Фуршет', weight: '2200 гр', count: '80 шт', price: 4100, description: 'Шанхай, Корона, Белоснежка, Калифорния с кунжутом, Де люкс, Аляска', image: '' },
            { id: 'set-vip', name: 'Сет ВИП', weight: '850 гр', count: '27 шт', price: 1790, description: 'Роллы: Мадрид, Тар-тар маки, Бангкок. Суши: Угорь, Лосось', image: '' },
            { id: 'set-texas', name: 'Сет Техас', weight: '1300 гр', count: '40 шт', price: 2050, description: 'Темпура: маки, императорский. Роллы: сидней, кайсен, черный самурай', image: '' },
            { id: 'set-nagano', name: 'Сет Нагано', weight: '1000 гр', count: '32 шт', price: 1700, description: 'Сет для минималистов с аппетитом. Четыре ролла', image: '' },
            { id: 'set-vegas', name: 'Сет Вегас', weight: '1200 гр', count: '32 шт', price: 1610, description: 'Темпура: Королева, Гейзер, Магуро джимаг, Канзас', image: '' }
        ]
    },
    rolls: {
        title: "Роллы",
        items: [
            { id: 'roll-philadelphia', name: 'Филадельфия', weight: '200 гр', price: 480, description: 'Лосось, сливочный сыр', image: '' },
            { id: 'roll-california', name: 'Калифорния', weight: '200 гр', price: 430, description: 'Креветка, авокадо, тобико, японский майонез', image: '' },
            { id: 'roll-canada', name: 'Канада', weight: '200 гр', price: 430, description: 'Угорь, лосось копчёный, авокадо, филадельфия, кунжут', image: '' },
            { id: 'roll-dragon', name: 'Золотой дракон', weight: '230 гр', price: 660, description: 'Королевская креветка, угорь, паприка, филадельфия', image: '' },
            { id: 'roll-moscow', name: 'Москва', weight: '210 гр', price: 430, description: 'Копченый лосось, филадельфия, огурец, икра', image: '' },
            { id: 'roll-black-samurai', name: 'Черный самурай', weight: '200 гр', price: 430, description: 'Филадельфия, тобико чёрное, угорь, креветка, огурец', image: '' },
            { id: 'roll-emperor', name: 'Императорский', weight: '220 гр', price: 430, description: 'Креветка, лосось, икра, японский майонез, кляр', image: '' },
            { id: 'roll-madrid', name: 'Мадрид', weight: '220 гр', price: 660, description: 'Угорь копченый, лосось, сыр филадельфия, авокадо', image: '' },
             { id: 'roll-torez', name: 'Торез', count: '8 шт', price: 660, description: 'Огурец, краб, жареный лосось, угорь', image: '' },
             { id: 'roll-okinawa', name: 'Окинава', count: '8 шт', price: 430, description: 'Филадельфия, угорь, огурец, тобико', image: '' }
        ]
    },
    sushirrito: {
        title: "Суширитто",
        items: [
            { id: 'sushirrito-flow', name: 'РоллФлоу', weight: '330 гр', price: 550, description: 'Когда всё идёт само: работа спорится, настроение на пике', image: '' },
            { id: 'sushirrito-caesar', name: 'Цезарь в кляре', weight: '330 гр', price: 510, description: 'Сытный микс любимого салата и японского формата', image: '' },
            { id: 'sushirrito-satori', name: 'Суширитто сатори', weight: '310 гр', price: 570, description: 'Философы веками спорят о смысле жизни, а можно просто съесть это', image: '' }
        ]
    },
    poke: {
        title: "Поке",
        items: [
            { id: 'poke-salmon', name: 'Поке с лососем', weight: '350 гр', price: 650, description: 'Гавайцы - умные люди. Зачем вилки и ножи?', image: '' },
            { id: 'poke-shrimp', name: 'Поке с креветками', weight: '350 гр', price: 650, description: 'Креветки - продукт тонкий, легко испортить', image: '' },
            { id: 'poke-tuna', name: 'Поке с тунцом', weight: '350 гр', price: 650, description: 'Карибская пристань в полдень, крики чаек, запах соли', image: '' }
        ]
    },
    sushi: {
        title: "Суши",
        items: [
            { id: 'sushi-salmon', name: 'Суши с лососем', price: 120, description: 'Лосось, рис', image: '' },
            { id: 'sushi-eel', name: 'Суши с угрем', price: 140, description: 'Угорь, соус унаги, кунжут', image: '' },
            { id: 'sushi-tuna', name: 'Суши с тунцом', price: 120, description: 'Тунец, рис', image: '' },
            { id: 'sushi-shrimp', name: 'Суши с креветкой', price: 120, description: 'Креветка, рис', image: '' },
            { id: 'sushi-squid', name: 'Суши с кальмаром', price: 120, description: 'Кальмар, рис', image: '' }
        ]
    }
};