import React from 'react'

import Button from 'components/ui/button'

const Column = ({
  illustration,
  title,
  monthlyPrice,
  annualPrice,
  features,
  free,
  contactUs,
}) => {
  return (
    <div>
      <div className="h5 tc relative">
        <div className="absolute tc bottom-0 w-100">
          <img src={illustration} />
        </div>
      </div>
      <div className="f4 mt2 tc black-60">{title}</div>
      <div className="h4 dt w-100">
        <div className="dtc v-mid tc">
          <div className="">
            <div className="f2 mt3">
              {contactUs ? (
                <span>Bespoke</span>
              ) : (
                <span>
                  <span className="f4 v-mid">$</span> {annualPrice}{' '}
                  <span className="black-60 f5">/m</span>
                </span>
              )}
            </div>
            <div className="f6 ph1 black-40">
              {free ? (
                `free forever`
              ) : contactUs ? (
                `pricing that fits your need`
              ) : (
                <span>billed annually or $ {monthlyPrice} per month</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt2">
        {features &&
          features.map((f, i) => (
            <div key={i} className="f6 mb3 ph3">
              {f}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Column
