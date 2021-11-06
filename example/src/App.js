import React from 'react'

import { ButtonComponent } from 'uisez'
import 'uisez/dist/index.css'

const App = () => {
  return (
  <>
  <ButtonComponent type="default" text="Button" />
  <ButtonComponent type="primary" text="Button" />
  <ButtonComponent type="text" text="Button" />
  <ButtonComponent type="link" text="Button" />
  <ButtonComponent type="dashed" text="Button" />
  </>)
}

export default App;
