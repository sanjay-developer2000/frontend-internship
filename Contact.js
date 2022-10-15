import React from 'react'
import "./contact.css"

function Contact() {
  return (<>
    <div className=''>
      <h1 className='display-3'> <b>contact us</b></h1>
    </div>
    <div className='heading'>
      <h3 style={{ color: 'skyblue' }}>Get in touch</h3>
    </div>
    <p className='text' ><b>FreshBooks is helping thousands of people do business . If you have any questions about our<br />
      products or services , please call one of our toll - free numbers below or email FreshBooks using<br />
      the contact form below .</b></p>

    <div>
      <h5><b>STOPEE</b></h5>
      167,A kandiyar street,Ambalapattu<br />
      north,
      orathanadu tk,<br />thanjavur-DT,
      614626<br />

    </div>
    <div className='contact'>
      <b>Toll Free (North America):</b> 1.866.303.6061<br />
      <b>Toll Free (hustaia):</b> 1.800.218.731<br />
      <b>Freephone (UK):</b> 0808.101.3408<br />

      <b>Freephone treland):</b> 1.800,949,046<br />

      <b>Phone:</b> +1.416.481.6946<br />

      <b>Fax:</b> 416.481.3800<br />

      <b>Office Hours:</b>

      ‘Monday ~ Friday: 8am - 8pm EDT<br />

      tis currently 20:04 AM on Tuesday'n Toronto.<br />
    </div>
    <div>
      <button className='btn-primary' >Any Questions</button>
    </div>

    <div className='row'>
      <div className='card1'>
        <h5><b>Have a questions?</b></h5>
        <p>Check out our support section,where<br /> you'll find answer to common questions<br />using freshbooks</p>
      </div>
      <div className='card2'>
        <h5><b>We're hiring</b></h5>
        <p>‘We're looking for talented people to join<br />
          ‘our tight sit team, Vist our careers nage<br />
          tofind out what exciting postions are<br />
          available at FreshBooks.</p>
      </div>
      <div className='card3'>
        <h5><b>Press center</b></h5>
        <p>‘Visit our Press Centre to See what others<br />
          ‘are saying about FreshBooks,
        </p>
      </div>

    </div>








  </>
  )
}
export default Contact
