import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import ProductCard from '../ProductCard/ProductCard';
import AddToCartModal from '../AddToCartModal/AddToCartModal';
import Pagination from '../pagination/Pagination';
import Footer from "../Footer/Footer"

import "./ProductList.css"

const products = [
  {id:1, name:"Bamboo Plant", price:390, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-3-layer-lucky-bamboo-plant-in-a-bowl-with-pebbles-1-383367_512x683.jpg?v=1679748420"},
  {id:2, name:"White Butterfly Plant", price:249, image:"https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-podophyllum-white-butterfly-plant-1-829545_168x223.jpg?v=1679751756"},
  {id:3, name:"Arabian Jasmine-Plant", price:340, image:"https://nurserylive.com/cdn/shop/products/nurserylive-g-jasminum-sambac-mogra-arabian-jasmine-1_168x223.jpg?v=1634222610"},
  {id:4, name:"Spathiphyllum-Plant", price:170, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-peace-lily-spathiphyllum-plant-1-124667_168x223.jpg?v=1679750814"},
  {id:5, name:"Jade plant(Green)-Succulent Plant", price:210, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plant-elephant-bush-portulacaria-afra-jade-green-plant-in-4.5-inch-11-cm-ronda-No-1110-round-plastic-green-planter-1-629198_168x223.jpg?v=1679749890"},
  {id:6, name:"Montera", price:110, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiW8ZibVkvSHn04p3uk42MCFzArJVd9YFBA&s"},
  {id:7, name:"Snake Plant", price:299, image:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-sansevieria-trifasciata-golden-hahnii-snake-plant-succulent-plant_large.jpg?v=1634228042"},
  {id:8, name:"Rhopheo Plant", price:269, image:"https://nurserylive.com/cdn/shop/products/nurserylive-rhoeo-plant-rhoeo-discolor-tricolor-variegated-plant_223x223.jpg?v=1634227556"},
  {id:9, name:"Cactus Plant", price:150, image:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-echinopsis-species-cactus-plant-1_large.jpg?v=1634218498"},
  {id:10, name:"Lemon Grass Plant", price:269, image:"https://nurserylive.com/cdn/shop/products/nurserylive-lemon-grass-plant-1_512x683.jpg?v=1634227095"},
  {id:11, name:"Syngonium (Pink) - Plant", price:340, image:"https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-pink-plant-1-566011_168x223.jpg?v=1679751750"},
  {id:12, name:"Spider Palnt", price:139, image:"https://nurserylive.com/cdn/shop/products/nurserylive-chlorophytum-spider-plant-plant-1_b45bcc34-3afa-4ae1-a632-3f13d42c2c90_512x683.jpg?v=1634216136"},
  {id:13, name:"Montera", price:110, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiW8ZibVkvSHn04p3uk42MCFzArJVd9YFBA&s"},
  {id:14, name:"Snake Plant", price:299, image:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-sansevieria-trifasciata-golden-hahnii-snake-plant-succulent-plant_large.jpg?v=1634228042"},
  {id:15, name:"Rhopheo Plant", price:269, image:"https://nurserylive.com/cdn/shop/products/nurserylive-rhoeo-plant-rhoeo-discolor-tricolor-variegated-plant_223x223.jpg?v=1634227556"},
  {id:16, name:"Cactus Plant", price:150, image:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-echinopsis-species-cactus-plant-1_large.jpg?v=1634218498"},
  {id:17, name:"Bamboo Plant", price:390, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-3-layer-lucky-bamboo-plant-in-a-bowl-with-pebbles-1-383367_512x683.jpg?v=1679748420"},
  {id:18, name:"White Butterfly Plant", price:249, image:"https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-podophyllum-white-butterfly-plant-1-829545_168x223.jpg?v=1679751756"},
  {id:15, name:"Arabian Jasmine-Plant", price:340, image:"https://nurserylive.com/cdn/shop/products/nurserylive-g-jasminum-sambac-mogra-arabian-jasmine-1_168x223.jpg?v=1634222610"},
  {id:16, name:"Spathiphyllum-Plant", price:170, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-peace-lily-spathiphyllum-plant-1-124667_168x223.jpg?v=1679750814"},
  {id:17, name:"Jade plant(Green)-Succulent Plant", price:210, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plant-elephant-bush-portulacaria-afra-jade-green-plant-in-4.5-inch-11-cm-ronda-No-1110-round-plastic-green-planter-1-629198_168x223.jpg?v=1679749890"},
  {id:19, name:"Lemon Grass Plant", price:269, image:"https://nurserylive.com/cdn/shop/products/nurserylive-lemon-grass-plant-1_512x683.jpg?v=1634227095"},
  {id:20, name:"Syngonium (Pink) - Plant", price:340, image:"https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-pink-plant-1-566011_168x223.jpg?v=1679751750"},
  {id:21, name:"Spider Palnt", price:139, image:"https://nurserylive.com/cdn/shop/products/nurserylive-chlorophytum-spider-plant-plant-1_b45bcc34-3afa-4ae1-a632-3f13d42c2c90_512x683.jpg?v=1634216136"},
  {id:22, name:"Bamboo Plant", price:390, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-3-layer-lucky-bamboo-plant-in-a-bowl-with-pebbles-1-383367_512x683.jpg?v=1679748420"},
  {id:23, name:"White Butterfly Plant", price:249, image:"https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-podophyllum-white-butterfly-plant-1-829545_168x223.jpg?v=1679751756"},
  {id:24, name:"Arabian Jasmine-Plant", price:340, image:"https://nurserylive.com/cdn/shop/products/nurserylive-g-jasminum-sambac-mogra-arabian-jasmine-1_168x223.jpg?v=1634222610"},
  {id:25, name:"Lemon Grass Plant", price:269, image:"https://nurserylive.com/cdn/shop/products/nurserylive-lemon-grass-plant-1_512x683.jpg?v=1634227095"},
  {id:26, name:"Syngonium (Pink) - Plant", price:340, image:"https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-pink-plant-1-566011_168x223.jpg?v=1679751750"},
  {id:27, name:"Spider Palnt", price:139, image:"https://nurserylive.com/cdn/shop/products/nurserylive-chlorophytum-spider-plant-plant-1_b45bcc34-3afa-4ae1-a632-3f13d42c2c90_512x683.jpg?v=1634216136"},
  {id:28, name:"Spathiphyllum-Plant", price:170, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-peace-lily-spathiphyllum-plant-1-124667_168x223.jpg?v=1679750814"},
  {id:29, name:"Jade plant(Green)-Succulent Plant", price:210, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plant-elephant-bush-portulacaria-afra-jade-green-plant-in-4.5-inch-11-cm-ronda-No-1110-round-plastic-green-planter-1-629198_168x223.jpg?v=1679749890"},
  {id:30, name:"Montera", price:110, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiW8ZibVkvSHn04p3uk42MCFzArJVd9YFBA&s"},
  {id:31, name:"Snake Plant", price:299, image:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-sansevieria-trifasciata-golden-hahnii-snake-plant-succulent-plant_large.jpg?v=1634228042"},
  {id:32, name:"Rhopheo Plant", price:269, image:"https://nurserylive.com/cdn/shop/products/nurserylive-rhoeo-plant-rhoeo-discolor-tricolor-variegated-plant_223x223.jpg?v=1634227556"},
  {id:33, name:"Cactus Plant", price:150, image:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-echinopsis-species-cactus-plant-1_large.jpg?v=1634218498"},
  {id:34, name:"Lemon Grass Plant", price:269, image:"https://nurserylive.com/cdn/shop/products/nurserylive-lemon-grass-plant-1_512x683.jpg?v=1634227095"},
  
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();
  
  const itemsPerPage = 8; 

  
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleViewProduct = (product) => {
    navigate('/thank-you', { state: { productName: product.name } });
  };

  const handleModalClose = () => setModalOpen(false);
  const handleConfirmAddToCart = () => {
    setModalOpen(false);
    alert(`${selectedProduct.name} added to cart!`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <Header />
      <div className="product-grid">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} onViewProduct={handleViewProduct} />
        ))}
      </div>
      <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
      <AddToCartModal product={selectedProduct} isOpen={modalOpen} onClose={handleModalClose} onConfirm={handleConfirmAddToCart} />
     <Footer/>
    </div>
  );
};


export default ProductList;




// import React, { useState } from 'react';
// import ProductCard from '../ProductCard/ProductCard';
// import AddToCartModal from '../AddToCartModal/AddToCartModal';
// import Header from '../Header/header';
// import Pagination from '../pagination/Pagination';
// import Footer from "../Footer/Footer"
// import './ProductList.css'

// const mockProducts = [
//     {id:1, name:"Bamboo Plant", price:390, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-3-layer-lucky-bamboo-plant-in-a-bowl-with-pebbles-1-383367_512x683.jpg?v=1679748420"},
//     {id:2, name:"White Butterfly Plant", price:249, image:"https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-podophyllum-white-butterfly-plant-1-829545_168x223.jpg?v=1679751756"},
//     {id:3, name:"Arabian Jasmine-Plant", price:340, image:"https://nurserylive.com/cdn/shop/products/nurserylive-g-jasminum-sambac-mogra-arabian-jasmine-1_168x223.jpg?v=1634222610"},
//     {id:4, name:"Spathiphyllum-Plant", price:170, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-peace-lily-spathiphyllum-plant-1-124667_168x223.jpg?v=1679750814"},
//     {id:5, name:"Jade plant(Green)-Succulent Plant", price:210, image:"https://nurserylive.com/cdn/shop/products/nurserylive-plant-elephant-bush-portulacaria-afra-jade-green-plant-in-4.5-inch-11-cm-ronda-No-1110-round-plastic-green-planter-1-629198_168x223.jpg?v=1679749890"},
//     {id:6, name:"Montera", price:110, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiW8ZibVkvSHn04p3uk42MCFzArJVd9YFBA&s"},
//     {id:7, name:"Snake Plant", price:299, image:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-sansevieria-trifasciata-golden-hahnii-snake-plant-succulent-plant_large.jpg?v=1634228042"},
//     {id:8, name:"Rhopheo Plant", price:269, image:"https://nurserylive.com/cdn/shop/products/nurserylive-rhoeo-plant-rhoeo-discolor-tricolor-variegated-plant_223x223.jpg?v=1634227556"},
//     {id:9, name:"Cactus Plant", price:150, image:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-echinopsis-species-cactus-plant-1_large.jpg?v=1634218498"},
//     {id:10, name:"Lemon Grass Plant", price:269, image:"https://nurserylive.com/cdn/shop/products/nurserylive-lemon-grass-plant-1_512x683.jpg?v=1634227095"},
//     {id:11, name:"Syngonium (Pink) - Plant", price:340, image:"https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-pink-plant-1-566011_168x223.jpg?v=1679751750"},
//     {id:12, name:"Spider Palnt", price:139, image:"https://nurserylive.com/cdn/shop/products/nurserylive-chlorophytum-spider-plant-plant-1_b45bcc34-3afa-4ae1-a632-3f13d42c2c90_512x683.jpg?v=1634216136"},
// ];

// const ProductList = () => {
//   const [modalProduct, setModalProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (product) => {
//     setModalProduct(product);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div>
//       <Header />
     
//       <div className="product-grid">
//         {mockProducts.map((product) => (
//           <ProductCard key={product.id} product={product} openModal={openModal} />
//         ))}
//       </div>
//       <Pagination />
//       <AddToCartModal product={modalProduct} isOpen={isModalOpen} onClose={closeModal} />
//       <Footer />
//     </div>
//   );
// };

// export default ProductList;



