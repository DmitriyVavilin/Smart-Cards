import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import CloseIcon from '@/assets/closeIcon'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Close, Content, Portal, Root } from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type ModalProps = {
  children?: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
} & ComponentPropsWithoutRef<typeof Root>

export const Modal = forwardRef<ElementRef<typeof Root>, ModalProps>(
  ({ children, open, setOpen, title, ...rest }, ref) => {
    return (
      <Root onOpenChange={setOpen} open={open}>
        {open && (
          <Portal forceMount>
            <div ref={ref} {...rest}>
              <Content className={s.content} forceMount>
                <Card>
                  <div className={s.header}>
                    <Typography className={s.title} variant={'h2'}>
                      {title}
                    </Typography>
                    <Close asChild className={s.close}>
                      <CloseIcon />
                    </Close>
                  </div>
                  <div>{children}</div>
                </Card>
              </Content>
            </div>
          </Portal>
        )}
      </Root>
    )
  }
)
