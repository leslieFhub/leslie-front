import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ShopSection = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shop-container">
                {loading ? (
                  <div className="loading-container">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    <div className="shop-grid">
                      {products.map((product) => (
                        <div className="shop-item" key={product._id}>
                          <Link to={`/products/${product._id}`}>
                            <div className="shop-image">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>
                          <div className="shop-details">
                            <h3 className="shop-name">
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </h3>
                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3 className="shop-price">Php {product.price}.00</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Pagination
                      pages={pages}
                      page={page}
                      keyword={keyword ? keyword : ""}
                    />
                  </>
                )}
              </div>
              {/* Pagination */}
              <Pagination
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
