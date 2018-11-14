import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'

const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Simple Form Ajax',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render () {
    const { name, subject, action } = this.props

    return (
      <form
        className='EnquiryForm'
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        {this.state.alert && (
          <div className='EnquiryForm--Alert'>{this.state.alert}</div>
        )}
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Venue Name'
            name='venue_name'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Venue Address'
            name='venue_address'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Sales office phone'
            name='venue_sales_office_phone'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Sales office email'
            name='venue_sales_office_email'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Rating'
            name='venue_rating'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Chain'
            name='venue_chain'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Nearest airport'
            name='venue_nearest_airport'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Loyalty program name'
            name='venue_loyalty_program_name'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Union or non-union?'
            name='venue_union_status'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Sleeping rooms totals'
            name='venue_sleeping_rooms_totals'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Rooms tax'
            name='venue_rooms_tax'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Resort Fee'
            name='venue_resort_fee'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Wifi price'
            name='venue_wifi_price'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Onsite parking fee'
            name='venue_onsite_parking_fee'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Meeting Space Total'
            name='venue_meeting_space_total'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Meeting Space: Largest Room 1'
            name='venue_meeting_space_largest_1'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Meeting Space: Largest Room 2'
            name='venue_meeting_space_largest_2'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Number of meeting rooms'
            name='venue_number_of_meeting_rooms'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Public Wifi Space Fee'
            name='venue_public_wifi_space_fee'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Inhouse AV Company'
            name='venue_inhouse_av_company'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Business Center'
            name='venue_business_center'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Sales Tax'
            name='venue_sales_tax'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Service Charge'
            name='venue_service_charge'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Custom menu availability?'
            name='venue_custom_menu'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Restaurants Onsite Total'
            name='venue_restaurants_onsite'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Fitness Center? (Y/N)'
            name='venue_fitness_center'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Pool?'
            name='venue_pool'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Spa?'
            name='venue_spa'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Golf?'
            name='venue_golf'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Pet Policy'
            name='venue_pet_policy'
            required
          />
        </label>

        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Airport shuttle'
            name='venue_airport_shuttle'
            required
          />
        </label>

        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={name} />
        <input
          className='Button EnquiryForm--SubmitButton'
          type='submit'
          value='Submit'
          disabled={this.state.disabled}
        />
      </form>
    )
  }
}

export default Form
