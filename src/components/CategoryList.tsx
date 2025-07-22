import { Table } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spin } from "antd";

function CategoryList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });


  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Tên danh mục", dataIndex: "name" },
  ];
  if (isError) return <p>Lỗi tải danh mục!</p>;
  if (isLoading) return <Spin />;


  return (
    <div>
      <h2>Danh sách danh mục</h2>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
}

export default CategoryList;
