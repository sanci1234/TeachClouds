import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import NewAssistantForm from '@/components/dashboard/assistans/new-assistant-form'
import React from 'react'

const NewAssistantPage = () => {
  return (
    <>
        <PageHeader title="New Assistant"/>
        <Spacer height={50}/>
        <NewAssistantForm/>
        <Spacer />
        
    </>
  )
}

export default NewAssistantPage; 