const books = [
    {
        author: 'Дэн Браун',
        name: 'Ангелы и демоны',
        publicationYear: 2000,
        price: 850,
        bestseller: true,
        available: true
    },
    {
        author: 'Джоан Роулинг',
        name: 'Гарри Поттер и узник Азкабана',
        publicationYear: 1999,
        price: 950,
        bestseller: false,
        available: true
    },
    {
        author: 'Стивен Кинг',
        name: 'Зелёная миля',
        publicationYear: 1996,
        price: 1200,
        bestseller: true,
        available: false
    },
    {
        author: 'Пауло Коэльо',
        name: 'Вероника решает умереть',
        publicationYear: 1998,
        price: 750,
        bestseller: true,
        available: true
    },
    {
        author: 'Харуки Мураками',
        name: 'Норвежский лес',
        publicationYear: 1987,
        price: 900,
        bestseller: false,
        available: true
    },
    {
        author: 'Эрих Мария Ремарк',
        name: 'Триумфальная арка',
        publicationYear: 1945,
        price: 1100,
        bestseller: true,
        available: false
    },
    {
        author: 'Маргарет Митчелл',
        name: 'Унесённые ветром',
        publicationYear: 1936,
        price: 800,
        bestseller: false,
        available: true
    },
    {
        author: 'Оскар Уайльд',
        name: 'Портрет Дориана Грея',
        publicationYear: 1890,
        price: 650,
        bestseller: true,
        available: true
    },
    {
        author: 'Михаил Булгаков',
        name: 'Мастер и Маргарита',
        publicationYear: 1967,
        price: 950,
        bestseller: false,
        available: false
    },
    {
        author: 'Джером Сэлинджер',
        name: 'Над пропастью во ржи',
        publicationYear: 1951,
        price: 700,
        bestseller: true,
        available: true
    }
];

function showBooks() {
    const bookList = document.getElementById('bookList');
    let html = '';

    for(let i = 0; i < books.length; i++) {
        const book = books[i];
        const isAvailable = book.available;
        const isBestseller = book.bestseller;

        let bookClass = 'book-item';
        if (isBestseller) {
            bookClass += ' bestseller';
        }
        if (!isAvailable) {
            bookClass += ' unavailable';
        }

        html += `
            <div class="${bookClass}">
                <b>${book.author}</b>
                <i>${book.name}</i>
                &mdash; ${book.publicationYear}
                - Цена: ${book.price} руб.
                ${isAvailable ? '' : '<span class="unavailable-text"> (Нет в наличии)</span>'}
            </div>
        `;
    }
    bookList.innerHTML = html;
}