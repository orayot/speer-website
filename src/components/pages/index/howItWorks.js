import React from 'react'

import activity from 'assets/icons/activity.svg'
import compose from 'assets/icons/edit-3.svg'
import link from 'assets/icons/link.svg'
import message from 'assets/icons/message-square.svg'
import screenshot004 from 'assets/screenshots/004.png'
import screenshot106 from 'assets/screenshots/106.png'
import screenshot104 from 'assets/screenshots/104.png'
import screenshot107 from 'assets/screenshots/107.png'
import SubHeader from 'components/subHeader'
import injectIsMobile from 'components/injectIsMobile'

const steps = [
  {
    label: 'Connect',
    body:
      'Connect you email account to Speer, all messages are sent from your personal email.',
    icon: link,
    screenshot: screenshot004,
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
    screenshot: screenshot106,
  },
  {
    label: 'Analyse',
    body: 'Analyse your outreach. Find the most interested leads.',
    icon: activity,
    screenshot: screenshot107,
  },
]

const Tabs = ({ steps, activeTab, onClick, isMobile }) => {
  return (
    <div>
      <div className="cf w-80 w-60-ns center">
        {steps.map((s, i) => (
          <div key={i} className="fl w-25 tc gray cf">
            <div
              className={`dib br-100 ba dim pointer ${
                activeTab === s.label ? 'b--light-blue' : 'b--lightest-gray'
              } ${isMobile ? 'w2 h2 pa2' : 'w4 h4 pa4'}`}
              onClick={() => onClick(s.label)}
            >
              <img src={s.icon} className="h1 w1 h2-ns w2-ns" />
              <div className="b mt2" style={isMobile ? { fontSize: 8 } : {}}>
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt4">
        {steps.map((s, i) => (
          <div className={`tc ${activeTab === s.label ? '' : 'dn'}`} key={i}>
            <div className="gray f4">{s.body}</div>
            <img
              src={s.screenshot}
              className="w-90 w-60-ns center ba b--black-20 shadow-2 br3 mt3"
            />
          </div>
        ))}
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
        <SubHeader title="How it works ?" />
        <div className="mt4">
          <Tabs
            isMobile={this.props.isMobile}
            steps={steps}
            activeTab={this.state.activeTab}
            onClick={activeTab => this.setState({ activeTab })}
          />
        </div>
      </div>
    )
  }
}

export default injectIsMobile(HowItWorks)
