var catalog = [
  {
    _id: "5f40a6baac77a903d8f682c6",
    price: 12.32,
    stock: 13,
    title: "Skittles",
    image: "skittles.jpeg",
    discount: 5,
    category: "Hard candy",
  },
  {
    _id: "5f40a6ba41d9e5044ced586c",
    price: 22.71,
    stock: 21,
    title: "Snickers",
    image: "snickers.jpeg",
    discount: 10,
    category: "Chocolate",
  },
  {
    _id: "5f40a6baa9e6e22fa1d5fac4",
    price: 32.0,
    stock: 20,
    title: "Hershey's",
    image: "hersheys.webp",
    discount: 0,
    category: "Chocolate",
  },
  {
    _id: "5f40a6baa9e6e22fa1d5fac4",
    price: 32.0,
    stock: 20,
    title: "Gummy Bears",
    image: "gummybear.jpeg",
    discount: 0,
    category: "Gummy",
  },
  {
    _id: "5f40a6baa9e6e22fa1d5fac4",
    price: 32.0,
    stock: 20,
    title: "Sour Patch Kids",
    image: "sourpatch.jpeg",
    discount: 0,
    category: "Gummy",
  },
];

class DataService {
  getCatalog() {
    return catalog;
  }
}
export default DataService;
