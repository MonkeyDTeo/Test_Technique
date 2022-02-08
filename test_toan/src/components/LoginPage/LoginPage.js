import React from 'react';
import ReactDOM from 'react-dom';

import Cleave from 'cleave.js/react';

export default function LoginPage() {
    return (
        <nav>
            <div class="flex items-center justify-center h-screen bg-white">
                <div class="container">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-xl">
                        <div class="flex justify-between">
                            <p class="text-3xl font-bold">Paiement sécurisé par prélèvement bancaire</p>
                        </div>
                        <div class="text-center	max-w-md mx-auto bg-gray-100 w-5/6 md:max-w-xl">
                            <p>Mise en place d'un mandat SEPA MANGOPAY</p>
                        </div>
                        <form class="w-full max-w-lg">
                            <div class="flex p-5">
                                <div class="w-full md:w-1/2 px-3 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Adresse du titulaire
                                    </label>
                                    <input class="text-sm italic appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Adresse du titulaire" />
                                </div>
                            </div>
                            <div class="flex p-5" >
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Adresse du titulaire
                                    </label>
                                    <input class="text-sm italic appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Adresse du titulaire" />
                                </div>
                            </div>
                            <div class="flex p-5 -mx-3">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Ville
                                    </label>
                                    <input class="text-sm italic appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Ville" />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Région
                                    </label>
                                    <input class="text-sm italic appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Région" />
                                </div>
                            </div>
                            <div class="flex p-5">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Code Postal
                                    </label>
                                    <input class="text-sm italic appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Code Postal" />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Pays
                                    </label>
                                    <select class="text-sm italic block appearance-none w-full bg-white text-gray-700 border border-gray-500 py-3 px-4 rounded leading-tight focus:outline-none focus:shadow-outline">
                                        <option class="">France</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex p-5 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        IBAN
                                    </label>
                                    <input class="text-sm italic appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="" />
                                </div>
                            </div>
                        </form>
                    </div >
                </div >
            </div >
        </nav >
    )
}