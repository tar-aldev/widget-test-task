import React from 'react'

import classes from './AccessibilityHeader.module.scss'

const AccessibilityHeader = () => {
  return (
    <div className={`${classes.header} bg-primary text-white p-3`}>
      <p className='m-0'>Accessibility menu</p>
      <i className='material-icons'>close</i>
    </div>
  )
}

export default AccessibilityHeader
