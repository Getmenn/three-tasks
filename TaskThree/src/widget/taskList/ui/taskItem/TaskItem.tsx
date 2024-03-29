import { memo } from 'react';
import { ITask } from '../../mock/mock';
import s from './TaskItem.module.scss'

interface IProps {
    task: ITask;
    active: boolean;
    setActiveTask: (item: number) => void;
}

export const TaskItem = memo(({ task, active, setActiveTask }: IProps) => {
    const { icon, title, text } = task
    return (
        <li
            className={`${s.taskItem} ${active ? s.active : ''}`}
            onClick={() => setActiveTask(task.id)}
        >
            {icon}
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: text }} className={s.text} />
        </li>
    )
})