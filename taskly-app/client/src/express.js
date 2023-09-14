// const express = require('express');
// const stripe = require('stripe')('your_stripe_secret_key');
// const app = express();
// app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Welcome to the Stripe Checkout example!');
// });

// app.post('/create-checkout-session', async (req, res) => {
//   try {
//     // Create a Stripe Checkout session here using the Stripe SDK
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           price: 'price_1NpLmkFAFDMW7Lcg8i0meYpj', // Replace with your actual price ID
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: 'http://localhost:4242/success', // Replace with your success URL
//       cancel_url: 'http://localhost:4242/canceled', // Replace with your cancel URL
//     });

//     // Return the session ID to the client
//     res.json({ sessionId: session.id });
//   } catch (error) {
//     // Handle any errors and send an error response if necessary
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.listen(4242, () => {
//   console.log('Server is running on port 4242');
// });
