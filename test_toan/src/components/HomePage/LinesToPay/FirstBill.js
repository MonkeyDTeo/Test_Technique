import React from 'react';

export default function FirstBill() {

    return (
        <div class="md:flex">
            <div class="p-8">
                <div class="flex space-x-11 md:gap-4 ms:gap-20 content-between flex items-center">
                    <div class="p-8">
                        <div class="form-check">
                            <input class="mr-3 form-check-input h-4 w-4 rounded-sm my-1 align-top float-left cursor-pointer" type="checkbox" />
                        </div>
                        <div class="uppercase tracking-wide text-base font-bold">FAC1512</div>
                        <p class="mt-2 text-slate-500 text-sm italic">À régler avant le 08/12/2021</p>
                    </div>
                    <div class="p-8">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                            </svg>
                            <div class="uppercase tracking-wide text-base font-bold">3x sans frais</div>
                        </div>
                        <p class="mt-2 text-green-500 text-sm italic">Disponible</p>
                    </div>
                    <div class="p-8 mt-2">
                        <div class="mt-2 uppercase tracking-wide text-base font-bold">500,00€</div>
                    </div>
                </div>
            </div>
        </div>
    )
}