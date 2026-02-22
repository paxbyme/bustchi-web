'use client';

import { useMemo, useState } from 'react';
import { Calculator } from 'lucide-react';
import {
  boostPricing,
  boostQuantitySchema,
  calculateBoostPrice,
  createBoostCalculatorTelegramMessage,
  DEFAULT_BOOST_DURATION_DAYS,
  formatUZS,
  getBoostPricingOption
} from '@/config/pricing';
import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CTAButton } from '@/components/cta-button';

const durationOptions = boostPricing.map((option) => ({
  value: String(option.days),
  label: `${option.days} ${option.days === 1 ? 'day' : 'days'}`
}));

export function PricingCalculator() {
  const [selectedDays, setSelectedDays] = useState<number>(DEFAULT_BOOST_DURATION_DAYS);
  const [quantityInput, setQuantityInput] = useState('1');

  const quantityValidation = useMemo(() => boostQuantitySchema.safeParse(quantityInput), [quantityInput]);
  const safeQuantity = quantityValidation.success ? quantityValidation.data : 1;

  const result = useMemo(() => calculateBoostPrice(selectedDays, safeQuantity), [selectedDays, safeQuantity]);
  const telegramMessage = useMemo(() => createBoostCalculatorTelegramMessage(result), [result]);

  function handleDurationChange(value: string) {
    const nextDays = Number(value);
    setSelectedDays(getBoostPricingOption(nextDays).days);
  }

  function handleQuantityBlur() {
    const parsed = boostQuantitySchema.safeParse(quantityInput);
    setQuantityInput(String(parsed.success ? parsed.data : 1));
  }

  return (
    <Card className="overflow-hidden rounded-2xl border-border/70 bg-card/70 p-5 md:p-6">
      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Calculator className="size-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Boost Pricing Calculator</p>
              <h2 className="font-display text-xl font-semibold">Boost Calculator</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">Duration</span>
              <Select value={String(result.days)} options={durationOptions} onChange={(e) => handleDurationChange(e.target.value)} />
            </label>

            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">Quantity</span>
              <Input
                type="number"
                min={1}
                step={1}
                inputMode="numeric"
                value={quantityInput}
                onChange={(e) => setQuantityInput(e.target.value)}
                onBlur={handleQuantityBlur}
                placeholder="1"
              />
            </label>
          </div>

          <p className="text-xs text-muted-foreground">Total = quantity × unit price</p>

          {!quantityValidation.success && (
            <p className="text-xs text-rose-500">Quantity must be an integer and at least 1.</p>
          )}

          <div className="rounded-xl border border-border/70 bg-background/50 p-4">
            <p className="text-sm font-medium">Duration price table</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {boostPricing.map((option) => (
                <div
                  key={option.days}
                  className={`rounded-lg border p-3 text-sm ${
                    option.days === result.days ? 'border-primary/40 bg-primary/5' : 'border-border/60 bg-card/60'
                  }`}
                >
                  <p className="font-medium">
                    {option.days} {option.days === 1 ? 'day' : 'days'}
                  </p>
                  <p className="text-muted-foreground">{formatUZS(option.unitPrice)} UZS / unit</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-border/70 bg-background/70 p-4 md:p-5">
          <div>
            <p className="text-sm text-muted-foreground">Output</p>
            <h3 className="mt-1 font-display text-2xl font-semibold">{formatUZS(result.total)} UZS</h3>
            <p className="text-sm text-muted-foreground">
              {result.days} {result.days === 1 ? 'day' : 'days'} x {result.quantity} boost unit
              {result.quantity > 1 ? 's' : ''}
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-4">
            <p className="mb-3 text-sm font-medium">Breakdown</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Unit price:</span>
                <span>{formatUZS(result.unitPrice)} UZS</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Quantity:</span>
                <span>{result.quantity}</span>
              </div>
              <div className="border-t border-border/70 pt-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">Total:</span>
                  <span className="font-display text-lg font-semibold">{formatUZS(result.total)} UZS</span>
                </div>
              </div>
            </div>
          </div>

          <CTAButton message={telegramMessage} label="Contact via Telegram" className="w-full" size="lg" />
          <p className="text-xs text-muted-foreground">
            Prefilled message includes duration, quantity, unit price, and total amount.
          </p>
        </div>
      </div>
    </Card>
  );
}
