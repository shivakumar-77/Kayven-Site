// Pricing data structure for Kayven
export type PlanName = 'Basic' | 'Standard' | 'Pro AI';
export type Region = 'India' | 'Global';
export type BillingPeriod = 'Monthly' | 'Yearly';

export interface PlanFeatures {
  name: PlanName;
  description: string;
  features: string[];
}

export interface PricingData {
  plans: Record<PlanName, PlanFeatures>;
  prices: Record<Region, Record<BillingPeriod, Record<PlanName, {
    current: number | string; // number for India, string for Global to avoid decimal issues
    original?: number // only for India
  }>>>;
}

// Plan features based on the pricing data block
export const plans: Record<PlanName, PlanFeatures> = {
  Basic: {
    name: 'Basic',
    description: 'Essential features for getting started with Kayven.',
    features: [
      'Food tracking',
      'Basic nutrition insights',
      'AI Coach',
      'Meal planning',
      'Workout planning',
      'Progress tracking'
    ]
  },
  Standard: {
    name: 'Standard',
    description: 'Enhanced features for regular users.',
    features: [
      'Everything in Basic',
      'Advanced nutrition insights',
      'AI Coach (advanced)',
      'Personalised meal planning',
      'Advanced workout plans',
      'Progress analytics'
    ]
  },
  'Pro AI': {
    name: 'Pro AI',
    description: 'The complete Kayven intelligence experience.',
    features: [
      'Everything in Standard',
      'Custom AI recommendations',
      'Performance tracking',
      'Priority support'
    ]
  }
};

// Pricing data
export const pricingData: PricingData = {
  plans,
  prices: {
    India: {
      Monthly: {
        Basic: { current: 299, original: 499 },
        Standard: { current: 499, original: 799 },
        'Pro AI': { current: 1399, original: 1999 }
      },
      Yearly: {
        Basic: { current: 2299, original: 3999 },
        Standard: { current: 3899, original: 6499 },
        'Pro AI': { current: 10899, original: 15499 }
      }
    },
    Global: {
      Monthly: {
        Basic: { current: '9.99' },
        Standard: { current: '19.99' },
        'Pro AI': { current: '39.99' }
      },
      Yearly: {
        Basic: { current: '69.99' },
        Standard: { current: '139.99' },
        'Pro AI': { current: '279.99' }
      }
    }
  }
};

// Helper functions
export const calculateDiscountPercent = (was: number, price: number): number => {
  return Math.round((was - price) / was * 100);
};

export const calculateSaving = (was: number, price: number): number => {
  return was - price;
};

export const calculateEffectiveMonthly = (price: number | string): number => {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  return Math.round(numericPrice / 12);
};

// Format price for India (₹ with toLocaleString)
export const formatIndiaPrice = (price: number | string): string => {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(numericPrice);
};

// Format price for Global ($ with 2 decimals)
export const formatGlobalPrice = (price: number | string): string => {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numericPrice);
};

// Get formatted price with original price for India
export const getIndiaPriceDisplay = (regionData: { current: number | string; original?: number }) => {
  if (typeof regionData.current === 'number' && regionData.original !== undefined) {
    return {
      current: formatIndiaPrice(regionData.current),
      original: formatIndiaPrice(regionData.original),
      discountPercent: calculateDiscountPercent(regionData.original, regionData.current),
      saving: calculateSaving(regionData.original, regionData.current)
    };
  }
  return {
    current: formatIndiaPrice(regionData.current),
    original: undefined,
    discountPercent: 0,
    saving: 0
  };
};

// Get effective monthly price for India
export const getIndiaEffectiveMonthly = (yearlyPrice: number | string): string => {
  const effective = calculateEffectiveMonthly(yearlyPrice);
  return formatIndiaPrice(effective);
};

// Get effective monthly price for Global
export const getGlobalEffectiveMonthly = (yearlyPrice: number | string): string => {
  const numericPrice = typeof yearlyPrice === 'string' ? parseFloat(yearlyPrice) : yearlyPrice;
  const effectiveMonthly = Math.round((numericPrice / 12) * 100) / 100;
  return formatGlobalPrice(effectiveMonthly);
};