import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import Events from '@/components/events/event'
import React from 'react'

const EventsPage = () => {
  return (
    <>
      <PageHeader title="Events"/>
      <Spacer/>
      <Events/>
      <Spacer/>
    </>
  )
}

export default EventsPage