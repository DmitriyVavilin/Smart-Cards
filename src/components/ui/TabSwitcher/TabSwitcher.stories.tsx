// Tabs.stories.tsx
import type { Meta, Story } from '@storybook/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './TabSwitcher' // Подставьте свой путь к компоненте

const meta: Meta = {
  component: Tabs,
  parameters: {
    tags: ['autodocs'],
  },
  title: 'Components/Tabs',
}

export default meta

type TemplateType = (args: Record<string, unknown>) => JSX.Element

// Tabs
const TabsTemplate: TemplateType = args => (
  <Tabs {...args}>
    <TabsList>
      <TabsTrigger defaultValue={'1'} value={'1'}>
        Tab 1
      </TabsTrigger>
      <TabsTrigger value={'2'}>Tab 2</TabsTrigger>
      <TabsTrigger value={'3'}>Tab 3</TabsTrigger>
    </TabsList>
    <TabsContent value={'1'}>
      <div>Content 1</div>
    </TabsContent>
    <TabsContent value={'2'}>
      <div>Content 2</div>
    </TabsContent>
    <TabsContent value={'3'}>
      <div>Content 3</div>
    </TabsContent>
  </Tabs>
)

export const Default: Story = TabsTemplate.bind({})
Default.args = {}

export const TabsWithDisabled: Story = args => (
  <Tabs {...args}>
    <TabsList>
      <TabsTrigger value={'1'}>First Tab</TabsTrigger>
      <TabsTrigger disabled value={'2'}>
        Second Tab
      </TabsTrigger>
      <TabsTrigger value={'3'}>Third Tab</TabsTrigger>
    </TabsList>
    <TabsContent value={'2'}>
      <div>First Content</div>
      <div>Second Content</div>
      <div>Third Content</div>
    </TabsContent>
  </Tabs>
)
TabsWithDisabled.args = {}

export const TabsWithIcons: Story = args => (
  <Tabs {...args}>
    <TabsList>
      <TabsTrigger value={'1'}>
        <span aria-label={'Cat'} role={'img'}>
          🐱
        </span>
      </TabsTrigger>
      <TabsTrigger value={'2'}>
        <span aria-label={'Dog'} role={'img'}>
          🐶
        </span>
      </TabsTrigger>
      <TabsTrigger value={'3'}>
        <span aria-label={'Bird'} role={'img'}>
          🦜
        </span>
      </TabsTrigger>
    </TabsList>
    <TabsContent value={'3'}>
      <div content={'3'}>Cat Content</div>
      <div>Dog Content</div>
      <div>Bird Content</div>
    </TabsContent>
  </Tabs>
)
TabsWithIcons.args = {}
