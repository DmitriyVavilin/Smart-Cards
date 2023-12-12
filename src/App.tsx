import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/TabSwitcher/TabSwitcher'

export function App() {
  return (
    <div>
      <Tabs>
        <TabsList>
          <TabsTrigger value={'1'}>Tab 1</TabsTrigger>
          <TabsTrigger value={'2'}>Tab 2</TabsTrigger>
        </TabsList>

        <TabsContent value={'1'}>Content 1</TabsContent>
        <TabsContent value={'2'}>Content 2</TabsContent>
      </Tabs>
    </div>
  )
}
