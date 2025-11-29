import React from 'react'

import manThinking from 'assets/images/illustrations/man-thinking.svg'
import manExplaining from 'assets/images/illustrations/man-explaining.svg'
import Button from 'components/ui/button'
import injectIsMobile from 'components/injectIsMobile'

const CaseStudy = ({ title, body, isMobile }) => (
  <div className="cf mt3 pointer dim w-100 w-60-ns center-ns tl">
    <div className="w-10 fl">
      <div
        className="shadow-2 br2"
        style={{ height: isMobile ? 36 : 66, width: isMobile ? 28 : 50 }}
      />
    </div>
    <div className="w-90 fl mt0 mt2-ns pl3">
      <div className="b">{title}</div>
      <div className="lighter-gray">{body}</div>
    </div>
  </div>
)

const NotSure = ({ isMobile }) => (
  <div className="mv5">
    <div className="w-100 w-80-ns center-ns">
      <div className="cf">
        <div className="fl w-20">
          <img src={manThinking} className="h-100" />
        </div>
        <div className="fl w-60 ph3 ph0-ns mt5">
          <div className="tc">
            <div className="black-40 f3 f2-ns mb4">
              Not sure if Speer is for you ?
            </div>
            <Button
              label="Contact a buying assistant"
              href=""
              backgroundColor="white"
            />
            <div className="lighter-gray f6 mt1 pl2">
              We'll never try to sell you. Promise.
            </div>
          </div>

          {/*<div className="mt3 mt5-ns tc">
            <CaseStudy
              title={'Case Study'}
              isMobile={isMobile}
              body={'How a company used Speer and did x'}
            />
            <CaseStudy
              title={'Case Study'}
              isMobile={isMobile}
              body={'How a company used Speer and did x'}
            />
          </div>*/}
        </div>
        <div className="fl w-20">
          <img src={manExplaining} className="h-100" />
        </div>
      </div>
    </div>

    <div
      style={{ backgroundColor: '#FFE3C9', height: 4, marginTop: -36 }}
      className="w-100"
    />
  </div>
)

export default injectIsMobile(NotSure)
