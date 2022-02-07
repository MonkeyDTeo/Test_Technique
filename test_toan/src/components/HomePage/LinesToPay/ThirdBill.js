import React from 'react';

export default function ThirdBill() {

    return (
        <div class="md:flex">
            <div class="p-8">
                <div class="flex space-x-72 md:gap-4 ms:gap-20 content-between flex items-center">
                    <div class="p-8">
                        <div class="form-check">
                            <input class="mr-3 form-check-input h-4 w-4 rounded-sm my-1 align-top float-left cursor-pointer" type="checkbox" />
                        </div>
                        <div class="uppercase tracking-wide text-base font-bold">FAC1510</div>
                        <p class="mt-2 text-slate-500 text-sm italic">À régler avant le 26/11/2021</p>
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-base font-bold">850,00 €</div>
                    </div>
                </div>
            </div>
        </div>
    )
}