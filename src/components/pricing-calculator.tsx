'use client';

import { useMemo, useState, useCallback } from 'react';
import { Calculator } from 'lucide-react';
import {
  boostPricing,
  boostQuantitySchema,
  calculateBoostPrice,
  DEFAULT_BOOST_DURATION_DAYS,
  formatUZS,
  getBoostPricingOption,
  type BoostPricingResult
} from '@/config/pricing';
import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CTAButton } from '@/components/cta-button';
import { useMessages } from '@/i18n/context';

export function PricingCalculator() {
  const m = useMessages();

  const [selectedDays, setSelectedDays] = useState<number>(DEFAULT_BOOST_DURATION_DAYS);
  const [quantityInput, setQuantityInput] = useState('1');

  const durationOptions = useMemo(
    () =>
      boostPricing.map((option) => ({
        value: String(option.days),
        label: `${option.days} ${option.days === 1 ? m.common.day : m.common.days}`
      })),
    [m]
  );

  const quantityValidation = useMemo(() => boostQuantitySchema.safeParse(quantityInput), [quantityInput]);
  const safeQuantity = quantityValidation.success ? quantityValidation.data : 1;

  const result = useMemo(() => calculateBoostPrice(selectedDays, safeQuantity), [selectedDays, safeQuantity]);

  const buildTelegramMessage = useCallback(
    (r: BoostPricingResult) => {
      return [
        m.telegram.greeting,
        `${m.telegram.durationLabel}: ${r.days} ${r.days === 1 ? m.common.day : m.common.days}`,
        `${m.telegram.quantityLabel}: ${r.quantity}`,
        `${m.telegram.unitPriceLabel}: ${formatUZS(r.unitPrice)} ${m.common.currency}`,
        `${m.telegram.totalLabel}: ${formatUZS(r.total)} ${m.common.currency}`,
        m.telegram.orderConfirm
      ].join('\n');
    },
    [m]
  );

  const telegramMessage = useMemo(() => buildTelegramMessage(result), [buildTelegramMessage, result]);

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
              <p className="text-sm font-medium text-muted-foreground">{m.pricing.calculatorSubtitle}</p>
              <h2 className="font-display text-xl font-semibold">{m.pricing.calculatorTitle}</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">{m.pricing.durationLabel}</span>
              <Select value={String(result.days)} options={durationOptions} onChange={(e) => handleDurationChange(e.target.value)} />
            </label>

            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">{m.pricing.quantityLabel}</span>
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

          <p className="text-xs text-muted-foreground">{m.pricing.totalFormula}</p>

          {!quantityValidation.success && (
            <p className="text-xs text-rose-500">{m.pricing.quantityError}</p>
          )}

          <div className="rounded-xl border border-border/70 bg-background/50 p-4">
            <p className="text-sm font-medium">{m.pricing.priceTableTitle}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {boostPricing.map((option) => (
                <div
                  key={option.days}
                  className={`rounded-lg border p-3 text-sm ${
                    option.days === result.days ? 'border-primary/40 bg-primary/5' : 'border-border/60 bg-card/60'
                  }`}
                >
                  <p className="font-medium">
                    {option.days} {option.days === 1 ? m.common.day : m.common.days}
                  </p>
                  <p className="text-muted-foreground">{formatUZS(option.unitPrice)} {m.common.currency} / {m.common.boostUnit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-border/70 bg-background/70 p-4 md:p-5">
          <div>
            <p className="text-sm text-muted-foreground">{m.pricing.outputLabel}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold">{formatUZS(result.total)} {m.common.currency}</h3>
            <p className="text-sm text-muted-foreground">
              {result.days} {result.days === 1 ? m.common.day : m.common.days} x {result.quantity}{' '}
              {result.quantity === 1 ? m.common.boostUnit : m.common.boostUnits}
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-4">
            <p className="mb-3 text-sm font-medium">{m.pricing.breakdownTitle}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">{m.pricing.unitPriceLabel}</span>
                <span>{formatUZS(result.unitPrice)} {m.common.currency}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">{m.pricing.quantityValueLabel}</span>
                <span>{result.quantity}</span>
              </div>
              <div className="border-t border-border/70 pt-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">{m.pricing.totalLabel}</span>
                  <span className="font-display text-lg font-semibold">{formatUZS(result.total)} {m.common.currency}</span>
                </div>
              </div>
            </div>
          </div>

          <CTAButton message={telegramMessage} label={m.pricing.contactViaTelegram} className="w-full" size="lg" />
          <p className="text-xs text-muted-foreground">
            {m.pricing.prefillNote}
          </p>
        </div>
      </div>
    </Card>
  );
}
