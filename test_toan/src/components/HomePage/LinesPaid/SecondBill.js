import React from 'react';

export default function FourthPaid() {

    return (
        <div class="md:flex">
            <div class="p-8">
                <div class="flex space-x-12 md:gap-4 ms:gap-20 content-between flex items-center">
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-base font-bold">FAC1506</div>
                        <p class="mt-2 text-slate-500 text-sm italic">À régler avant le 02/08/2021</p>
                    </div>
                    <div class="p-8">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                            </svg>
                            <div class="uppercase tracking-wide text-base font-bold">Escompte</div>
                        </div>
                        <p class="mt-2 text-green-500 text-sm italic">Appliqué</p>
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-base font-bold">2 850,00€</div>
                        <p class="mt-2  line-through  text-slate-500">3 000,00€</p>
                    </div>
                </div>
            </div>
        </div>
    )
}