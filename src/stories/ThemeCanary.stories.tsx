import type { Meta, StoryObj } from '@storybook/react'
import { Button, TextInput, Link, Toggle } from '@carbon/react'

const Swatch = ({ name, varName }: { name: string; varName: string }) => (
  <div style={{
    border: '1px solid var(--cds-border-subtle-01)',
    borderRadius: 8,
    padding: 12,
    display: 'grid',
    gap: 8,
    alignItems: 'center'
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
      <strong>{name}</strong>
      <code style={{ opacity: 0.7 }}>{varName}</code>
    </div>
    <div style={{
      height: 40,
      borderRadius: 6,
      background: `var(${varName})`,
      boxShadow: varName.includes('focus') ? 'var(--meua-shadow-focus)' : undefined,
      border: '1px solid var(--cds-border-subtle-01)'
    }}/>
  </div>
)

const meta: Meta = { title: 'MEUA/Theme Canary' }
export default meta
type S = StoryObj

export const TokensAndStates: S = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, padding: 16 }}>
      <section>
        <h3>Interactive States</h3>
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button kind="primary">Primary</Button>
            <Button kind="secondary">Secondary</Button>
            <TextInput labelText="Email" placeholder="you@company.com" />
            <Link href="#">Branded link</Link>
            <Toggle id="tg" labelText="Toggle" />
          </div>
          <small style={{ opacity: 0.7 }}>
            • Hover primary to see hover color • Press Tab to see focus ring • Check link hover
          </small>
        </div>
      </section>

      <section>
        <h3>Key CSS Variables (live)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
          <Swatch name="Background" varName="--cds-background" />
          <Swatch name="Layer 01" varName="--cds-layer-01" />
          <Swatch name="Text Primary" varName="--cds-text-primary" />
          <Swatch name="Text On Color" varName="--cds-text-on-color" />
          <Swatch name="Link Primary" varName="--cds-link-primary" />
          <Swatch name="Border Subtle 01" varName="--cds-border-subtle-01" />
          <Swatch name="Focus Ring" varName="--cds-focus" />
          <Swatch name="Button Primary" varName="--cds-button-primary" />
          <Swatch name="Button Hover" varName="--cds-button-primary-hover" />
        </div>
      </section>
    </div>
  ),
}
