import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '@carbon/styles/css/styles.css'
import '@meua/theme/tokens.css'
import '@meua/theme/manageengine.css'
import { Theme, Button, TextInput, Link, Toggle } from '@carbon/react'

function App() {
  const [dark, setDark] = useState(false)
  const themeAttr = dark ? 'manageengine-dark' : 'manageengine'

  return (
    <Theme theme={dark ? 'g100' : 'g10'} as="main" data-carbon-theme={themeAttr}>
      <div style={{ display: 'grid', gap: 16, padding: 24 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Toggle id="dark" labelText="Dark mode" toggled={dark} onToggle={setDark} />
          <span>{dark ? 'Dark' : 'Light'} · {themeAttr}</span>
        </div>

        <h2>MEUA theme smoke test</h2>
        <Button kind="primary">Primary</Button>
        <Button kind="secondary">Secondary</Button>
        <TextInput labelText="Email" placeholder="you@company.com" />
        <Link href="#">Branded link</Link>
      </div>
    </Theme>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
)
