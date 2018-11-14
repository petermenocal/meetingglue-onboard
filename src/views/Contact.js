import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'

import PageHeader from '../components/PageHeader'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'
import './Contact.css'

var Datastore = require('nedb'),
  db = new Datastore({ filename: './form.db', autoload: true })
export default ({ fields }) => {
  // You can issue commands right away
  const { body, title, subtitle, featuredImage, address, phone, email } = fields
  return (
    <div className='Contact'>
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className='section Contact--Section1'>
        <div className='container Contact--Section1--Container'>
          <div>
            <Content source={body} />

            <div className='Contact--Details'>
              {email && (
                <a className='Contact--Details--Item' href={`mailto:${email}`}>
                  <Mail /> {email}
                </a>
              )}
            </div>
          </div>
          <div>
            <EnquiryFormSimpleAjax name='Simple Form Ajax' />
          </div>
        </div>
      </div>
    </div>
  )
}
