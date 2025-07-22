import { Table } from "antd";

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
      <h2>Danh sách thương hiệu</h2>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
}

export default BrandList;
