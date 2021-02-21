import base from '@theme-ui/preset-base'

export const roboto = {
  ...base,
  colors: {
    text: '#202124',
    background: '#fff',
    primary: '#1a73e8',
    secondary: '#9c27b0',
    muted: '#f1f3f4',
  },
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: '"terminal_grotesque",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    monospace: '"Roboto Mono", monospace',
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
}

export default roboto
