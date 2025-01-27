<h1>Command to install Stripe API</h1>
<code> npm install @stripe/react-stripe-js @stripe/stripe-js </code>


<h1>Steps to Implement Stripe</h1>
    <ul>
        <li>Get credentails from stripe dashboard and pastes it in .env.local</li>
        <li>Create an API in route.ts <code>app/api/payment-intent/route.ts</code> </li>
        <li>Make a component <code>StripePayment.tsx</code></li>
        <li> Make a component <code>Checkout.tsx</code> </li>
        <li> Make a route <code>app/payment-success/page.tsx</code> </li>
    </ul>