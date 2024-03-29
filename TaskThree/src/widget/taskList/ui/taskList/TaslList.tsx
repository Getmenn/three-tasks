import { tasks } from '../../mock/mock'
import { TaskItem } from '../taskItem/TaskItem'
import s from './TaskList.module.scss'

interface IProps {
    activeTask: number;
    setActiveTask: (item: number) => void;
}

export const TaskList = ({ activeTask, setActiveTask }: IProps) => {
    return (
        <ul className={s.taskList}>
            {tasks.map(el => <TaskItem key={el.id} task={el} active={activeTask === el.id} setActiveTask={setActiveTask} />)}
        </ul>
    )
}