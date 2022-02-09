import React from 'react';
import { Link } from "react-router-dom";
import Bill from "../components/Bill/index"

export default function LoginPage() {
    return (
        <nav>
            <div class="flex items-center justify-center h-screen bg-white">
                <div class="container">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-xl">
                        <div class="p-5 px-20">
                            <div class="mt-12">
                                <p class="text-3xl font-bold">Paiement sécurisé par prélèvement bancaire</p>
                            </div>
                            <div class="text-center	mt-10 mx-auto bg-gray-100 md:max-w-xl">
                                <p>Mise en place d'un mandat SEPA MANGOPAY</p>
                            </div>
                        </div>
                        <form class="w-full -space-y-7 max-w-lg">
                            <div class="flex p-5">
                                <div class="w-full md:w-1/2 px-3 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Titulaire du compte
                                    </label>
                                    <input class="text-sm italic appearance-none block w-96 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Titulaire du compte" />
                                </div>
                            </div>
                            <div class="flex p-5" >
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Adresse du titulaire
                                    </label>
                                    <input class="text-sm italic appearance-none block w-96 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Adresse du titulaire" />
                                </div>
                            </div>
                            <div class="flex p-5">
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
                                        <option>Amérique</option>
                                        <option>Russie</option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex p-5 mb-6">
                                <div class="w-96 md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        IBAN
                                    </label>
                                    <input class="text-sm italic appearance-none block w-96  text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="IBAN" />
                                </div>
                            </div>

                        </form>
                        <div class="ml-64">
                            <button class="text-black font-bold py-2 px-4 rounded">
                                Anuller
                            </button>
                            <button class="bg-emerald-500 hover:bg-emerald-600 text-white w-40 font-bold py-2 px-4 rounded">
                                Payer 
                            </button>
                        </div>
                        <div class="inline-flex"></div>
                    </div >
                </div >
            </div >
        </nav >
    )
}