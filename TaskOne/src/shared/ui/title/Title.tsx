import classNames from 'classnames';
import { HTMLAttributes, memo, ReactNode } from 'react';

import s from './Title.module.scss';

export enum TitleSize {
    M = 'sizeM',
    L = 'sizeL',
}

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    children: ReactNode;
    size?: TitleSize;
}

export const Title = memo(({
    children,
    className,
    size = TitleSize.M,
    ...otherProps
}: IProps) => {
    return (
        <h1
            className={classNames(s.title, s[size], className)}
            {...otherProps}
        >
            {children}
        </h1>
    );
});
