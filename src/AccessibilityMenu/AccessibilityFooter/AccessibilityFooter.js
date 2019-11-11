import React from 'react'

import classes from './AccessibilityFooter.module.scss'
import sharedClasses from '../../shared/styles.module.scss'

const AccessibilityFooter = props => {
  return (
    <div className={`py-3 px-3 ${classes.footer}`}>
      <p className={`${sharedClasses.textSmaller} m-0`}>
        Accessibility by UserWay.org
      </p>
      <p
        className={`text-uppercase text-success m-0 ${sharedClasses.textSmall}`}
      >
        donate
      </p>
    </div>
  )
}

export default AccessibilityFooter
