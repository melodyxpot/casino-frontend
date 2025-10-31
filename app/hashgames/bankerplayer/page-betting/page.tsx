'use client'

import React from 'react'
import PageBettingLayout from '@/components/hashgames/PageBettingLayout'
import { User } from '@/components/ui/icons'
import useAuthGuard from '@/hooks/useAuthGuard'
const BankerPlayerDefault: React.FC = () => {
  const { isAuthenticated } = useAuthGuard()
  const mockData = [
    { type: 'banker', color: 'crimson', ratio: '1 : 1.95', percent: 100 },
    { type: 'tie', color: 'malachite', ratio: '1 : 8', percent: 0 },
    { type: 'player', color: 'yellow-orange', ratio: '1 : 1.95', percent: 0 },
  ]

  return (
    <PageBettingLayout>
      <div className="flex p-2 items-start gap-4 w-full rounded-xl bg-white/[0.04]">
        {/* bnaker Section */}
        {mockData.map(item => (
          <div
            key={item.type}
            className="flex flex-col items-center gap-8 flex-1"
          >
            <div className="flex justify-around sm:justify-center items-center w-full gap-1">
              {/* Progress Circle for banker */}
              <div className="relative w-10 h-10">
                <svg
                  className="w-10 h-10 transform -rotate-90"
                  viewBox="0 0 40 40"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="rgba(255,255,255,0.13)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke={item.color}
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${item.percent * 1.13} ${
                      (100 - item.percent) * 1.13
                    }`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-xs font-bold text-${item.color}`}>
                    {item.percent}%
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-base font-bold text-right">
                  <span className="text-casper">$</span>
                  <span className="text-white">7592</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 text-casper" />
                  <span className="text-sm font-bold text-casper">11</span>
                </div>
              </div>
            </div>
            <div className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">$0</span>
            </div>
            <div className={`text-lg font-bold text-${item.color}`}>
              {item.type.toUpperCase()}
            </div>
            <div className="flex h-9 px-4 justify-center items-center gap-2 rounded-lg border border-white/[0.08] bg-mirage shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
              <span className="text-sm font-bold text-white">{item.ratio}</span>
            </div>
          </div>
        ))}
      </div>
    </PageBettingLayout>
  )
}

export default BankerPlayerDefault
