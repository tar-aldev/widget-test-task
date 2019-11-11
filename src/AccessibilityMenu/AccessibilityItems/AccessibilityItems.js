import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'

import classes from './AccessibilityItems.module.scss'
import sharedClasses from '../../shared/styles.module.scss'

const ACCESSIBILITY_ITEMS = [
  {
    icon: 'keyboard.svg',
    title: 'Keyboard Nav'
  },
  {
    icon: 'read-page.svg',
    title: 'Read Page'
  },
  {
    icon: 'contrast.svg',
    title: 'Contrast +'
  },
  {
    icon: 'animation.svg',
    title: 'Stop Animations'
  },
  {
    icon: 'bigger-text.svg',
    title: 'Bigger Text'
  },
  {
    icon: 'legible-fonts.svg',
    title: 'Legible Fonts'
  },
  {
    icon: 'cursor.svg',
    title: 'Big Cursor'
  },
  {
    icon: 'tooltips.svg',
    title: 'Tooltips'
  },
  {
    icon: 'link.svg',
    title: 'Highlight Links'
  },
  {
    icon: 'structure.svg',
    title: 'Page Structure'
  }
]

const AccessibilityItems = props => {
  return (
    <Container>
      <Row className='py-3'>
        {ACCESSIBILITY_ITEMS.map((accessibilityItem, index) => (
          <Col
            xs={6}
            className='p-0'
            key={`${accessibilityItem.title}-${index}`}
          >
            <Card className={classes.card}>
              <Card.Body className='text-center px-2 py-3'>
                <img
                  src={`/assets/icons/${accessibilityItem.icon}`}
                  width='32'
                  height='32'
                  alt={accessibilityItem.title}
                />
                <Card.Text
                  className={`${classes.accessibilityItemTitle} ${
                    sharedClasses.textSmall
                  }`}
                >
                  {accessibilityItem.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AccessibilityItems
