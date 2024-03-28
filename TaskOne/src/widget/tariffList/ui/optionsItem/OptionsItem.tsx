import classNames from 'classnames';
import { memo } from 'react';

import CrossSvg from '@/shared/assets/svg/cross.svg';
import MarkerSvg from '@/shared/assets/svg/marker.svg';

import { getOptionsText } from '../../../../shared/utils/getOptionstText';
import { LiTypes } from '../../mock/mock';
import s from './OptionsItem.module.scss';

interface IProps {
    liType: LiTypes;
    content?: string;
    visible: boolean;
}

export const OptionsItem = memo(({ liType, content, visible }: IProps) => {
    const optionsText = getOptionsText(liType);
    const isContentField = liType === 'countUnswer' || liType === 'dynamicLogic'
        || liType === 'withoutLogo' || liType === 'sendEmail';

    return (
        <li className={classNames(s.optionsItem, { [s.visible]: !visible })}>
            <MarkerSvg className={classNames(s.marker, { [s.contentField]: isContentField })} />
            <CrossSvg className={s.cross} />
            {optionsText && <span className={s.optionsText} dangerouslySetInnerHTML={{ __html: optionsText }} />}
            {content && <span className={s.content} dangerouslySetInnerHTML={{ __html: content }} />}
        </li>
    );
});
