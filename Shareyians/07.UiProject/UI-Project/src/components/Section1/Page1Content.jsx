import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className="h-[90vh] flex items-center justify-between gap-10 px-16 py-10">
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content
