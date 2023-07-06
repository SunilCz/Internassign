import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Nav = () => {
  const state = useSelector((state) => state.handleCart);
  const router = useRouter();
  const isActive = (route) => {
    if (route === router.pathname) {
      return "active";
    } else {
      return "";
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setSearchResults(json));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = searchResults.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredResults);
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper #2196f3 blue">
          <Link  legacyBehavior href="/">
            <a className="brand-logo">OnlineStore</a>
          </Link>
          <ul id="nav-mobile" className="right flex items-center">
            <li className="mr-4">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  className="border border-gray-100 rounded-md px-2 py-1 w-48"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
               
              </form>
            </li>
            <li>
              <Link legacyBehavior href="/cart">
                <a className="flex items-center">
                  <i
                    className="material-icons left"
                    style={{ margin: "2px 4px" }}
                  >
                    add_shopping_cart
                  </i>
                  Cart ({state.length})
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
