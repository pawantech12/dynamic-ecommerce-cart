# 🛒 Shopping Cart Project

A responsive and interactive shopping cart application built with **React** and **Tailwind CSS**. This project demonstrates a fully functional cart system where users can view items, adjust quantities, and see real-time pricing updates with a 10% discount applied at checkout. It also includes a confirmation modal for item removal, ensuring a seamless user experience.



## ✨ Features

- **Responsive Design**: Adapts to various screen sizes, including desktop, tablet, and mobile.
- **Interactive Cart System**: Add, remove, and update item quantities dynamically.
- **Total and Discounted Price Calculation**: Shows real-time updates for total price and discounted price with a 10% discount.
- **Delete Confirmation Modal**: Provides a modal to confirm item deletion from the cart for improved user experience.
- **Optimized Animations**: Smooth hover effects, scaling, and transitions for an engaging UI.


## 🎬 Demo

Check out a live version of the project: [Live Demo](https://dynamic-ecommerce-cart.vercel.app/)  

## ⚙️ Installation

1. **Clone the repository**:
   ```bash

   git clone https://github.com/pawantech12/dynamic-ecommerce-cart.git
   cd dynamic-ecommerce-cart

   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the project**:
   ```bash
   npm run dev
   ```

4. **Build the project** for production:
   ```bash
   npm run build
   ```


## 🚀 Usage

1. **View Items**: Items are displayed in a scrollable cart format, each showing an image, title, price, and quantity.
2. **Update Quantity**: Use `+` and `-` buttons to adjust quantities for each item.
3. **Delete Item**: Click on the trash icon to delete an item. A confirmation modal will appear to ensure the action.
4. **View Price Calculations**: The total price and discounted price are dynamically updated as items are added, removed, or quantities are changed.


## 🗂️ Project Structure

```plaintext
public/
├── logo.png
src/
├── components/
│   ├── Loader.jsx       
│   └── Navbar.jsx
├── pages/
|   ├── Cart.jsx
|   └── Products.jsx
├── context/
│   └── CartContext.jsx    # Provides cart state and actions
└── App.jsx                # Entry point and main app structure
```


## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Icons**: Library for including icons like `BsPlus`, `BsTrash`, and `HiMiniMinusSmall`.
- **Context API**: Provides global state management for cart items.


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit pull requests for improvements.

### Steps to Contribute:

1. Fork the repository.
2. Create your branch: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m 'Add a new feature'`.
4. Push to the branch: `git push origin my-feature`.
5. Open a pull request.


## 📧 Contact

For questions or collaborations, please reach out via [pawankumavat042@gmail.com](mailto:pawankumavat042@gmail.com)  
Or check out more of my work on [GitHub](https://github.com/pawantech12)

### 🌟 Acknowledgments

Thanks to the developers and designers who contributed to the React, Tailwind CSS, and React Icons libraries, which made this project possible.
