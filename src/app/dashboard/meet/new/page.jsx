import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import NewMeetForm from "@/components/dashboard/meet/new-meet-form";
import { getAllStudents } from "@/services/student-service";
import React from "react";

const NewMeetPage = async () => {
  const res = await getAllStudents();
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  const students = data.map((item) => ({
    id: item.userId,
    fullName: `${item.name} ${item.surname}`,
  }));
  return (
    <>
      <PageHeader title="New Meet" />
      <Spacer height={50} />
      <NewMeetForm students={students} />
      <Spacer />
    </>
  );
};

export default NewMeetPage;
