import React from 'react'

import SubHeader from 'components/subHeader'
import injectIsMobile from 'components/injectIsMobile'
import vivekImage from 'assets/images/vivek.jpg'
import anandImage from 'assets/images/anand.jpeg'
import TarekImage from 'assets/images/tarek.png'

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
    className="w-100 fl-ns pa4 w-33-ns"
    style={{ marginTop: isMobile ? 0 : marginTop }}
  >
    <div className="pa3 ba b--lightest-gray br2">
      <div className="" dangerouslySetInnerHTML={{ __html: body }} />
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
    body: `A major part of my job is to reach out and sell on email and I've used everything I can get my hands on. <br/><br/> I liked the authenticity of their message. It's true that most customers hate outreach emails. This app helps me reach out only to those who intend to buy.`,
    avatar: anandImage,
    name: 'Anand Chowdhary',
    designation: 'CEO, Oswald Labs',
    marginTop: -20,
  },
  {
    body:
      'Their analytics helped us find leads we should focus on. They were strinkingly, on point with that.',
    avatar: vivekImage,
    name: 'Vivek Goel',
    designation: 'CEO, Emanant Technologies',
    marginTop: 0,
  },
  {
    body:
      'Running a campaign was very easy and automation around intent helped us generate quality leads.<br/> <br/>We do not spend much time on follow ups now, they (Speer) do it for us.',
    avatar: TarekImage,
    name: 'Tarek Gethe',
    designation: 'Head of Sales, Germany, A11Y.co',
    marginTop: -20,
  },
]

const Testimonies = ({ isMobile }) => (
  <div className="mt4 mt0-ns w-100 w-90-ns center">
    <SubHeader title="Testimonies" />
    <div className="cf pv4">
      {testimonies.map((t, i) => (
        <Testimony key={i} isMobile={isMobile} {...t} />
      ))}
    </div>
  </div>
)

export default injectIsMobile(Testimonies)
