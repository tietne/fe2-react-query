import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductList from './components/ProductList'
import CategoryList from './components/CategoryList';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import BrandList from './components/BrandList';
import OrderList from './components/OrderList';
import UserList from './components/UserList';
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/admin/products" />} />
            <Route path="/admin/products" element={<ProductList />} />
            <Route path="/admin/categories" element={<CategoryList />} />
            <Route path="/admin/users" element={<UserList />} />
            <Route path="/admin/brands" element={<BrandList />} />
            <Route path="/admin/orders" element={<OrderList />} />
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App
