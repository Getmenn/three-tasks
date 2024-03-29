import FirstImg from '@/shared/assets/image/first.png'
import SecondImg from '@/shared/assets/image/two.png'
import ThirdImg from '@/shared/assets/image/three.png'
import FourthImg from '@/shared/assets/image/four.png'
import { ImgHTMLAttributes, ReactElement } from 'react';

interface ITaskImages {
    id: number,
    position: 'center' | 'bottom';
    image: ReactElement<ImgHTMLAttributes<HTMLImageElement>>;

}

export const taskImages: ITaskImages[] = [
    {
        id: 1,
        position: 'center',
        image: <img src={FirstImg} alt="users block" />
    },
    {
        id: 2,
        position: 'bottom',
        image: <img src={SecondImg} alt="work block" />
    },
    {
        id: 3,
        position: 'bottom',
        image: <img src={ThirdImg} alt="products block" />
    },
    {
        id: 4,
        position: 'bottom',
        image: <img src={FourthImg} alt="article block" />
    }
]