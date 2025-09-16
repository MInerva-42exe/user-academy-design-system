import React from 'react'
import type { Preview } from '@storybook/react'
import '@carbon/styles/css/styles.css'
import '@meua/theme/tokens.css'
import '@meua/theme/manageengine.css'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Light/Dark theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light (manageengine)' },
        { value: 'dark',  title: 'Dark (manageengine-dark)' },
      ],
      dynamicTitle: true,
    },
  },
  density: {
    name: 'Density',
    description: 'Control size density',
    defaultValue: 'comfortable',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'comfortable', title: 'Comfortable' },
        { value: 'compact',     title: 'Compact' },
      ],
      dynamicTitle: true,
    },
  },
}

export const decorators = [
  (Story, context) => {
    const isDark = context.globals.theme === 'dark'
    const dataTheme = isDark ? 'manageengine-dark' : 'manageengine'
    const density = context.globals.density || 'comfortable'
    return (
      <div data-carbon-theme={dataTheme} data-density={density} style={{ padding: 24 }}>
        <Story />
      </div>
    )
  },
]

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
}
export default preview
