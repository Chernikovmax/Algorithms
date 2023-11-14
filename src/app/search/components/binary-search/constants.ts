export const names = [
    'Авдей',
    'Авксентий',
    'Агапит',
    'Агафон',
    'Акакий',
    'Акиндин',
    'Александр',
    'Алексей',
    'Альберт',
    'Анатолий',
    'Андрей',
    'Аникий',
    'Аникита',
    'Антон',
    'Антонин',
    'Анфим',
    'Аристарх',
    'Аркадий',
    'Арсений',
    'Артём',
    'Артемий',
    'Артур',
    'Архипп',
    'Афанасий',
    'Евграф',
    'Евдоким',
    'Евсей',
    'Евстафий',
    'Егор',
    'Емельян',
    'Еремей',
    'Ермолай',
    'Ерофей',
    'Ефим',
    'Ефрем',
    'Иакинф',
    'Иван',
    'Игнатий',
    'Игорь',
    'Изот',
    'Илья',
    'Иннокентий',
    'Ираклий',
    'Ириней',
    'Исаак',
    'Исидор',
    'Иуда',
    'Иулиан',
    'Святополк',
    'Святослав',
    'Севастьян',
    'Семён',
    'Серафим',
    'Сергей',
    'Фаддей',
    'Фёдор',
    'Федосей',
    'Федот',
    'Феликс',
    'Феоктист',
    'Филат',
];

type Person = {
    name: string;
    age: number;
};

export const objNames: Person[] = names.map((name) => ({
    name,
    age: Math.round(Math.random() * 30),
}));

export const nameKey = 'name';
