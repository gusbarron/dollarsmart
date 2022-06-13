import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const saveProduct = () => {
    console.log("Saving product", product);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  };

  const textChanged = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  };

  const couponChanged = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    let copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  };

  const saveCoupon = () => {
    console.log("Saving coupon", coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  };

  return (
    <div className="admin-page">
      <h4>Store Administration</h4>

      <div className="content">
        <section className="products">
          <h5>Register new Product</h5>

          <div className="field">
            <label>Title</label>
            <input
              name="title"
              onChange={textChanged}
              className="form-control"
              type="text"
            />
          </div>

          <div className="field">
            <label>Category</label>
            <input
              name="category"
              onChange={textChanged}
              className="form-control"
              type="text"
            />
          </div>

          <div className="field">
            <label>Image</label>
            <input
              name="image"
              onChange={textChanged}
              className="form-control"
              type="text"
            />
          </div>

          <div className="field">
            <label>Price</label>
            <input
              name="price"
              onChange={textChanged}
              className="form-control"
              type="number"
            />
          </div>

          <div className="field">
            <button onClick={saveProduct} className="btn btn-primary">
              Register Product
            </button>
          </div>

          <hr />
          <ul>
            {allProducts.map((p, index) => (
              <li key={index}>
                {p.title} - {p.price}
              </li>
            ))}
          </ul>
        </section>

        <section className="coupons">
          <h5>Coupon Codes</h5>

          <div className="field">
            <label>Code</label>
            <input
              name="code"
              onChange={couponChanged}
              className="form-control"
              type="number"
            />
          </div>

          <div className="field">
            <label>Discount</label>
            <input
              name="discount"
              onChange={couponChanged}
              className="form-control"
              type="number"
            />
          </div>

          <div className="field">
            <button onClick={saveCoupon} className="btn btn-primary">
              Register Coupon
            </button>
          </div>

          <hr />
          <ul>
            {allCoupons.map((c) => (
              <li key={1}>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Admin;
