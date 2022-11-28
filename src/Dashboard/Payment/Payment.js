import React from 'react';
import { data } from 'autoprefixer';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChecOutForm from './ChecOutForm';
const stripePromise = loadStripe('pk_test_51M7OTXIWBWJssxY4wSJFbcHEOLDYIsT03ayBr5w4lBjQlZHZUVKhzeQCnOnyi7W2HJKBuxurFfvAYskr21CdcjWe00TRmnv0k8');

const Payment = () => {
    const oders=useLoaderData()
    console.log(oders)
    return (
        <div className='w-96 my-12'>
             <Elements stripe={stripePromise}>
                   <ChecOutForm
                   oders={oders}/>
                </Elements>
        </div>
    );
};

export default Payment;