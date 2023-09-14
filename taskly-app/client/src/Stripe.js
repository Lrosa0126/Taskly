// import React, { useState, useEffect } from "react";
// import "./App.css";

// const ProductDisplay = () => (
//   <section style={{ textAlign: 'center' }}>
//     <div className="product">
//       <img
//         src="./donation.png"
//         alt="A hand dropping a coin in a donation box"
//         style={{
//           width: '250px',
//           height: 'auto',
//           display: 'block',
//           margin: '0 auto',
//         }}
//       />
//       <div className="description">
//         <h3>Donation Link!</h3>
//         <h5>$20.00</h5>
//       </div>
//       <form action="/create-checkout-session" method="POST">
//         <button type="submit" style={{ margin: '0 auto' }}>
//           Checkout
//         </button>
//       </form>
//     </div>
//   </section>
// );


// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }