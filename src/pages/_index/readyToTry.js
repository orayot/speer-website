import React from 'react'

import Button from 'components/ui/button'
import rocketOnBack from 'assets/images/illustrations/rocket-on-back.svg'

const ReadyToTry = () => (<div className='tc pv6' style={{}}>
  <div className='pv4'>
    <div className='lighter-gray f4 mb3'>Ready to try Speer ?</div>
    <Button label='Get started' href='' backgroundColor='blue' size='large'/>
    <div className='lighter-gray f6 mt1 pl2'>Free for 7 days, no card required</div>
  </div>

  <div className='fr' style={{marginTop: -199}}>
    <img src={rocketOnBack} />
  </div>
</div>)

export default ReadyToTry