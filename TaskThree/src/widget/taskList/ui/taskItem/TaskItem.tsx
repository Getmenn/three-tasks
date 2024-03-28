import s from './TaskItem.module.scss'

export const TaskItem = () => {
    return (
        <li className={s.taskItem}>
            {/* icon */}
            <h3>Title</h3>
            <p>text</p>
        </li>
    )
}