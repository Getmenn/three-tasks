export type sizeType = 'XS' | 'L' | 'M';

export interface ICard {
    id: number;
    title: string;
    size: sizeType;
    price: number;
    buttonText: string
    pricePerMonth?: number;
    countUnswer: string;
    formZero: boolean;
    hardLogic: boolean;
    withoutExcel: boolean;
    utmPoints: boolean;
    dynamicLogic?: string;
    withoutLogo?: string;
    sendEmail?: string;
}

export type LiTypes = 'countUnswer' | 'formZero' | 'hardLogic'
    | 'withoutExcel' | 'utmPoints'
    | 'dynamicLogic' | 'withoutLogo'
    | 'sendEmail'

export const cards: ICard[] = [
    {
        id: 1,
        title: 'Бесплатный доступ, чтобы запускать небольшие опросы от&nbsp;случая к&nbsp;случаю',
        size: 'XS',
        price: 0,
        buttonText: 'Создать опрос',
        countUnswer: 'До&nbsp;50&nbsp;ответов на&nbsp;30&nbsp;дней',
        formZero: true,
        hardLogic: true,
        withoutExcel: true,
        utmPoints: false,
    },
    {
        id: 2,
        title: 'Доступ на&nbsp;2&nbsp;месяца, чтобы начать проводить опросы регулярно',
        size: 'M',
        price: 4000,
        buttonText: 'Оставить заявку',
        pricePerMonth: 2000,
        countUnswer: 'До&nbsp;500 ответов на&nbsp;60&nbsp;днейй',
        formZero: true,
        hardLogic: true,
        withoutExcel: true,
        utmPoints: true,
        dynamicLogic: '(Май 2021)',
    },
    {
        id: 3,
        title: 'Доступ на&nbsp;год, чтобы постоянно собирать обратную связь и&nbsp;не&nbsp;думать о&nbsp;лимитах',
        size: 'L',
        price: 20000,
        buttonText: 'Оставить заявку',
        pricePerMonth: 1667,
        countUnswer: 'До&nbsp;10&nbsp;000 ответов на&nbsp;365 дней',
        formZero: true,
        hardLogic: true,
        withoutExcel: true,
        utmPoints: true,
        dynamicLogic: '(Май 2021)',
        withoutLogo: '(Май 2021)',
        sendEmail: '(Июнь 2021)',
    },
];
