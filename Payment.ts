// Multiple payment processing providers

// Define a common interface for payment providers
interface PaymentProvider {
  initialize(): void;
  processPayment(amount: number): Promise<boolean>;
}

// Stripe implementation
const initializeStripe = () => {
  console.log("Initializing Stripe...");
};

const processStripePayment: (amount: number) => Promise<boolean> = async (
  amount
) => {
  console.log(`Processing Stripe payment of ${amount} dollars.`);
  // Call Stripe API or perform necessary actions
  return true; // Successful payment
};

const StripePaymentProvider: PaymentProvider = {
  initialize: initializeStripe,
  processPayment: processStripePayment,
};

// Braintree implementation
const initializeBraintree = () => {
  console.log("Initializing Braintree...");
};

const processBraintreePayment: (amount: number) => Promise<boolean> = async (
  amount
) => {
  console.log(`Processing Braintree payment of ${amount} dollars.`);
  // Call Braintree API or perform necessary actions
  return true; // Successful payment
};

const BraintreePaymentProvider: PaymentProvider = {
  initialize: initializeBraintree,
  processPayment: processBraintreePayment,
};

// PayPal implementation
const initializePayPal = () => {
  console.log("Initializing PayPal...");
};

const processPayPalPayment: (amount: number) => Promise<boolean> = async (
  amount
) => {
  console.log(`Processing PayPal payment of ${amount} dollars.`);
  // Call PayPal API or perform necessary actions
  return true; // Successful payment
};

const PayPalPaymentProvider: PaymentProvider = {
  initialize: initializePayPal,
  processPayment: processPayPalPayment,
};

// Main function handling payment processing
const processPayment: (
  provider: PaymentProvider,
  amount: number
) => Promise<boolean> = async (provider, amount) => {
  provider.initialize();
  return provider.processPayment(amount);
};

// Example usage
let selectedProvider = "Stripe"; // User's choice

let provider: PaymentProvider;

switch (selectedProvider) {
  case "Stripe":
    provider = StripePaymentProvider;
    break;
  case "Braintree":
    provider = BraintreePaymentProvider;
    break;
  case "PayPal":
    provider = PayPalPaymentProvider;
    break;
  default:
    throw new Error("Invalid payment provider");
}

// Process payment
const paymentAmount = 100;

processPayment(provider, paymentAmount)
  .then((success) => {
    if (success) {
      console.log("Payment successful!");
    } else {
      console.log("Payment failed.");
    }
  })
  .catch((error) => {
    console.error(`Error processing payment: ${error.message}`);
  });
