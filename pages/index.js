import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const responseData = await response.clone().json();
        setData(responseData);
        setFilter(responseData);
        setLoading(false);
        console.log(filter);
      }
    };
    getProduct();

    return () => {
      componentMounted = false;
    };
  }, []);

  const filterHandle = (category) => {
    const updatedList = data.filter((item) => item.category === category);
    setFilter(updatedList);
  };

  const productList = filter.map((product) => {
    const src = `${product.image}`;
    return (
      <div className="col-md-4 mb-4" key={product.id}>
        <div className="card h-100 text-center p-4">
          <div className="card-image">
            <Image loader={() => src} src={src} alt={product.title} height="300" width="300" />
          </div>
          <div className="card-body">
            <h5 className="card-title"><b>{product.title.substring(0, 11)}</b></h5>
            <p className="card-text"><b>${product.price}</b></p>
            <div className="card-action">
              <Link legacyBehavior href={`/product/${product.id}`}>
                <a className="btn btn-primary">Details</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="button center-align" style={{ margin: "20px" }}>
        <button onClick={() => setFilter(data)} style={{ margin: "3px" }}>All</button>
        <button onClick={() => filterHandle("men's clothing")} style={{ margin: "3px" }}>Men Clothing</button>
        <button onClick={() => filterHandle("women's clothing")} style={{ margin: "3px" }}>Women Clothing</button>
        <button onClick={() => filterHandle("jewelery")} style={{ margin: "3px" }}>Jewelery</button>
        <button onClick={() => filterHandle("electronics")} style={{ margin: "3px" }}>Electronics</button>
      </div>

      <div className="rootcard">
        {productList}
      </div>
    </>
  );
};

export default Home;
