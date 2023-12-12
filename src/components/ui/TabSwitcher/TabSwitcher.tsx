import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'
const Tabs = TabsPrimitive.Root

const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => <TabsPrimitive.List className={s.list} ref={ref} {...props} />)

TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger className={s.trigger} ref={ref} {...props} />
))

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content className={s.content} ref={ref} {...props} />
))

TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
