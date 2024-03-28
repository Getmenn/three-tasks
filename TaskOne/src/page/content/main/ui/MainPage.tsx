import { Title, TitleSize } from '@/shared/ui';
import { IndividualCard } from '@/widget/individualCard';
import { OptionsNameList } from '@/widget/optionsNameList';
import { TariffList } from '@/widget/tariffList';

import s from './MainPage.module.scss';

export const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <Title size={TitleSize.L}>
                Тарифы
            </Title>
            <main className={s.tableWrapper}>
                <OptionsNameList />
                <TariffList />
            </main>
            <IndividualCard />
        </div>
    );
};
