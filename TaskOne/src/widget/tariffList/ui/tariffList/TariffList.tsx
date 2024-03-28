import { useState } from 'react';

import { cards, sizeType } from '../../mock/mock';
import { TariffCard } from '../tariffCard/TariffCard';
import s from './TariffList.module.scss';

export const TariffList = () => {
    const [cardActiv, setCardActiv] = useState<sizeType>('M');

    return (
        <ul className={s.tariffList}>
            {cards.map((el) => (
                <TariffCard
                    key={el.id}
                    card={el}
                    active={el.size === cardActiv}
                    setCardActiv={setCardActiv}
                />
            ))}
        </ul>
    );
};
