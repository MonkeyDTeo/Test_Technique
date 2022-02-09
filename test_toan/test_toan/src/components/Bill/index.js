import React from 'react';

import MultiPayment from '../MultiPayment';
import Discount from '../Discount';

export default function Bill({ payment, toPay }) {
    if (
        (payment.payedDate === null && !toPay) ||
        (toPay && payment.payedDate)
    ) {
        return <></>;
    }

    return (
        <div class='md:flex'>
            <div class='p-8'>
                <div class='flex space-x-8 md:gap-4 sm:gap-20 sm content-between flex items-center'>
                    <div class='p-8'>
                        <div class="form-check">
                            <input class="mr-3 form-check-input h-4 w-4 rounded-sm my-1 align-top float-left cursor-pointer" type="checkbox" />
                        </div>
                        <div class='uppercase tracking-wide text-base font-bold'>
                            {payment.invoiceNumber}
                        </div>
                        <p class='mt-2 text-slate-500 text-sm italic'>
                            {payment.payedDate === null
                                ? `À régler avant le ${payment.sentDate}`
                                : `Réglée le ${payment.payedDate}`}
                        </p>
                    </div>
                    {(payment.multiPaymentStatus === 'AVAILABLE') && (
                        <MultiPayment payedDate={payment.payedDate} />
                    )}
                    {payment.discount !== null && (
                        <Discount
                            payedDate={payment.payedDate}
                            discount={payment.discount}
                        />
                    )}
                    <div class='p-8 md:gap-4'>
                        <div class='uppercase tracking-wide text-base font-bold'>
                            {payment.amount} €
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
