import React, { Fragment } from 'react'
import Logo from '../../../assets/logo.png'

export default function Widget() {
  return (
    <Fragment>
      <div className='bg-white h-14 w-14 shadow-lg border border-gray-200 rounded-full cursor-pointer fixed bottom-0 right-0 mb-4 mr-4 grid place-items-center'>
        <img className='w-6 h-6' src={Logo} />
      </div>
    </Fragment>
  )
}
