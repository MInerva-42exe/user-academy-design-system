import type { Preview } from '@storybook/react'
import { Theme } from '@carbon/react'
import '@carbon/styles/css/styles.css'
import '../src/theme/tokens.css'
import '../src/theme/manageengine.css'

export const globalTypes = {
  brandTheme: {
    name: 'Theme',
    defaultValue: 'manageengine',
    toolbar: {
      items: [
        { value: 'manageengine', title: 'Light (manageengine)' },
        { value: 'manageengine-dark', title: 'Dark (manageengine-dark)' },
      ],
    },
  },
  density: {
    name: 'Density',
    defaultValue: 'comfortable',
    toolbar: { items: ['comfortable', 'compact'] },
  },
}

export const decorators = [
  (Story, ctx) => {
    const brand =
      (ctx.globals.brandTheme as 'manageengine' | 'manageengine-dark') ?? 'manageengine'
    const carbonTheme = brand === 'manageengine-dark' ? 'g100' : 'g10'

    return (
      <Theme
        theme={carbonTheme}
        as="main"
        data-carbon-theme={brand}
        data-density={ctx.globals.density}
        style={{ padding: 24 }}
      >
        <Story />
      </Theme>
    )
  },
]

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
}
export default preview
