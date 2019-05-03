export default class BookstoreService {
    getBooks() {
        const data = [
            {
                id: 1,
                title: 'Идеальный программист. Как стать профессионалом разработки ПО',
                pages: 224,
                price: 224,
                author: 'Роберт К. Мартин',
                imageURL: 'https://i2.rozetka.ua/goods/2304560/25264665_images_2304560553._S.jpg'
            },
            {
                id: 2,
                title: 'Angular для профессионалов',
                pages: 800,
                price: 800,
                author: 'Адам Фримен',
                imageURL: 'https://cv02.twirpx.net/2370/2370627.jpg?t=20181205045113',
            },
            {
                id: 3,
                title: 'Angular и TypeScript. Сайтостроение для профессионалов',
                pages: 464,
                price: 800,
                author: 'Моисеев Антон и Яков Файн',
                imageURL: 'https://i1.rozetka.ua/goods/3407854/34569535_images_3407854175.jpg',
            },
            {
                id: 4,
                title: 'Никогда не ешьте в одиночку',
                pages: 344,
                price: 800,
                author: 'Кейт Феррацци, Тал Рэз',
                imageURL: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/2/1/212723_5584012.jpg',
            },
            {
                id: 5,
                title: 'Как привести дела в порядок: искусство продуктивности без стресса',
                pages: 368,
                price: 800,
                author: 'Дэвид Аллен',
                imageURL: 'https://www.mann-ivanov-ferber.ru/assets/images/covers/63/2763/1.00x-thumb.png',
            },
            {
                id: 6,
                title: 'Sapiens. Краткая история человечества',
                pages: 512,
                price: 800,
                author: 'Юваль Ной Харари',
                imageURL: 'https://images-na.ssl-images-amazon.com/images/I/41RYDz9wdqL.jpg',
            },
        ];

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if(Math.random() < 0.95) {
                    resolve(data);
                } else {
                    reject(new Error('Error'))
                }
            }, 600);
        })
    }
}
