import { InjectionToken } from '@angular/core';

import { Elements, ElementsOptions } from './elements';
import { Element } from './element';
import {
  CardDataOptions,
  TokenResult,
  BankAccount,
  BankAccountData,
  Pii,
  PiiData
} from './token';
import { SourceData, SourceResult, SourceParams } from './sources';
import { PaymentRequestOptions } from './payment-request';

export const STRIPE_PUBLISHABLE_KEY = new InjectionToken<string>(
  'Stripe Publishable Key'
);
export const STRIPE_OPTIONS = new InjectionToken<Options>('Stripe Options');

export interface StripeJS {
  elements(options?: ElementsOptions): Elements;
  createToken(el: Element, cardData?: CardDataOptions): Promise<TokenResult>;
  createToken(
    account: BankAccount,
    bankAccountData: BankAccountData
  ): Promise<TokenResult>;
  createToken(pii: Pii, piiData: PiiData): Promise<TokenResult>;
  createSource(el: Element, sourceData?: SourceData): Promise<SourceResult>;
  createSource(sourceData: SourceData): Promise<SourceResult>;
  retrieveSource(source: SourceParams): Promise<SourceResult>;
  paymentRequest(options: PaymentRequestOptions): any;
  createPaymentMethod(t: String, a: Element, b?: any): Promise<any>;
  handleCardPayment(clientSecret: string, data?: any): Promise<any>;
}

export interface Options {
  stripeAccount?: string;
}
