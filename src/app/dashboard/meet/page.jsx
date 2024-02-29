import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import MeetList from "@/components/dashboard/meet/meet-list";
import { getAllMeetsByPageForTeacher } from "@/services/meet-service";
import React from "react";

const MeetPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllMeetsByPageForTeacher(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Meet" />
			<Spacer height={50} />
			<MeetList data={data}/>
			<Spacer />
		</>
	);
};

export default MeetPage;