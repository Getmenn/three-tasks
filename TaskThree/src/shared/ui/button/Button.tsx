import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import s from './Button.module.scss';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

export const Button = memo((props: IProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(s.button, className)}
            {...otherProps}
        >
            {children}
        </button>
    );
});
