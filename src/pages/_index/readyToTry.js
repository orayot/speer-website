import React from 'react'

import Button from 'components/ui/button'
import rocketOnBack from 'assets/images/illustrations/rocket-on-back.svg'
import injectIsMobile from 'components/injectIsMobile'

const ReadyToTry = ({isMobile}) => (
  <div className="tc pv6" style={{}}>
    <div className="pv4">
      <div className="lighter-gray f4 mb3">Ready to try Speer ?</div>
      <Button label="Get started" href="" backgroundColor="blue" size="large" />
      <div className="lighter-gray f6 mt1 pl2">
        Free for 7 days, no card required
      </div>
    </div>

    <div className="fr" style={{ marginTop: isMobile ? 8 : -199 }}>
      <img src={rocketOnBack} className={`${isMobile ? 'h4' : ''}`} />
    </div>
  </div>
)

export default injectIsMobile(ReadyToTry)
