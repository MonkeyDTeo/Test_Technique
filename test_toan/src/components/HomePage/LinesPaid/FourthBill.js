import React from 'react';

export default function ThirdBill() {

    return (
        <div class="md:flex">
            <div class="p-8">
                <div class="flex space-x-64 md:gap-4 ms:gap-20 content-between flex items-center">
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-base font-bold">FAC1509</div>
                        <p class="mt-2 text-slate-500 text-sm italic">À régler avant le 26/11/2021</p>
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-base font-bold">3 000,00 €</div>
                    </div>
                </div>
            </div>
        </div>
    )
}