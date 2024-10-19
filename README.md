# E-Commerce Nursery Product Listing App with Pagination

This project is a simple React-based e-commerce product listing application with functional pagination. It includes features like product listing, adding products to a cart, a thank you page after completing a purchase, and pagination to navigate through multiple products.

# Video Recording:
[https://drive.google.com/file/d/1k1oja-fg-SheOTN6Gi7xOqXL6rlGFEjo/view?usp=sharing]

# Deployment Link: 
[https://e-commnursery-easesmith-chet19.onrender.com/]

# Screenshots
![Screenshot (1340)](https://github.com/user-attachments/assets/a5522c0d-4bd4-43c7-bd34-823a812f0a5d)

![Screenshot (1341)](https://github.com/user-attachments/assets/1f7847ff-024a-4dd0-aaee-998f89cb5849)

![Screenshot (1345)](https://github.com/user-attachments/assets/aa21ed18-5587-4e38-b6af-21c9fe57bef8)\

![Screenshot (1344)](https://github.com/user-attachments/assets/3330a880-ab07-4a1b-9ddb-2fee9f9fc7f5)
![Screenshot (1343)](https://github.com/user-attachments/assets/bc428d4a-206e-4103-8b6c-647a0ebd8c4c)
![Screenshot (1342)](https://github.com/user-attachments/assets/287ced94-c587-46cb-a8bd-c6d3676ecd67)
![Screenshot (1346)](https://github.com/user-attachments/assets/b1707372-f385-4580-ae89-40b39280be26)
![Screenshot (1349)](https://github.com/user-attachments/assets/30693f46-7d56-4084-a70e-e152e166c0da)
![Screenshot (1350)](https://github.com/user-attachments/assets/d1903812-1d21-426e-ba71-5857bf371f82)
![Screenshot (1351)](https://github.com/user-attachments/assets/cf2ff399-60ba-4bad-94a2-038b3506d94d)
![Screenshot (1352)](https://github.com/user-attachments/assets/b9aa3630-fd5f-4c3b-b88e-ba2670872d18)



# Features
Product List: Displays a list of products with options to add them to the cart or view details.
Cart Modal: When a product is added to the cart, a modal appears with the product details.
Thank You Page: After completing a purchase, the app navigates to a "Thank You" page.
Pagination: Allows users to browse through the products page by page, displaying a limited number of products per page.

# Components Overview

1. App.jsx
The main component that manages the application state and orchestrates the rendering of other components such as the product list, pagination, cart modal, and thank-you page.

State Management:

cartModalOpen: Tracks whether the cart modal is open or closed.
cartProduct: Stores the product that was added to the cart.
viewThankYou: Toggles between the product listing view and the thank-you page.
currentPage: Tracks the current page of products being viewed in the pagination.
itemsPerPage: Defines how many products are displayed per page.
Key Functions:

handleAddToCart: Opens the cart modal with the selected product.
handleViewProduct: Shows the thank-you page.
handleNextPage & handlePreviousPage: Handle pagination navigation.

2. ProductList.jsx
A component that receives an array of products for the current page and displays them. It also includes buttons for adding a product to the cart and viewing product details.

Props:

products: The current page's products.
onAddToCart: Function to add a product to the cart.
onViewProduct: Function to trigger the view of the product details.

3. Pagination.jsx
A component that provides "Previous" and "Next" buttons to navigate through product pages. It dynamically enables/disables buttons based on the current page.

Props:

currentPage: The current page number.
totalPages: The total number of pages.
onNextPage: Function to move to the next page.
onPreviousPage: Function to move to the previous page.

4. AddToCartModal.js
Displays a modal with product details after a product is added to the cart. The modal can be closed by the user.

Props:
product: The product added to the cart.
onClose: Function to close the modal.
5. ThankYouPage.jsx
Displays a thank-you message after a product purchase.

6. Header.jsx
A simple component that renders the app header.

Pagination Logic
The app uses functional pagination that allows users to navigate through products. The number of items per page is controlled by the itemsPerPage state. The App component slices the products array to display only the products for the current page.


# Installation
To run the application locally:

1. Clone the repository:

git clone {https://github.com/ChetanPalade/E-commNursery-EaseSmith-che.git]

2. Navigate to the project directory:

cd e-commerce-pagination-app

3. Install the dependencies:

npm install

4. Start the development server:
npm start

5.Open the app in your browser at http://localhost:3000
