'use client'

import React from 'react'
import DefaultPageLayout from '@/components/hashgames/DefaultPageLayout'

const OddEvenDefault: React.FC = () => {
  const bettingOptions = [
    {
      id: 'odd',
      label: 'ODD',
      color: '#ED1D49',
      progress: 57,
      amount: '10038',
      users: 12,
      odds: '1 : 1.95',
    },
    {
      id: 'even',
      label: 'EVEN',
      color: '#FFB636',
      progress: 43,
      amount: '7592',
      users: 11,
      odds: '1 : 1.95',
    },
  ]

  return (
    <DefaultPageLayout gameType="oddeven" bettingOptions={bettingOptions} />
  )
}

export default OddEvenDefault
