import { HTMLAttributes, memo, ReactNode } from 'react';

import s from './Title.module.scss';

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    children: ReactNode;
}

export const Title = memo(({
    children,
    className = '',
    ...otherProps
}: IProps) => {
    return (
        <h1
            className={`${s.title} ${className}`}
            {...otherProps}
        >
            {children}
        </h1>
    );
});
