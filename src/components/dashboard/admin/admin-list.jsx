import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
const AdminList = ({ data }) => {
    const { content } = data;
    return (
        <div className="container">
            <Link href="/dashboard/admin/new" className="btn btn-primary mb-3">
                New
            </Link>
            <DataTable title="Admin List" dataSource={content} dataKey="id">
                <Column index={true} title="#" />
                <Column title="First Name" field="name"/>
                <Column title="Last Name" field="surname"/>
                <Column title="Username" field="username"/>
            </DataTable>
        </div>
    );
};
export default AdminList;