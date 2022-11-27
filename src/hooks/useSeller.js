import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSelleroading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/Seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isAdmin);
                  setIsSelleroading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
};

export default useSeller;