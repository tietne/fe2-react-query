import { Table } from "antd";
import { Header } from "antd/es/layout/layout";

function BrandList() {
  const data = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Samsung" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Tên thương hiệu", dataIndex: "name" },
  ];

  return (
    <div>
      <Header />
      <h2>Danh sách thương hiệu</h2>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
}

export default BrandList;
