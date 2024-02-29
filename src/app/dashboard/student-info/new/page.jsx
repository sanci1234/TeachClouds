import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import NewStudentInfoForm from '@/components/dashboard/student-info/new-student-info-form';
import { getAllLessons } from '@/services/lesson-service';
import { getAllStudentsForAdvisor } from '@/services/student-service';
import { getAllTerms } from '@/services/term-service';
import React from 'react'

const NewStundenInfoPage = async() => {
  const studentsData =( await getAllStudentsForAdvisor()).json();
  const lessonsData =( await getAllLessons()).json();
  const termsData =( await getAllTerms()).json();

  const [students , lessons, terms] = await Promise.all([studentsData, lessonsData, termsData]);
   //API dan gelen hata objecxt e göre buradan hata kontrolü yapılmalıdır
  return (
    <>
        <PageHeader title="New Student Info"/>
        <Spacer height={50}/>
        <NewStudentInfoForm students={students} lessons={lessons} terms={terms} />
        <Spacer />
        
    </>
  )
}

export default NewStundenInfoPage; 