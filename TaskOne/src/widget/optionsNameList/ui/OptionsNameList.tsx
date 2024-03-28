import { getOptionsText } from '@/shared/utils/getOptionstText';

import s from './OptionsNameList.module.scss';

export const OptionsNameList = () => {
    return (
        <div className={s.optionsList}>
            <ul>
                <li className={s.item}>
                    Количество ответов и&nbsp;дней доступа
                </li>
                <li className={s.item} dangerouslySetInnerHTML={{ __html: getOptionsText('formZero') }} />
                <li className={s.item} dangerouslySetInnerHTML={{ __html: getOptionsText('hardLogic') }} />
                <li className={s.item} dangerouslySetInnerHTML={{ __html: getOptionsText('withoutExcel') }} />
                <li className={s.item} dangerouslySetInnerHTML={{ __html: getOptionsText('utmPoints') }} />
                <li className={s.item} dangerouslySetInnerHTML={{ __html: getOptionsText('dynamicLogic') }} />
                <li className={s.item} dangerouslySetInnerHTML={{ __html: getOptionsText('withoutLogo') }} />
                <li className={s.item} dangerouslySetInnerHTML={{ __html: getOptionsText('sendEmail') }} />
            </ul>
        </div>
    );
};
