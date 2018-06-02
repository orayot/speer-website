import React from 'react'

import SubHeader from 'components/subHeader'
import Button from 'components/ui/button'
import campaignsIllustration from 'assets/images/illustrations/campaigns.svg'
import liveChatIllustration from 'assets/images/illustrations/live-chat.svg'

const UseCase = ({illustration, title, body, href, illustrationTowardsRight}) => 
(<div className="fl-ns w-100 w-50-ns">
  <div className={`w-100 ${illustrationTowardsRight ? 'tr' : ''}`}>
    <img src={illustration} />
  </div>
  <div style={{marginTop: -120}} className='w-80 center'>
    <div className='f3 f2-ns'>{title}</div>
    <div className='lighter-gray f5 f4-ns mt3 tl'>
      {body}
      <div className='mt4'>
        <a href={href} className='light-blue b'>Learn more</a>
      </div>
    </div>
  </div>
</div>)

const UseCases = ({}) => (<div>
  <SubHeader title='Use cases' />
  <div className="cf">
    <UseCase
      title='Mindfull outbound campaigns' illustration={campaignsIllustration}
      body='Mindless automation turns feels spammy, irritating and robotic. Use Speer to run intenful (delightful) campaigns that don’t annoy.'
      href='http://google.com'
    />
    <UseCase
      title='Find your most loved live-chat leads' illustration={liveChatIllustration}
      illustrationTowardsRight={true}
      body='You can configure Speer to talk to your live chat leads automatically. We’ll find the best ones, and nurture the others.'
      href='http://google.com'
    />
  </div>

  <div className='pv4 tc mv5'>
    <Button label='Get started' href='' backgroundColor='blue'/>
    <div className='lighter-gray f6 mt1 pl2'>Free for 7 days, no card required</div>
  </div>
</div>)

export default UseCases