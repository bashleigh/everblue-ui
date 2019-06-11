import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

export type EverblueProviderProps = {
  theme?: any
  children: React.ReactChild
}

const EverblueProvider: React.FC<EverblueProviderProps> = ({ children, theme: userTheme }) => {
  function mergeThemes() {
    if (userTheme) {
      return { ...theme, ...userTheme }
    }
    return theme
  }
  return <ThemeProvider theme={mergeThemes()}>{children}</ThemeProvider>
}

export default EverblueProvider

EverblueProvider.defaultProps = {
  theme: null
}
