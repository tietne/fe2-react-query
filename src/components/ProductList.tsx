import { Table } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
}

const fetchProducts = async () => {
  const res = await axios.get<Product[]>("http://localhost:3000/products");
  return res.data;
};

export default function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi khi tải dữ liệu</p>;

  return (
    <Table
      dataSource={data}
      rowKey="id"
      columns={[
        { title: "Tên sản phẩm", dataIndex: "name" },
        { title: "Giá", dataIndex: "price" },
      ]}
    />
  );
}
