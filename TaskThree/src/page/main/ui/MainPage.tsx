import { Button, Title } from '@/shared/ui';
import s from './MainPage.module.scss';
import { useState } from 'react';
import { TaskList } from '@/widget/taskList';
import { ImageBox } from '@/widget/imageBox';

export const MainPage = () => {
    const [activeTask, setActiveTask] = useState<number>(1);

    return (
        <div className={s.mainPage}>
            <Title className={s.title}>
                Решайте задачи, опираясь
                на&nbsp;данные о&nbsp;рынке труда
            </Title>
            <main className={s.main}>
                <TaskList activeTask={activeTask} setActiveTask={setActiveTask} />
                <ImageBox activeTaskId={activeTask} />
            </main>
            <Button>Перейти к статистике</Button>
        </div>
    );
};
