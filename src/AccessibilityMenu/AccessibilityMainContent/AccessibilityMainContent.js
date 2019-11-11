import React from 'react'
import AccessibilityItems from '../AccessibilityItems/AccessibilityItems'
import { Container, Row, Col, Card } from 'react-bootstrap'

import classes from './AccessibilityMainContent.module.scss'
import sharedClasses from '../../shared/styles.module.scss'

const AccessibilityMainContent = props => {
  return (
    <div className={`px-3 ${classes.root}`}>
      <AccessibilityItems />

      <Container className='mb-4'>
        <Row className='pb-3'>
          <Col xs={6} className='px-0'>
            <Card>
              <Card.Body className='text-center py-2'>
                <Card.Text className={sharedClasses.textSmall}>
                  Reset all
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} className='px-0'>
            <Card>
              <Card.Body className='text-center py-2 px-2'>
                <Card.Text className={sharedClasses.textSmall}>
                  Move/Hide panel
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className='px-0'>
            <Card>
              <Card.Body className='text-center py-2 px-2'>
                <Card.Text className={sharedClasses.textSmall}>
                  White label this widget
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className={classes.preFooter}>
        <h6 className='text-uppercase m-0'>
          <span className='text-primary'>user</span>way
        </h6>
        <div>
          <img src='assets/icons/feedback.svg' alt='' className='mr-3' />
          <img src='assets/icons/gear.svg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default AccessibilityMainContent
