const questions = [
    {
        id: 1,
        question: 'Что такое операционная система?',
        options: [
            'Это просто программа на компьютере, как и другие - Word или Chrome',
            'Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный',
            'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем (+)',
            'Нет такого понятия, есть понятие "файловая система"'
        ],
    },

    {
        id: 2,
        question: 'Является ли Android операционной системой?',
        options: [
            'Да, это такая же ОС, как и другие, просто для мобильных девайсов (+)',
            'Нет, операционные системы бывают только для ПК',
            'Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные',
            'Это домашняя страничка в настройках вашего браузера"'
        ],
    },

    {
        id: 3,
        question: 'Что такое процессор компьютера?',
        options: [
            'Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки',
            'Это общее название всех комплектующих компьютера',
            'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств (+)',
            'Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц"'
        ],
    },

    {
        id: 4,
        question: 'Какие бывают разрядности у современных процессоров?',
        options: [
            '32 и 64 бита (+)',
            '12 и 32 бита',
            '15 и 32 бита',
            '86 и 64 бита'
        ],
    },

    {
        id: 5,
        question: 'Какой тип процессора чаще всего используют мобильные девайсы?',
        options: [
            'iOS использует Intel, остальные используют AMD',
            'Чаще всего используют Intel',
            'Чаще всего используют AMD',
            'Чаще всего используют ARM (+)'
        ],
    },

    {
        id: 6,
        question: 'Для чего компьютеру нужна RAM?',
        options: [
            'Для быстрого доступа к данным (+)',
            'Для долгосрочного хранения данных',
            'Для правильной фрагментации памяти',
            'Для дефрагментации данных'
        ],
    },

    {
        id: 7,
        question: 'Чем отличается HDD от SSD?',
        options: [
            'HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее',
            'HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее',
            'SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее',
            'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее (+)'
        ],
    },

    {
        id: 8,
        question: 'Как отличаются между собой USB?',
        options: [
            'Бывают только USB 2.0 и 3.2',
            'Бывают только micro-USB и mini-USB',
            'USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).',
            'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2) (+)'
        ],
    },

    {
        id: 9,
        question: 'Какой файловой системы не существует?',
        options: [
            'Fat',
            'NTFS',
            'APFS',
            'BolSFS (+)'
        ],
    },
]

shuffleArray(questions);
for (const question of questions) {
    shuffleArray(question.options);
}

export type Data = {
    id: number,
    question: string,
    options: {
        [key: string]: boolean
    },
}

export const data = questions.map(question => {

    const objOptions: { [key: string]: boolean } = {};

    const options = question.options;

    for (const item of options) {
        if (item.includes(' (+)')) {
            const correctAnswer = item.replace(' (+)', '');
            objOptions[correctAnswer] = true;
        }
        else objOptions[item] = false;
    }

    return { ...question, options: objOptions };

})


// ====== SHUFFLE ====== //
function shuffleArray(array: unknown[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}