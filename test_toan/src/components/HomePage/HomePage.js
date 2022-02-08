import React from 'react';
import { Link } from "react-router-dom";
import FirstLine from "./LinesToPay/FirstBill"
import SecondLine from "./LinesToPay/SecondBill"
import ThirdPage from "./LinesToPay/ThirdBill"
import LoginPage from "../LoginPage/LoginPage";
import BillToPay from "./BillToPay";

export default function HomePage() {
    return (
        <nav>
            <div class="flex items-center justify-center h-screen bg-white">
                <div class="container">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-3xl">
                        < FirstLine />
                        < SecondLine />
                        < ThirdPage />
                        <div class="ml-96 space-x-80 content-between ">
                            <Link to="/LoginPage">
                                <button class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded" data-modal-toggle="authentication-modal">
                                    Payer 3 350, 00€
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-4">
                        <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="5" y="11" width="14" height="10" rx="2" />  <circle cx="12" cy="16" r="1" />  <path d="M8 11v-4a4 4 0 0 1 8 0v4" /></svg>
                        <p class="mt-2 text-black text-sm italic">Paiement en ligne 100% sécurisé</p>
                    </div>
                </div>
            </div>
        </nav >
    )
}