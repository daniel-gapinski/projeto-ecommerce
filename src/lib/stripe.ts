import Stripe from "stripe";

export function getStripe() {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY não encontrada");
    }
  
    return new Stripe(process.env.STRIPE_SECRET_KEY);
  }