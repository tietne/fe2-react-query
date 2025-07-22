import { Table } from "antd";
import { Header } from "antd/es/layout/layout";

function CategoryList() {
  const data = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Điện thoại" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Tên danh mục", dataIndex: "name" },
  ];

  return (
    <div>
      <Header />
      <h2>Danh sách danh mục</h2>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
}

export default CategoryList;
