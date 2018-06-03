import React from 'react'

import activity from 'assets/icons/activity.svg'
import compose from 'assets/icons/edit-3.svg'
import link from 'assets/icons/link.svg'
import message from 'assets/icons/message-square.svg'
import screenshot from 'assets/screenshots/106.png'
import screenshot104 from 'assets/screenshots/104.png'
import SubHeader from 'components/subHeader'
import isMobile from 'utils/isMobile'

const steps = [
  {
    label: 'Connect',
    body:
      'Connect you email account to Speer, all messages are sent from your personal email.',
    icon: link,
    screenshot: screenshot,
  },
  {
    label: 'Create',
    body: 'Create your outreach flow or chose from existing templates.',
    icon: compose,
    screenshot: screenshot104,
  },
  {
    label: 'Send',
    body: 'Send at scale or individually.',
    icon: message,
    screenshot: screenshot,
  },
  {
    label: 'Analyse',
    body: 'Analyse your outreach. Find the most interested leads.',
    icon: activity,
    screenshot: screenshot,
  },
]

const Tabs = ({ steps, activeTab, onClick }) => {
  const activeStep = steps.find(s => s.label === activeTab)
  return (
    <div>
      <div className='cf w-80 w-60-ns center'>
        {steps.map((s, i) => (
          <div key={i} className='fl w-25 tc gray'>
            <div
              className={`dib br-100 ba dim pointer ${
                activeTab === s.label ? 'b--light-blue' : 'b--lightest-gray'
              } ${isMobile ? 'w2 h2 pa2' : 'w4 h4 pa4'}`}
              onClick={() => onClick(s.label)}
            >
              <img src={s.icon} className='h1 w1 h2-ns w2-ns'/>
              <div className='b mt2' style={isMobile ? {fontSize: 8} : {}}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='tc'>
        <div className='gray f4 mt4'>{activeStep.body}</div>
        <img
          src={activeStep.screenshot}
          className='w-50 ba b--black-20 shadow-2 br3 mt3'
        />
      </div>
    </div>
  )
}

class HowItWorks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'Connect',
    }
  }

  render() {
    return (
      <div>
        <SubHeader title='How it works ?' />
        <div className='mt4'>
          <Tabs
            steps={steps}
            activeTab={this.state.activeTab}
            onClick={activeTab => this.setState({ activeTab })}
          />
        </div>
      </div>
    )
  }
}

export default HowItWorks
