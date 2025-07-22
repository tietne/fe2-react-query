import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductList from './components/ProductList'
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 20 }}>
        <h2>Danh sách sản phẩm</h2>
        <ProductList />
      </div>
    </QueryClientProvider>
  );
}

export default App
