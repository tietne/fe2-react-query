import { Table } from "antd";
import { Header } from "antd/es/layout/layout";

function UserList() {
  const data = [
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com" },
    { id: 2, name: "Trần Thị B", email: "b@gmail.com" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Tên người dùng", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
  ];

  return (
    <div>
      <Header />
      <h2>Danh sách người dùng</h2>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
}

export default UserList;
