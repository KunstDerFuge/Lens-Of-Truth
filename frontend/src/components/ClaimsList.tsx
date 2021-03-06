import * as React from 'react'
import { Claim } from '../openapi-types'
import { useGet } from 'restful-react'
import ClaimPreview from './ClaimPreview'

const ClaimList: React.FC<{}> = () => {
  const {data} = useGet({
    path: '/api/claims/'
  })
  document.title = 'Quaerendo - Democratized Fact-Checking for the 21st Century'
  return (
    <>
      {
        data ?
          data.map((claim: Claim, index: number) =>
            <ClaimPreview key={index} claim={claim} />
          )
          :
          ''
      }
    </>
  )
}

export default ClaimList
