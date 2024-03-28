import classNames from 'classnames';

import { Button, ButtonTheme } from '@/shared/ui';

import { ICard, sizeType } from '../../mock/mock';
import { OptionsItem } from '../optionsItem/OptionsItem';
import s from './TariffCard.module.scss';

interface IProps {
    className?: string;
    active: boolean;
    card: ICard;
    setCardActiv: (size: sizeType) => void
}

export const TariffCard = ({ className, active, card, setCardActiv }: IProps) => {
    return (
        <li
            className={classNames(s.tariffCard, className, { [s.active]: active })}
            onClick={() => setCardActiv(card.size)}
        >
            <div className={s.titleWrapper}>
                <div className={classNames(s.sizeIcon, { [s.activeSize]: active })}>
                    {card.size}
                </div>
                <h4 className={s.title} dangerouslySetInnerHTML={{ __html: card.title }} />
            </div>
            <ul className={s.list}>
                <OptionsItem
                    liType="countUnswer"
                    visible={Boolean(card.countUnswer)}
                    content={card.countUnswer}
                />
                <OptionsItem liType="formZero" visible={card.formZero} />
                <OptionsItem liType="hardLogic" visible={card.hardLogic} />
                <OptionsItem liType="withoutExcel" visible={card.withoutExcel} />
                <OptionsItem liType="utmPoints" visible={card.utmPoints} />
                <OptionsItem
                    liType="dynamicLogic"
                    visible={Boolean(card.dynamicLogic)}
                    content={card.dynamicLogic}
                />
                <OptionsItem
                    liType="withoutLogo"
                    visible={Boolean(card.withoutLogo)}
                    content={card.withoutLogo}
                />
                <OptionsItem
                    liType="sendEmail"
                    visible={Boolean(card.sendEmail)}
                    content={card.sendEmail}
                />
            </ul>
            <div className={s.priceAndButton}>
                <div className={s.priceWrapper}>
                    <span className={s.price}>
                        {`${card.price.toLocaleString('ru-RU')} руб.`}
                    </span>
                    {card.pricePerMonth && (
                        <span className={s.pricePerMonth}>
                            {`${card.pricePerMonth.toLocaleString('ru-RU')} руб/месяц`}
                        </span>
                    )}
                </div>
                <Button
                    theme={active ? ButtonTheme.SIMPLE : ButtonTheme.OUTLINE}
                >
                    {card.buttonText}
                </Button>
            </div>
        </li>
    );
};
