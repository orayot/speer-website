import React from 'react'

import manThinking from 'assets/images/illustrations/man-thinking.svg'
import Button from 'components/ui/button'

const CaseStudy = ({title, body}) => (<div className='cf mt3 pointer dim'>
  <div className='w-10 fl'>
    <div className='shadow-2 br2' style={{height: 66, width: 50}}/>
  </div>
  <div className='w-90 fl mt2 pl3'>
    <div className='b'>{title}</div>
    <div className='lighter-gray'>{body}</div>
  </div>
</div>)

const NotSure = () => (<div className='mt5'>
  <div className='w-100 w-80-ns center-ns'>
    <div className='cf'>
      <div className='fl-ns w-20'>
        <img src={manThinking} />
      </div>
      <div className='fl-ns w-60'>
        <div className='tc'>
          <div className='black-40 f3 f2-ns mb4'>Not sure if Speer is for you ?</div>
          <Button label='Contact a buying assistant' href='' backgroundColor='white'/>
          <div className='lighter-gray f6 mt1 pl2'>We'll never try to sell you. Promise.</div>
        </div>
        
        <div className='mt5 pl6'>
          <CaseStudy title={'Case Study'} body={'How a company used Speer and did x'} />
          <CaseStudy title={'Case Study'} body={'How a company used Speer and did x'} />
        </div>
      </div>
    </div>
  </div>

  <div style={{backgroundColor: '#FFE3C9', height: 4, marginTop: -10}} className='w-100' />
</div>)

export default NotSure