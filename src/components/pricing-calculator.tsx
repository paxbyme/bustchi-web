'use client';

import { useEffect, useMemo, useState } from 'react';
import { Calculator, Check, Minus, Plus } from 'lucide-react';
import {
  calculatePrice,
  createCalculatorTelegramMessage,
  formatUZS,
  pricingConfig,
  type PackageKey,
  type ServiceType
} from '@/config/pricing';
import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CTAButton } from '@/components/cta-button';
import { cn } from '@/lib/utils';

const serviceOptions = (Object.keys(pricingConfig) as ServiceType[]).map((service) => ({
  value: service,
  label: pricingConfig[service].label
}));

export function PricingCalculator() {
  const [service, setService] = useState<ServiceType>('BOOST');
  const [packageKey, setPackageKey] = useState<PackageKey>('standard');
  const [quantity, setQuantity] = useState<number>(3);

  const serviceConfig = pricingConfig[service];
  const packageOptions = (Object.keys(serviceConfig.packages) as PackageKey[]).map((key) => ({
    value: key,
    label: serviceConfig.packages[key].label
  }));
  const packageConfig = serviceConfig.packages[packageKey];

  useEffect(() => {
    const nextMin = serviceConfig.packages[packageKey].minQuantity;
    const nextMax = serviceConfig.packages[packageKey].maxQuantity;
    setQuantity((current) => Math.min(Math.max(current, nextMin), nextMax));
  }, [serviceConfig, packageKey]);

  const result = useMemo(() => calculatePrice(service, packageKey, quantity), [service, packageKey, quantity]);
  const telegramMessage = useMemo(() => createCalculatorTelegramMessage(result), [result]);

  function updateQuantity(next: number) {
    const safeNext = Number.isFinite(next) ? next : packageConfig.minQuantity;
    setQuantity(Math.min(Math.max(safeNext, packageConfig.minQuantity), packageConfig.maxQuantity));
  }

  return (
    <Card className="grid gap-6 rounded-2xl bg-card/70 p-5 md:grid-cols-[1.2fr_1fr] md:p-6">
      <div className="space-y-5">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Calculator className="size-4" />
          </span>
          BOOST / PREMIUM narx kalkulyatori
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="text-muted-foreground">Xizmat turi</span>
            <Select
              value={service}
              options={serviceOptions}
              onChange={(e) => {
                const nextService = e.target.value as ServiceType;
                setService(nextService);
                setPackageKey('standard');
              }}
            />
          </label>

          <label className="space-y-2 text-sm">
            <span className="text-muted-foreground">Paket</span>
            <Select
              value={packageKey}
              options={packageOptions}
              onChange={(e) => setPackageKey(e.target.value as PackageKey)}
            />
          </label>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Quantity</span>
            <span className="font-medium">
              {result.quantity} {serviceConfig.quantityLabel.toLowerCase()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background hover:bg-muted"
              onClick={() => updateQuantity(result.quantity - 1)}
              aria-label="Kamaytirish"
            >
              <Minus className="size-4" />
            </button>
            <Input
              type="number"
              min={packageConfig.minQuantity}
              max={packageConfig.maxQuantity}
              value={quantity}
              onChange={(e) => updateQuantity(Number(e.target.value || 0))}
              className="text-center"
            />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background hover:bg-muted"
              onClick={() => updateQuantity(result.quantity + 1)}
              aria-label="Ko'paytirish"
            >
              <Plus className="size-4" />
            </button>
          </div>
          <input
            type="range"
            min={packageConfig.minQuantity}
            max={packageConfig.maxQuantity}
            value={result.quantity}
            onChange={(e) => updateQuantity(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
          />
          <p className="text-xs text-muted-foreground">{serviceConfig.quantityHint}</p>
        </div>

        <div className="rounded-xl border border-border/70 bg-muted/40 p-4">
          <p className="text-sm font-medium">Qisqa tavsif</p>
          <p className="mt-1 text-sm text-muted-foreground">{packageConfig.shortDescription}</p>
          <p className="mt-2 text-xs text-muted-foreground">Tavsiya: {packageConfig.recommendedFor}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {packageConfig.included.map((item) => (
              <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className="mt-0.5 size-3.5 text-success" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-border/80 bg-background/70 p-4 md:p-5">
        <div>
          <p className="text-sm text-muted-foreground">Hisob-kitob</p>
          <h3 className="mt-1 font-display text-xl font-semibold">{serviceConfig.label}</h3>
          <p className="text-sm text-muted-foreground">{serviceConfig.packages[packageKey].label} paketi</p>
        </div>

        <div className="space-y-2 rounded-xl border border-border/70 bg-card p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Bazaviy narx ({formatUZS(packageConfig.basePrice)} UZS)</span>
            <span>{result.quantity}x</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatUZS(result.subtotal)} UZS</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Chegirma</span>
            <span className={cn(result.discountPercent > 0 && 'text-success')}>
              {result.discountPercent > 0 ? `-${result.discountPercent}%` : '0%'}
            </span>
          </div>
          <div className="mt-2 border-t border-border/70 pt-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Jami</span>
              <span className="font-display text-2xl font-semibold">{formatUZS(result.total)} UZS</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{result.description}</p>
        <CTAButton message={telegramMessage} label="Telegramga yuborish" className="w-full" size="lg" />
        <p className="text-xs text-muted-foreground">
          Tugma avtomatik xabar yaratadi: service, package, quantity va umumiy narx bilan.
        </p>
      </div>
    </Card>
  );
}
