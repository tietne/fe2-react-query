import { useState } from "react";
import {
  useQuery,
  useQueryClient,
  type QueryFunctionContext,
} from "@tanstack/react-query";
import { Table, Button, Spin, Popconfirm, message, Space } from "antd";

type Product = {
  id: number;
  name: string;
  price: number;
};

// ✅ KHÔNG destructure queryKey ra khỏi object trong hàm fetch
async function fetchProducts(
  ctx: QueryFunctionContext<[string, number]>
): Promise<Product[]> {
  const [, page] = ctx.queryKey;
  const response = await fetch(
    `http://localhost:3000/products?_page=${page}&_limit=5`
  );
  if (!response.ok) {
    throw new Error("Lỗi khi tải sản phẩm");
  }
  return response.json();
}

function ProductList() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { data, isPending, error } = useQuery<Product[], Error>({
    queryKey: ["products", page],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  const handleEdit = (product: Product) => {
    console.log("Edit product", product);
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      message.success("Đã xoá sản phẩm");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    } catch (err) {
      message.error("Lỗi xoá sản phẩm");
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Tên", dataIndex: "name", key: "name" },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price}`,
    },
    {
      title: "Hành động",
      render: (_: any, record: Product) => (
        <Space>
          <Button type="link" onClick={() => handleEdit(record)}>
            Sửa
          </Button>
          <Popconfirm
            title="Bạn có chắc chắn muốn xoá?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link" danger>
              Xoá
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      {isPending && <Spin />}
      {error && <p>Lỗi: {error.message}</p>}
      {!isPending && !error && (
        <>
          <Table
            dataSource={data || []}
            columns={columns}
            rowKey="id"
            pagination={false}
          />
          <div style={{ marginTop: 16 }}>
            <Button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Trang trước
            </Button>
            <Button
              onClick={() => setPage((p) => p + 1)}
              style={{ marginLeft: 8 }}
              disabled={(data?.length ?? 0) < 5}
            >
              Trang sau
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductList;
