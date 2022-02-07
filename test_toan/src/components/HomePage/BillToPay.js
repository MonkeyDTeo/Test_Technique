import React from 'react';
import { Link } from "react-router-dom";
import FirstLine from "./LinesPaid/FirstBill"
import SecondLine from "./LinesPaid/ThirdBill"
import ThirdPage from "./LinesPaid/FourthBill"
import FourthPaid from './LinesPaid/SecondBill';

export default function BillToPay() {
    return (
        <nav>
            <div class="flex items-center justify-center h-screen bg-white">
                <div class="container">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-3xl">
                        < ThirdPage />
                        < SecondLine />
                        < FirstLine />
                        < FourthPaid />
                    </div>
                </div>
            </div>
        </nav >
    )
}