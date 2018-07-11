import React from 'react'

import SubHeader from 'components/subHeader'
import injectIsMobile from 'components/injectIsMobile'

const Testimony = ({
  title,
  body,
  name,
  designation,
  avatar,
  marginTop,
  isMobile,
}) => (
  <div
    className="w-100 fl-ns pa4 w-25-ns"
    style={{ marginTop: isMobile ? 0 : marginTop }}
  >
    <div className="pa3 ba b--lightest-gray br2">
      <div className="">{body}</div>
    </div>
    <div className="cf f6">
      <div className="fl w-30 tr">
        <img
          src={avatar}
          className="h3 w3 br-100 bg-gray shadow-2 ba b--blue"
          style={{ marginTop: -8 }}
        />
      </div>
      <div className="fl w-70 pl2 pt2">
        <div className="b f5 mb1">{name}</div>
        <div>{designation}</div>
      </div>
    </div>
  </div>
)

const testimonies = [
  {
    body:
      'Running a campaign was so easy and automation around intent helped us generate quality leads. We do not spend much time on follow ups now, they (Speer) do it for us.',
    avatar: 'http://i.pravatar.cc/400?img=38',
    name: 'Gareth Bael',
    designation: 'CEO, Meta Labs',
    marginTop: -30,
  },
  {
    body:
      'Me and my team were hesitant befor the trial, but after using the app for 2 months, our conversion rates have increased. Their analytics helped us figure out which leads should we focus on. They were strinkingly, on point with that.',
    avatar: 'http://i.pravatar.cc/400?img=68',
    name: 'Vivek Goel',
    designation: 'CEO, FlowApp',
    marginTop: 40,
  },
  {
    body: `A major part of my job is to reach out and sell on email and I've used everything I can get my hands on. I liked the authenticity of their message. It's true that most customers hate outreach emails. This app helps me reach out only to those who intend to buy.`,
    avatar: 'http://i.pravatar.cc/400?img=12',
    name: 'Gareth Bael',
    designation: 'CEO, Meta Labs',
    marginTop: 24,
  },
  {
    body:
      'Speer saved a lot of time for us and helped us priorties our outreach thereby have given us a great ROI. Lead nuturing can never be so easy for us, thanks to team behind Speer.',
    avatar: 'http://i.pravatar.cc/400?img=5',
    name: 'Gareth Bael',
    designation: 'CEO, Meta Labs',
    marginTop: -50,
  },
]

const Testimonies = ({ isMobile }) => (
  <div className="mt4 mt0-ns">
    <SubHeader title="Testimonies" />
    <div className="cf pv4">
      {testimonies.map((t, i) => (
        <Testimony key={i} isMobile={isMobile} {...t} />
      ))}
    </div>
  </div>
)

export default injectIsMobile(Testimonies)
