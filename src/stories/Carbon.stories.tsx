import type { Meta, StoryObj } from '@storybook/react'
import { Button, TextInput, Link } from '@carbon/react'

const meta: Meta = {
  title: 'MEUA/Carbon Smoke',
}
export default meta
type S = StoryObj

export const Buttons: S = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Button kind="primary">Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Link href="#">Branded link</Link>
    </div>
  ),
}

export const Form: S = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <TextInput labelText="Email" placeholder="you@company.com" />
    </div>
  ),
}
