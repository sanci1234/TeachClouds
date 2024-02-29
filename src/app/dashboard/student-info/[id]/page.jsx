import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import EditStudentForm from '@/components/dashboard/student/edit-student-form';
import { getAllLessons } from '@/services/lesson-service';
import { getAllStudentsForAdvisor } from '@/services/student-service';
import { getAllTerms } from '@/services/term-service';
import React from 'react'

const EditStundenInfoPage = async({params}) => {
  const studentsData =( await getAllStudentsForAdvisor()).json();
  const lessonsData =( await getAllLessons()).json();
  const termsData =( await getAllTerms()).json();
  const infoData = (await getStudentInfoById(params.id)).json();

  const [students , lessons, terms,info] = await Promise.all([studentsData, lessonsData, termsData,infoData]);
   //API dan gelen hata objecxt e göre buradan hata kontrolü yapılmalıdır
  return (
    <>
        <PageHeader title="Edit Student Info"/>
        <Spacer height={50}/>
        <EditStudentForm students={students} lessons={lessons} terms={terms} info={info}/>
        <Spacer />
        
    </>
  )
}

export default EditStundenInfoPage; 