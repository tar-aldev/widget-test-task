import React from 'react'
import AccessibilityHeader from './AccessibilityHeader/AccessibilityHeader'
import AccessibilityFooter from './AccessibilityFooter/AccessibilityFooter'
import AccessibilityMainContent from './AccessibilityMainContent/AccessibilityMainContent'

import classes from './AccessibilityMenu.module.scss'

const AccessibilityMenu = () => {
  return (
    <div className={classes.root}>
      <AccessibilityHeader />
      <AccessibilityMainContent />
      <AccessibilityFooter />
    </div>
  )
}

export default AccessibilityMenu
