import { useEffect } from "react";
import { useProductStore } from "../../Store/useProductStore";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import MainBanner from "../../Components/Shared/MainBanner/MainBanner";

export default function Shop() {
  const {
    categories,
    loading,
    error,
    search,
    filter,
    sort,
    fetchProducts,
    setSearch,
    setFilter,
    setSort,
    getFilteredProducts,
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = getFilteredProducts();

  return (
    <>
      <MainBanner
        title="Products"
        image="/shop-img-2.png"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Shop" }]}
      />

      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-4 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-2">
            <select
              className="form-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-2">
            <select
              className="form-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="none">Sort by</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-dark" role="status" />
          </div>
        ) : error ? (
          <div className="text-center text-danger py-5">{error}</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center text-muted py-5">No products found.</div>
        ) : (
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div className="col-md-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
