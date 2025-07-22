import { Table } from "antd";

function OrderList() {
  const data = [
    { id: 1, user: "Nguyễn Văn A", total: 500000, status: "Đã giao" },
    { id: 2, user: "Trần Thị B", total: 300000, status: "Chờ xác nhận" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Khách hàng", dataIndex: "user" },
    { title: "Tổng tiền", dataIndex: "total" },
    { title: "Trạng thái", dataIndex: "status" },
  ];

  return (
    <div>
      <h2>Danh sách đơn hàng</h2>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
}

export default OrderList;
