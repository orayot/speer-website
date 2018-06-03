import React from 'react'

import SubHeader from 'components/subHeader'
import isMobile from 'utils/isMobile'

const Testimony = ({title, body, name, designation, avatar, marginTop}) => (
  <div className="w-100 fl-ns w-25-ns pa4" style={isMobile ? {} : {marginTop}}>
    <div className="pa3 ba b--lightest-gray br2">
      <div className="f4 mb3">{title}</div>
      <div className="lighter-gray">{body}</div>
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
    title: 'Help keeps brand afloat',
    body:
      'Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj. Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj',
    avatar: 'http://i.pravatar.cc/400?img=38',
    name: 'Gareth Bael',
    designation: 'CEO, Meta Labs',
    marginTop: -30,
  },
  {
    title: 'Help keeps brand afloat',
    body:
      'Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj. Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshg ',
    avatar: 'http://i.pravatar.cc/400?img=68',
    name: 'Gareth Bael',
    designation: 'CEO, Meta Labs',
    marginTop: 40,
  },
  {
    title: 'Help keeps brand afloat',
    body:
      'Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj, Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj ',
    avatar: 'http://i.pravatar.cc/400?img=12',
    name: 'Gareth Bael',
    designation: 'CEO, Meta Labs',
    marginTop: 24,
  },
  {
    title: 'Help keeps brand afloat',
    body: 'Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshg ',
    avatar: 'http://i.pravatar.cc/400?img=5',
    name: 'Gareth Bael',
    designation: 'CEO, Meta Labs',
    marginTop: -50,
  },
]

const Testimonies = () => (
  <div className='mt4 mt0-ns'>
    <SubHeader title='Testimonies' />
    <div className='cf pv4'>
      {testimonies.map((t, i) => <Testimony key={i} {...t} />)}
    </div>
  </div>
)

export default Testimonies
