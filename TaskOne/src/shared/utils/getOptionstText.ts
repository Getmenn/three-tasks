import { LiTypes } from '../../widget/tariffList/mock/mock';

export const getOptionsText = (liType: LiTypes) => {
    switch (liType) {
    case 'formZero':
        return 'Анкета с&nbsp;нуля и&nbsp;готовые шаблоны';
    case 'hardLogic':
        return 'Сложная логика опроса';
    case 'withoutExcel':
        return 'Отображение результатов без excel';
    case 'utmPoints':
        return 'UTM-метки в&nbsp;ссылке на&nbsp;опрос';
    case 'dynamicLogic':
        return 'Динамическая логика ответов ';
    case 'withoutLogo':
        return 'Без логотипа в&nbsp;опросах ';
    case 'sendEmail':
        return 'Отправка писем ';
    default:
        return '';
    }
};
