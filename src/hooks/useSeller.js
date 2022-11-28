import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSelleroading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://server-to-side.vercel.app/users/Seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                  setIsSelleroading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
};

export default useSeller;