import {  getSubscribersSubscriberIdRankingClicks, getSubscribersSubscriberIdRankingCount, getSubscribersSubscriberIdRankingPosition } from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import React from 'react'

interface statsProps {
  subscriberId: Promise<{ subscriberId: string }>
}

export default async function Stats({subscriberId}: statsProps) {
  const { count: accessCount } = await getSubscribersSubscriberIdRankingClicks(subscriberId.toString())
  const { count: inviteCount } = await getSubscribersSubscriberIdRankingCount(subscriberId.toString())
  const { position: rankingPosition } = await getSubscribersSubscriberIdRankingPosition(subscriberId.toString())


  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-100 leading-none">
         {accessCount}
        </span>
        <span className="text-gray-300 text-sm text-center leading-none">
          acessos ao link
        </span>

        <MousePointerClick className="size-5 text-purple top-3 left-3 absolute" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-100 leading-none">
          {inviteCount}
        </span>
        <span className="text-gray-300 text-sm text-center leading-none">
          Inscrições feitas
        </span>

        <BadgeCheck className="size-5 text-purple top-3 left-3 absolute" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-100 leading-none">
          {rankingPosition ? `${rankingPosition}°` : 'N/A'}
        </span>
        <span className="text-gray-300 text-sm text-center leading-none">
          Posição no ranking
        </span>

        <Medal className="size-5 text-purple top-3 left-3 absolute" />
      </div>
    </div>
  )
}
