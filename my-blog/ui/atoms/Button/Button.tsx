import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef, ReactNode, ForwardedRef } from 'react'
import { cx } from '@/utils/cx'
import styles from './Button.module.css'

export interface ButtonBaseProps {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'text' | 'icon'
  size?: 'sm' | 'md'
  textSize?: 'sm' | 'md' | 'lg'
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  justify?: 'flex-start' | 'center' | 'flex-end'
  isLoading?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
}

interface HTMLButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  href?: undefined
}

interface HTMLLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export type ButtonProps = ButtonBaseProps & (HTMLButtonProps | HTMLLinkProps)

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    textSize = 'md',
    alignItems = 'center',
    justify = 'center',
    isLoading,
    isReadOnly,
    isDisabled,
    className,
    ...rest
  } = props

  const styleProps = {
    className: cx(styles.root, className),
    'data-variant': variant,
    'data-size': size,
    'data-text-size': textSize,
    'data-loading': isLoading,
    'data-align-items': alignItems,
    'data-justify': justify,
    'data-readonly': isReadOnly,
    'data-disabled': isDisabled,
  }

  if (rest.href !== undefined) {
    return (
      <a ref={ref as ForwardedRef<HTMLAnchorElement>} {...styleProps} {...rest}>
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button ref={ref as ForwardedRef<HTMLButtonElement>} disabled={isDisabled} {...styleProps} {...rest}>
      <span>{children}</span>
    </button>
  )
})

Button.displayName = 'Button'
