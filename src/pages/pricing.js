import React from 'react'

import Column from 'pages/_pricing/column'
import seed from 'assets/images/illustrations/seed.svg'
import startup from 'assets/images/illustrations/startup.svg'
import growth from 'assets/images/illustrations/growth.svg'
import enterprise from 'assets/images/illustrations/enterprise.svg'
import ReadyToTry from 'components/readyToTry'

const plans = [
  {
    illustration: seed,
    title: 'Seed',
    monthlyPrice: 0,
    annualPrice: 0,
    free: true,
    features: ['20 active conversations'],
  },
  {
    illustration: startup,
    title: 'Startup',
    monthlyPrice: 42,
    annualPrice: 40,
    features: [
      '500 active conversations',
      '72 hour email support',
      'White labeled document viewer',
    ],
  },
  {
    illustration: growth,
    title: 'Growth',
    monthlyPrice: 220,
    annualPrice: 200,
    features: [
      '3000 active conversations',
      '12 hour email support',
      'Phone support',
      'White labeled document viewer',
    ],
  },
  {
    illustration: enterprise,
    title: 'Enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    contactUs: true,
    features: [
      'Unlimited active conversations',
      'Dedicated account manager',
      'White labeled document viewer',
      'On premise hosting',
    ],
  },
]

const Pricing = () => {
  return (
    <div>
      <div className="f2 tc">Pricing Guide</div>
      <div className="f4 w-80 w-40-ns mt3 tc center lighter-gray">
        All plans include unlimited user accounts.<br />
        The only limit is on the number of active conversations.
      </div>

      <div className="cf w-100 w-70-ns center-ns">
        {plans.map((p, i) => (
          <div key={i} className="w-100 w-25-ns fl-ns">
            <Column {...p} />
          </div>
        ))}
      </div>

      <ReadyToTry />
    </div>
  )
}

export default Pricing
