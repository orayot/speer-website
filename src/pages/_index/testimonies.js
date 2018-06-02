import React from 'react'

import SubHeader from 'components/SubHeader'

const Testimony = ({title, body, authorName, authorDesignation, avatar}) =>(<div className='fl-ns w-25 pa4'>
  <div className='pa3 ba b--lightest-gray br2'>
    <div className='f4 mb3'>{title}</div>
    <div className='lighter-gray'>{body}</div>
  </div>
  <div className='cf f6'>
    <div className='fl w-30 tr'>
      <img src={avatar} className='h3 w3 br-100 bg-gray shadow-2 ba b--blue' style={{marginTop: -8}}/>
    </div>
    <div className='fl w-70 pl2 pt2'>
      <div className='b f5 mb1'>{authorName}</div>
      <div>{authorDesignation}</div>
    </div>
  </div>
</div>)

const testimonies = [{
  title: 'Help keeps brand afloat',
  body: 'Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj. Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj',
  avatar: 'http://i.pravatar.cc/400?img=38',
  authorName: 'Gareth Bael', 
  authorDesignation: 'CEO, Meta Labs'
}, {
  title: 'Help keeps brand afloat',
  body: 'Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj. Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshg ',
  avatar: 'http://i.pravatar.cc/400?img=68',
  authorName: 'Gareth Bael', 
  authorDesignation: 'CEO, Meta Labs'
}, {
  title: 'Help keeps brand afloat',
  body: 'Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj, Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshgf dhsfjhdsj khfjhdj sfhjkdshkj ',
  avatar: 'http://i.pravatar.cc/400?img=12',
  authorName: 'Gareth Bael', 
  authorDesignation: 'CEO, Meta Labs'
}, {
  title: 'Help keeps brand afloat',
  body: 'Soemthingk ds fghsdjfh jdhsf hdsjfhjhdshg ',
  avatar: 'http://i.pravatar.cc/400?img=5',
  authorName: 'Gareth Bael', 
  authorDesignation: 'CEO, Meta Labs'
}, ]

const Testimonies = () => (<div>
  <SubHeader title='Testimonies' />
  <div className='cf pv4'>
    {testimonies.map((t, i) => <Testimony key={i} {...t} />)}
  </div>
</div>)

export default Testimonies