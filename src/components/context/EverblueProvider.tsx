import * as React from 'react'

interface EverblueProviderProps {}

// TODO: Implement provider to handle global alert & modal state
const EverblueProvider: React.FC<EverblueProviderProps> = ({ children }) => {
  return <div>{children}</div>
}

export default EverblueProvider
