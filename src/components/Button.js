import React from 'react'

export default function Button({text,styles}) {
  return (
    <>
    <button className='btn bg-btn text-white' style={styles}>{text}</button>
    </>
  )
}
