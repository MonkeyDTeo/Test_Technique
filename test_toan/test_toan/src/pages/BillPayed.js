import React from 'react';
import Bill from '../components/Bill';

import data from '../data/data.json';

export default function BillToPay() {
    return (
        <nav>
            <div class='flex items-center justify-center h-screen bg-white'>
                <div class='container'>
                    <div class='max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-3xl'>
                        {data.payments.map((payment) => (
                            <Bill payment={payment} toPay />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
