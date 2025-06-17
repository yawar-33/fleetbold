// File: components/booking-report/PaymentDetails.tsx
import React from 'react';
import { formatDateTime } from '@/lib/dateUtils';

interface PaymentItem {
  description: string;
  amount: number;
}

interface PaymentInfo {
  invoice_number?: string;
  status: string;
  method: string;
  method_details?: string;
  date: string;
  transaction_id?: string;
  billing_address?: string;
  items?: PaymentItem[];
  tax?: number;
  discount?: number;
  total_amount: number;
}

interface PaymentDetailsProps {
  paymentInfo: PaymentInfo;
}

export default function PaymentDetails({ paymentInfo }: PaymentDetailsProps): React.ReactElement | null {
  const getStatusClass = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'paid';
      case 'pending':
        return 'pending';
      case 'refunded':
        return 'refunded';
      case 'failed':
        return 'failed';
      default:
        return '';
    }
  };

  if (!paymentInfo) return null;

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <i className="fas fa-credit-card"></i>
        </div>
        <h2 className="card-title">Payment Details</h2>
      </div>
      <div className="card-body">
        <div className="payment-header">
          <div className="payment-title">Invoice #{paymentInfo.invoice_number || 'N/A'}</div>
          <div className={`payment-status ${getStatusClass(paymentInfo.status)}`}>
            {paymentInfo.status}
          </div>
        </div>

        <div className="payment-items">
          {paymentInfo.items && paymentInfo.items.map((item, index) => (
            <div key={index} className="payment-item">
              <div className="payment-item-label">{item.description}</div>
              <div className="payment-item-value">${item.amount.toFixed(2)}</div>
            </div>
          ))}
          
          {paymentInfo.tax !== undefined && (
            <div className="payment-item">
              <div className="payment-item-label">Tax</div>
              <div className="payment-item-value">${paymentInfo.tax.toFixed(2)}</div>
            </div>
          )}
          
          {paymentInfo.discount !== undefined && (
            <div className="payment-item">
              <div className="payment-item-label">Discount</div>
              <div className="payment-item-value">-${paymentInfo.discount.toFixed(2)}</div>
            </div>
          )}
        </div>

        <div className="payment-total">
          <div>Total</div>
          <div>${paymentInfo.total_amount.toFixed(2)}</div>
        </div>

        <div className="info-grid" style={{ marginTop: '2rem' }}>
          <div className="info-card">
            <div className="info-label">Payment Method</div>
            <div className="info-value">
              <i className={`fas fa-${paymentInfo.method === 'credit_card' ? 'credit-card' : 'money-bill'}`} style={{ marginRight: '0.5rem' }}></i>
              {paymentInfo.method_details || paymentInfo.method}
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-label">Payment Date</div>
            <div className="info-value">{formatDateTime(paymentInfo.date)}</div>
          </div>
          
          {paymentInfo.transaction_id && (
            <div className="info-card">
              <div className="info-label">Transaction ID</div>
              <div className="info-value">{paymentInfo.transaction_id}</div>
            </div>
          )}
          
          {paymentInfo.billing_address && (
            <div className="info-card">
              <div className="info-label">Billing Address</div>
              <div className="info-value">{paymentInfo.billing_address}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}