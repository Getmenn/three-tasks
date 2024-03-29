import UserSvg from '@/shared/assets/svg/user.svg'
import BriefcaseSvg from '@/shared/assets/svg/briefcase.svg'
import ChartSvg from '@/shared/assets/svg/chart.svg'
import EnvelopeSvg from '@/shared/assets/svg/envelope.svg'
import { ImgHTMLAttributes, ReactElement } from 'react'

export interface ITask {
    id: number;
    icon: ReactElement<ImgHTMLAttributes<HTMLImageElement>>;
    title: string;
    text: string;
}

export const tasks: ITask[] = [
    {
        id: 1,
        title: 'Для поиска сотрудников',
        icon: <img src={UserSvg} alt="briefcase icon" />,
        text: 'Следите за&nbsp;тенденциями рынка, чтобы вовремя корректировать стратегию подбора персонала. Оценивайте средние зарплатыв&nbsp;разных регионах и&nbsp;профобластях. Находите регионы-доноры, откуда можно привлекать сотрудников.',
    },
    {
        id: 2,
        title: 'Для поиска работы',
        icon: <img src={BriefcaseSvg} alt="briefcase icon" />,
        text: 'Изучайте уровень конкуренции в&nbsp;интересующих вас профобластях и&nbsp;регионах с&nbsp;помощью показателя hr.индекс,а&nbsp;также средний уровень зарплат и&nbsp;динамику вакансий.',
    },
    {
        id: 3,
        title: 'Для запуска новых продуктов',
        icon: <img src={ChartSvg} alt="briefcase icon" />,
        text: 'Изучайте ситуацию на&nbsp;рынке труда, чтобы понимать возможности аудитории в&nbsp;разных городах и&nbsp;регионах. Оценивайте востребованность профессий, если вы&nbsp;планируете запуск новых образовательных продуктов.',
    },
    {
        id: 4,
        title: 'Для статей и отчётов о ситуации на рынке',
        icon: <img src={EnvelopeSvg} alt="briefcase icon" />,
        text: 'Собирайте нужные для ваших аналитических материалов данные самостоятельно и&nbsp;онлайн. Статистика поможет составить достоверную картину о&nbsp;ситуации в&nbsp;разных регионах и&nbsp;профессиональных сферах.',
    },
]