import { z } from 'zod';

export const boostPricing = [
  { days: 1, unitPrice: 150 },
  { days: 7, unitPrice: 900 },
  { days: 15, unitPrice: 2000 },
  { days: 30, unitPrice: 4000 },
  { days: 60, unitPrice: 8000 },
  { days: 90, unitPrice: 10000 }
] as const;

export type BoostPricingOption = (typeof boostPricing)[number];
export type BoostDurationDays = BoostPricingOption['days'];

export const DEFAULT_BOOST_DURATION_DAYS: BoostDurationDays =
  (boostPricing.find((item) => item.days === 7)?.days as BoostDurationDays | undefined) ?? boostPricing[0].days;

export const boostQuantitySchema = z.coerce.number().int().min(1);

export interface BoostPricingResult {
  days: BoostDurationDays;
  unitPrice: number;
  quantity: number;
  total: number;
}

export function formatUZS(amount: number) {
  return Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function getBoostPricingOption(days?: number): BoostPricingOption {
  return (
    boostPricing.find((item) => item.days === days) ??
    boostPricing.find((item) => item.days === DEFAULT_BOOST_DURATION_DAYS) ??
    boostPricing[0]
  );
}

export function calculateBoostPrice(days: number, quantityInput: number): BoostPricingResult {
  const selectedOption = getBoostPricingOption(days);
  const parsedQuantity = boostQuantitySchema.safeParse(quantityInput);
  const quantity = parsedQuantity.success ? parsedQuantity.data : 1;
  const total = selectedOption.unitPrice * quantity;

  return {
    days: selectedOption.days,
    unitPrice: selectedOption.unitPrice,
    quantity,
    total
  };
}
