import { memo } from 'react'
import { taskImages } from '../mock/taskImages'
import s from './ImageBox.module.scss'

export const ImageBox = memo(({ activeTaskId }: { activeTaskId: number }) => {
    const activeTask = taskImages.find(el => el.id === activeTaskId)

    return (
        <div
            className={`${s.imageBox} ${activeTask?.position === 'center' ? s.center : s.bottom}`}
        >
            {activeTask?.image}
        </div>
    )
})