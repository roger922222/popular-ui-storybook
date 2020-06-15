import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    /*
    * class值
    */
    className?: string;
    /**
     * 设置Button的禁用
     */
    disabled?: boolean;
    /**
     *  设置Button的尺寸
     */
    size: ButtonSize;
    /**
     * 设置Button的类型
     */
    btnType?: ButtonType;
    children: React.ReactNode; 
    href?: string;
    style?: React.CSSProperties
}

// 拿到所有button元素的属性 React.ButtonHTMLAttributes<HTMLElement> 不能通过联合类型去组合 |

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // Partial a与button标签属性和自定义属性混合在一起，但都是可选的  ？

/**
 * 
 *  ## Button 按钮
 * ~~~js
 * import { Button } from 'popular-ui'
 * ~~~
 */
export const Button: FC<ButtonProps> = props => {
    const { 
        btnType,
        disabled,
        className,
        size,
        children,
        href,
        ...restProps
    } = props

    // btn, btn-lg, btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
     })

     if (btnType === 'link' && href) {
         return (
         <a
            className={classes}
            href={href}
            { ...restProps }
         >{children}</a>
         )
     } else {
         return (
         <button
            className={classes}
            disabled={disabled}
            { ...restProps }
         >{children}</button>
         )
     }
}

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

export default Button;