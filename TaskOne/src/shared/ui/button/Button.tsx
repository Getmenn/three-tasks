import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

import s from './Button.module.scss';

export enum ButtonTheme {
    SIMPLE = 'simple',
    OUTLINE = 'outline',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
}

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children: ReactNode;
    size?: ButtonSize;
}

export const Button = memo((props: IProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.SIMPLE,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(s.button, className, s[size], s[theme])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
