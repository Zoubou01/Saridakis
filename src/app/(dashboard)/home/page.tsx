'use client'

import { useState } from 'react'

import Portfolio from '@/@menu/components/portfolio/Portfolio'

export default function Page() {
  const [isOpeningScreenVisible, setOpeningScreenVisible] = useState(false)

  setTimeout(() => {
    setOpeningScreenVisible(true)
  }, 500)

  return <>{isOpeningScreenVisible && <Portfolio />}</>
}
