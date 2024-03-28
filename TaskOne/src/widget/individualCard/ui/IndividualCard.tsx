import { Button, ButtonTheme, Title } from '@/shared/ui';

import s from './IndividualCard.module.scss';

export const IndividualCard = () => {
    return (
        <div className={s.individualCard}>
            <div className={s.titleWrapper}>
                <div className={s.circle} />
                <Title className={s.individualTitle}>
                    Индивидуальный
                </Title>
            </div>
            <p className={s.text}>
                Оставьте заявку, если вам нужен большой объем, API или готовая интеграция.
                Стоимость рассчитаем исходя из&nbsp;ваших задач.
            </p>
            <Button className={s.button} theme={ButtonTheme.OUTLINE}>
                Оставить заявку
            </Button>
        </div>
    );
};
